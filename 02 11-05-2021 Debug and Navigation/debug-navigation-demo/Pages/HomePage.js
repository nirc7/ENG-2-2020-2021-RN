import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { Button, Image, StyleSheet, Text, View, Dimensions } from 'react-native';

const { height, width } = Dimensions.get('window');
const screenHeight = height;


export default class HomePage extends Component {
  constructor(props) {
    super(props);
    this.state = { showLbl: false };
  }

  btnSayHello = () => {
    //debugger;
    let num = 7;
    console.log(1);
    num++;
    this.setState({ showLbl: true });
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Ruppin's app!</Text>
        <View style={{ margin: 15 }}>
          <Button title="Say Hello" onPress={this.btnSayHello} />
        </View>
        <View style={{ margin: 10 }}>
          {this.state.showLbl && <Text>Hello World!</Text>}
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="go 2 SecP"
            onPress={()=>{ this.props.navigation.navigate('SecondPage'); } } />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="Material tab"
            onPress={()=>{ this.props.navigation.navigate('MaterialTabbedPageNavigator'); } } />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="open drawer"
            onPress={()=>{ this.props.navigation.openDrawer(); } } />
        </View>
        <View style={{ margin: 10 }}>
          <Button
            title="go23 w Data"
            onPress={()=>{ this.props.navigation.navigate('ThirdPage', { user: 'Lucy ' + new Date().getSeconds() }); } } />
        </View>
        <Image
          style={{
            width: width * 0.5,
            height: screenHeight * 0.3,
            resizeMode: 'stretch'
          }}
          source={require('../assets/cp.jpg')} />
        <StatusBar style="auto" />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
