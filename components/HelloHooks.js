// React Native Counter Example using Hooks!

import React, {useState} from 'react';
import {View, Text, Button, StyleSheet, Pressable} from 'react-native';

const TestState = () => {
  const [count, setCount] = useState(0);

  const increment = (value=1) => {
    setCount(prev => prev + value);
  }

  return (
    <View style={styles.container}>
      <Text>You clicked {count} times</Text>
      <Pressable style={styles.button}
        onPress={() => increment(5)}>
            <Text style={styles.text}>Increment</Text>
      </Pressable>        
    </View>
  );
};

// React Native Styles
const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'red',
  },
  text: {
    // fontSize: 16,
    // lineHeight: 21,
    // fontWeight: 'bold',
    // letterSpacing: 0.25,
    fontWeight: 'bold',
    fontSize: 16,
    color: 'yellow',
    fontStyle: 'italic'
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default TestState;