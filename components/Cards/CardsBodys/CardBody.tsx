import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

interface BodyProps {
    text: string;
}

export default function CardBody({text}: BodyProps) {

    return (
    <View>
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    text: {
      color: 'green',
    },
  });