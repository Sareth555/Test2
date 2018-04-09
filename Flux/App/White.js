import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const WhiteScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text 
            onPress = {()=>Actions.purple()}
            style = {styles.text}>
                Welcome to White Screen
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})
export default WhiteScreen;