import React from 'react';
import {View, Text} from 'react-native';

export default function DetailsScreen({navigation, route}) {
  const {vision, require, email, post} = route.params;
  console.log(post);
  console.log(email);
  console.log(require);
  return (
    <View>
      <Text>{vision}</Text>
      <Text>{require[0].value}</Text>
      <Text>{require[0].label}</Text>
      <Text>{email}</Text>
    </View>
  );
}
