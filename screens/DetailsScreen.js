import React from 'react';
import {ScrollView, Text} from 'react-native';

export default function DetailsScreen({navigation, route}) {
  const {vision, require, email, lookinfor} = route.params;
  
  console.log(email);
  console.log(require);
  console.log(lookinfor);
  return (
    <ScrollView style={{backgroundColor:'#fffafa',flex:1}}>
         <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        My Vision:
      </Text>
      <Text
      style={{
          
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:18,
        }}
      >{vision}</Text>
       <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Looking For:
      </Text>
      <Text
       style={{
          
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:18,

        }}
      >{require[0].label} 
       
       
      
      </Text>
      <Text
       style={{
          
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:18,

        }}
      >{require[1].label} 
       
       
      
      </Text>
     
   
         <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        Requirements:
      </Text>
       <Text
        style={{
          
          marginHorizontal: 20,
          marginVertical: 5,
            fontSize:18,
        }}
       >{lookinfor}</Text> 
         <Text
        style={{
          marginBottom: 3,
          marginTop: 35,
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:25,
          fontWeight: 'bold',
          textDecorationLine: 'underline',
        }}>
        My Contact Details:
      </Text>
      <Text
       style={{
          
          marginHorizontal: 20,
          marginVertical: 5,
          fontSize:18,
        }}
      >{email}</Text> 
    </ScrollView>
  );
}
