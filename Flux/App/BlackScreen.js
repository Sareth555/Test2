import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const BlackScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text 
            onPress = {()=>Actions.blue()}
            style = {styles.text}>
                Welcome to Black Screen
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20,
        color: 'white'
    }
})
export default BlackScreen;