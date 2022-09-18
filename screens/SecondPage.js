import { StyleSheet, Text, View ,Button,TextInput } from 'react-native'
import React from 'react'

const SecondPage = ({navigation, route}) => {

    React.useEffect(() => {
        if (route.params?.post) {
          //Post updated
          //For example  
        }
      }, [route.params?.post]);
    
      return (
        <View style ={styles.container}>
          <Text style = {styles.heading}>Thai-Nichi institute of Technology</Text>
          <Text style={styles.textStyle}>Values Passed form First Page : {route.params?.post}</Text>
        </View>
      );
}

export default SecondPage


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