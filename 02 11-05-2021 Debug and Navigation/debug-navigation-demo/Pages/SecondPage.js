import React from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default function SecondPage(props) {
  return (
    <View style={styles.container}>
      <Text>Second Page !</Text>
      <TouchableOpacity onPress={() => { props.navigation.navigate('HomePage'); }}>
        <View style={{
          backgroundColor: 'gray',
          padding: 20,
          margin: 15,
          borderWidth: 3,
          borderRadius: 50
        }}>
          <Text style={{
            color: 'green',
            fontSize: 20,
            fontWeight: 'bold'
          }}>2H</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});