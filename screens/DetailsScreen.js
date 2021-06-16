import React from 'react';
import {ScrollView, Text} from 'react-native';

export default function DetailsScreen({navigation, route, item}) {
  const {vision, require, email, lookinfor} = route.params;

  console.log(require);
  return (
    <ScrollView style={{backgroundColor: '#fffafa', flex: 1}}>
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        My Vision:
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 18,
        }}>
        {vision}
      </Text>
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Looking For:
      </Text>

      {require.map((item) => {
        return (
          <Text
            style={{
              marginHorizontal: 20,
              marginVertical: 5,
              fontSize: 18,
              color: '#000',
            }}>
            {item.label}
          </Text>
        );
      })}

      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Requirements:
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 18,
        }}>
        {lookinfor}
      </Text>
      <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        My Contact Details:
      </Text>
      <Text
        style={{
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize: 18,
        }}>
        {email}
      </Text>
    </ScrollView>
  );
}
