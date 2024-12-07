import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';

const MovieCard = ({ movie, onPress }) => {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Image source={{ uri: movie.image.medium }} style={styles.image} />
      <Text style={styles.title}>{movie.name}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: { flexDirection: 'row', margin: 10 },
  image: { width: 100, height: 150 },
  title: { fontSize: 18, color: '#fff', marginLeft: 10 },
});

export default MovieCard;
