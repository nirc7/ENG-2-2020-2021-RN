import React, { Component } from 'react';
import { Text, View, StyleSheet } from 'react-native';

export default class ThirdPage extends Component {


  componentDidMount() {
    this.setState({firstFlag: 'frist time ' + new Date().getSeconds() });

    this._unsubscribeFocus = this.props.navigation.addListener('focus', (payload) => {
      console.log('will focus', payload);
      this.setState({ stam: 'got focus on ' + new Date().getSeconds() + ' seconds' });
    });
  }

  componentWillUnmount(){
    this._unsubscribeFocus();
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> Third Page </Text>
        <Text>{this.props.route.params != undefined ?
          this.props.route.params.user + ' seconds' : '...'}</Text>
        <Text>{this.state != null ? this.state.stam : 'first time'}</Text>
        <Text>{this.state != null ? this.state.firstFlag : 'first flag'}</Text>
      </View>
    )
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
