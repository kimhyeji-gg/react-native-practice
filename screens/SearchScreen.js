import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


export default class SearchScreen extends Component{
    static navigationOptions = {
        header: null,
    };
    render(){
        return (
            <SafeAreaView style={styles.container}>
            <View>
                <Text>Search</Text>
            </View>  
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
})