import React from 'react';
import {
    StyleSheet,
    Text,
    View
} from 'react-native';
import {Actions} from 'react-native-router-flux';
const ModalScreen = () =>{
    return(
        <View style = {styles.container}>
            <Text 
            onPress = {()=>Actions.pop()}
            style = {styles.text}>
                Modal
            </Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center'
    },
    text: {
        textAlign: 'center',
        fontSize: 20
    }
})
export default ModalScreen;