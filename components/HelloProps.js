import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  center: {
    alignItems: 'center',
  },
});

function Greeting({name, age})  {
  return (
    <View style={styles.center}>
      <Text>Hello {name}, {age}!</Text>
    </View>
  );
};

const LotsOfGreetings = () => {
  return (
    <View style={[styles.center, {top: 50}]}>
      <Greeting name="Rexxar34" age="25" />
      <Greeting name="Jaina1" />
      <Greeting name="Valeera" />
    </View>
  );
};

export default LotsOfGreetings;