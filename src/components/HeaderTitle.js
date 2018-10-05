import React from 'react';
import { Button, Text, View, StyleSheet } from 'react-native';

const HeaderTitle = ({ title }) => (
  <View>
    <View>
      <Text style={ {fontSize: 20, fontWeight: 'bold', width: 300}}>{title}</Text>    
    </View>
  </View>
);

export default HeaderTitle;