
import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const RoundButton = ({ title, onPress }) => (
  <TouchableOpacity onPress={onPress}
    style={styles.fontButton} >
    <Text style={{ fontSize: 17 }}>{title}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  fontButton: {
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 40,
    height: 40,
    backgroundColor: '#fff',
    borderRadius: 40,
    marginRight: 2
  }
});

export default RoundButton;