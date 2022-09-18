import { StyleSheet, Text, View ,Button,TextInput } from 'react-native'
import React from 'react'


const FirstPage = ({ navigation, route }) => {

    const [postText, setPostText] = React.useState('');
  
    return (
      // use Fragment
      <>
        <View style ={styles.container}>
            <Text style = {styles.heading}>Thai-Nichi institute of Technology</Text>
            <Text style = {styles.textStyle}>Please insert your name to pass it to second screen</Text>
            <TextInput
            multiline
            placeholder='Your name'
            style={{  width:400, padding: 10,margin:10, backgroundColor: '#DEDEDE' }}
            onChangeText={setPostText}
            value={postText}
            />
             
            <Button
            title='GO Next'
            
            onPress={() => {
                //Pass params back to HomeScreen funchion 5555555555555555
                navigation.navigate('Second Page', { post: postText })
            }}
            />
        </View>
      </>
  
    );
  }

export default FirstPage

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        padding: 20,
        },
        heading: {
        fontSize: 25,
        textAlign: 'center',
        marginVertical: 10,
        },
        textStyle: {
        textAlign: 'center',
        fontSize: 16,
        marginVertical: 10,
        },
});