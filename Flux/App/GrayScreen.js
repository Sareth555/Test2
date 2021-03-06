import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const GrayScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text 
            onPress = {()=>Actions.green()}
            style = {styles.text}>
                Go to green screen
            </Text>
            <Text 
            onPress = {()=>Actions.modal()}
            style = {styles.text}>
                Go to Modal
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})
export default GrayScreen;