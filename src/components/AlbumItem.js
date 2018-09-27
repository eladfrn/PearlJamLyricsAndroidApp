import React, { Component } from 'react';
import { Text, View, TouchableHighlight } from 'react-native';

export default class AlbumItem extends Component {

  constructor(props) {
    super(props);
    this.displayAlbumDetails = this.displayAlbumDetails.bind(this);

  }

  displayAlbumDetails() {
    this.props.onPress(this.props.name);
  }

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Text style={{ paddingBottom: 10, paddingTop: 30, fontSize: 20, flex: 1, alignItems: 'center' }}>{this.props.year}</Text>
        <TouchableHighlight underlayColor="white" onPress={this.displayAlbumDetails} >
          <View style={{
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
            <Text style={{ paddingBottom: 10, fontWeight: "bold", fontSize: 20 }}>{this.props.name}</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}