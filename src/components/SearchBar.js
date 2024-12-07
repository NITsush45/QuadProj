import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const SearchBar = ({ onSearch, onPress }) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholder="Search Movies"
        placeholderTextColor="#aaa"
        style={styles.input}
        onSubmitEditing={(event) => onSearch(event.nativeEvent.text)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { backgroundColor: '#333', padding: 10 },
  input: { backgroundColor: '#5555', color: '#fff', borderRadius: 5, padding: 10 },
});

export default SearchBar;
