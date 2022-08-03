import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView
} from 'react-native';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

export default class LoginScreen extends Component{
    
    static navigationOptions = {
        header: null,
    };

    _doLogin(){
        this.props.navigation.replace('TabNavigator')
    }

    _doSignup(){
        this.props.navigation.replace('SignupScreen')
    }

    render(){
        return (
            <SafeAreaView style={styles.container}>
                    <KeyboardAwareScrollView
                        style={{ flex: 1, width: '100%' }}
                        keyboardShouldPersistTaps="never">
                        <View style={styles.control}>
                            <View style={styles.titleView}>
                                <Text style={styles.title}>같이갈래?</Text>
                            </View>    

                            <View style = {styles.inputView}>
                                <View style={styles.inputViewin}>
                                    <TextInput
                                        style={styles.input1}
                                        placeholder='ID'
                                        placeholderTextColor="#AAAAAA"
                                        keyboardType='ascii-capable'
                                        //onChangeText={(text) => setEmail(text)}
                                        //value={email}
                                        autoCapitalize="none"
                                    />
                                    <View style={styles.line}></View>
                                    <TextInput
                                        style={styles.input2}
                                        placeholderTextColor="#AAAAAA"
                                        secureTextEntry
                                        placeholder='Password'
                                        //onChangeText={(text) => setPassword(text)}
                                        //value={password}
                                        autoCapitalize="none"
                                    />
                                </View>
                                <TouchableOpacity
                                    style={styles.buttonView}
                                    onPress={this._doLogin.bind(this)}>
                                    <Text style={styles.buttonText}>로그인</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.signupView}>
                                <Text onPress={this._doSignup.bind(this)} style={styles.signupText}>회원가입</Text>
                            </View>    
                        </View>
                    </KeyboardAwareScrollView>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white"
    },
    control:{
        top : hp('20%'),
        alignItems: 'center'
    },
    titleView:{
        alignItems: 'center'
    },
    title: {
        fontSize:40,
        fontFamily:'GBold',
        color:'#448EF6'
    },
    inputView:{
        width : wp('80%'),
        marginTop:30,
        borderWidth:1,
        padding:30,
        borderRadius: 5,
        borderColor:"#D9D9D9",
        backgroundColor:"white"
    },
    inputViewin:{
        borderWidth:1,
        borderColor:"#448EF6",
        borderRadius: 5
    },
    input1: {
        height: 48,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        borderTopRightRadius:5,
        borderTopLeftRadius:5
    },
    input2: {
        height: 48,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        borderBottomRightRadius:5,
        borderBottomLeftRadius:5
    },
    line:{
        borderBottomColor: '#448EF6',
        borderBottomWidth: 1,
    },
    buttonView: {
        backgroundColor: '#448EF6',
        marginTop: 50,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center'
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily:"GMedium"
    },
    signupView: {
        flex: 1,
        alignItems: "center",
        marginTop: 20
    },
    signupText: {
        color: "#448EF6",
        fontFamily:"GMedium",
        fontSize: 16
    },


})