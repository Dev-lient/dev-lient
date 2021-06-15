import React from 'react';
import {ScrollView, Text, TextInput, StyleSheet} from 'react-native';
import Checkbox from './checkbox';
const Form = () => {
  return (
    <ScrollView
      style={{marginHorizontal: 20, marginVertical: 5, flex: 1, width: '100%'}}>
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,

          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Summary
      </Text>
      <TextInput
        placeholder="Enter your summary"
        multiline={true}
        numberOfLines={4}
        keyboardType="default"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 3,
        }}
      />
      <Text
        style={{
          marginBottom: 3,
          marginHorizontal: 20,
          marginVertical: 5,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        I Am Looking For
      </Text>
      <Checkbox />
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        My Requiremnts
      </Text>
      <TextInput
        placeholder="Enter Here"
        multiline={true}
        numberOfLines={4}
        keyboardType="default"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 3,
        }}
      />
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Contact/Email
      </Text>
      <TextInput
        placeholder="Contacts"
        multiline={true}
        numberOfLines={4}
        keyboardType="default"
        style={{
          borderWidth: 1,
          borderColor: 'black',
          padding: 10,
          marginBottom: 3,
        }}
      />
    </ScrollView>
  );
};

export default Form;
