import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const YellowScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text 
            onPress = {()=>Actions.gold()}
            style = {styles.text}>
                Welcome to Yellow Screen
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})
export default YellowScreen;