import React, { useState } from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import axios from 'axios';
import MovieCard from '../components/MovieCard';
import SearchBar from '../components/SearchBar';

const SearchScreen = ({ navigation }) => {
  const [movies, setMovies] = useState([]);

  const handleSearch = (term) => {
    axios.get(`https://api.tvmaze.com/search/shows?q=${term}`).then((response) => {
      setMovies(response.data);
    });
  };

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      <FlatList
        data={movies}
        keyExtractor={(item) => item.show.id.toString()}
        renderItem={({ item }) => (
          <MovieCard
            movie={item.show}
            onPress={() => navigation.navigate('Details', { movie: item.show })}
          />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
});

export default SearchScreen;
