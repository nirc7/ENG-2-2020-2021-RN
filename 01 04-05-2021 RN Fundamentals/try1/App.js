import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = { showYes: false };
  }
  
  
  btnLogin = () => {
    //alert(1);
    console.log(2);
    if (this.state.txt === '123') {
      this.setState({ showYes: true });
    }
    else
    {
      this.setState({ showYes: false });
    }
  }

  render() {
    console.log(this.state != null ? this.state.txt : '');
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={styles.Txt}>Nir's your app!</Text>
        <Text style={{
          color: '#37f',
          margin: 50
        }}>hello world!</Text>


        <TextInput
          style={styles.input}
          onChangeText={(text) => this.setState({ txt: text })}
          placeholder="enter ur num..."
          keyboardType="numeric"
        />
        <View style={{ margin: 20 }}>
          <Button title="Login" onPress={this.btnLogin} />
        </View>
        {this.state.showYes && <Text style={{color:'green'}} >Yes</Text> }
        { !this.state.showYes && <Text style={{color:'red'}} >No</Text> }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  Txt: {
    color: 'red',
    margin: 30,
    fontSize: 30
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});
