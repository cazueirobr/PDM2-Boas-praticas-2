import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

interface MyComponentProps {
  component: {
    title: string;
    onPress: () => void;
  };
}

const MyComponent = ({ component }: MyComponentProps) => {
  return (
    <TouchableOpacity style={styles.container} onPress={component.onPress}>
      <Text style={styles.text}>{component.title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'lightblue',
    padding: 10,
    borderRadius: 5,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default MyComponent;
