import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Dimensions } from 'react-native';
import RoundButton from "./RoundButton";

export default class ZoomLyricsContainer extends Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <View style={styles.container}>
        <RoundButton title="A+" onPress={this.props.increaseFontSize} />
        <RoundButton title="A-" onPress={this.props.decreaseFontSize} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    position: 'absolute',
    top: Dimensions.get('window').height - 100,
    left: Dimensions.get('window').width - 100,
    zIndex: 100,
  }  
});