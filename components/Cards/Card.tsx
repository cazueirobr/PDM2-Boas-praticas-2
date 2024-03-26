import { View, Text, StyleSheet } from 'react-native'
import React, { Children, ReactNode } from 'react'
import CardBody from './CardsBodys/CardBody';

interface CardProps {
    children : ReactNode;
}

export default function Card({children} : CardProps) {
  return (
    <View style={styles.card}>
        {children}
    </View>
  )
}


Card.Body = CardBody

const styles = StyleSheet.create({
    card: {
      backgroundColor: '#fff',
      borderRadius: 8,
      padding: 16,
      marginBottom: 16,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 18,
      fontWeight: 'bold',
      marginBottom: 8,
    },
    text: {
      fontSize: 16,
      marginBottom: 4,
    },
  });