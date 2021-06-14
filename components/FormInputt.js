import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';
import {windowHeight, windowWidth} from '../utils/Dimentions';

import AntDesign from 'react-native-vector-icons/AntDesign';

const FormInputt = ({labelValue, placeholderText, iconType, ...rest}) => {
  return (
    <View style={styles.inputContainer}>
     
      <TextInput
        value={labelValue}
        style={styles.input}
        multiline
      
        placeholder={placeholderText}
        placeholderTextColor="#666"
        {...rest}
      />
    </View>
  );
};

export default FormInputt;

const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 1,
    marginBottom: 5,
    width: '100%',
    height: 100,
    borderColor: '#0000ff',
    borderRadius: 9,
    borderWidth: 1,
    flexDirection: 'row',
    
    backgroundColor: '#fff',
  },
  iconStyle: {
    padding: 10,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderRightColor: '#0000ff',
    borderRightWidth: 1,
    width: 50,
  },
  input: {
    padding: 10,
    flex: 1,
    fontSize: 16,
    fontFamily: 'Lato-Regular',
    color: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  },
  inputField: {
    padding: 10,
    marginTop: 5,
    marginBottom: 10,
    width: windowWidth / 1.5,
    height: windowHeight / 15,
    fontSize: 16,
    borderRadius: 8,
    borderWidth: 1,
  },
});
