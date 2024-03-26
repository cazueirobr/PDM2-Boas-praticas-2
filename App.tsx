import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Flatlistreutilizavel from './components/FlatList/CarFlatList';
import Card from './components/Cards/Card';
import MyComponent from './components/ParentCallBack/Clickme';

export default function App() {
  const handlePress = () => {
    console.log('Botão pressionado');
  };
  return (
    <View style={styles.container}>
      <MyComponent component={{ title: 'Meu Botão', onPress: handlePress }} />
      <Card>
      <Card.Body text='Isso aqui é um card composto'>
      </Card.Body>
      </Card>
        <Flatlistreutilizavel></Flatlistreutilizavel>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 300,
  },
});
