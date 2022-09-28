import * as React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import Constants from 'expo-constants';


// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

export default function App() {
  return (
    <View style={styles.container}>
    <Card style={{backgroundColor: '#ffd700',width: 300}}>

      <Text style={styles.paragraph}>
        A vida é a melhor escolha.
      </Text>
      <Card style={{display:'flex', alignItems:'center',background: '#ffd700', width: 300}}>
        <Image style={{ height:400, width: 200}} source={require('./assets/set.jpg')} />
      </Card>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#fff',
    padding: 9,
    display: "flex",
    alignItems:"center"
    
  },
  paragraph: {
    margin: 5,
    fontSize: 23,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  
});
