import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const CreatePost = () => {
  return (
    <View style={styles.container}>
      <Text>Create Post here!!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CreatePost