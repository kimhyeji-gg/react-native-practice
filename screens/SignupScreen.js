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


export default class SignupScreen extends Component{
    static navigationOptions = {
        header: null,
    };

    _signupcomplete(){
        this.props.navigation.replace('LoginScreen')
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
                    <View style={styles.inputView}>
                        <Text style={styles.label}>아이디</Text>
                        <TextInput
                            style={styles.input}
                            keyboardType='ascii-capable'
                            //onChangeText={(text) => setPassword(text)}
                            //value={password}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>비밀번호</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            keyboardType='ascii-capable'
                            //onChangeText={(text) => setPassword(text)}
                            //value={password}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>비밀번호 재확인</Text>
                        <TextInput
                            style={styles.input}
                            secureTextEntry
                            keyboardType='ascii-capable'
                            //onChangeText={(text) => setPassword(text)}
                            //value={password}
                            autoCapitalize="none"
                        />
                    </View>
                    <View style={styles.inputView}>
                        <Text style={styles.label}>닉네임</Text>
                        <TextInput
                            style={styles.input}
                            
                            //onChangeText={(text) => setPassword(text)}
                            //value={password}
                            autoCapitalize="none"
                        />
                    </View>
                    <TouchableOpacity
                        style={styles.buttonView}
                        onPress={this._signupcomplete.bind(this)}>
                        <Text style={styles.buttonText}>가입하기</Text>
                    </TouchableOpacity>
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
        top : hp('5%'),
        alignItems: 'center'
    },
    titleView:{
        alignItems: 'center',
        marginBottom:20
    },
    title: {
        fontSize:40,
        fontFamily:'GBold',
        color:'#448EF6'
    },
    inputView:{
        marginTop:20
    },
    input:{
        height: 48,
        overflow: 'hidden',
        backgroundColor: 'white',
        paddingLeft: 16,
        borderWidth:1,
        borderColor:"#D9D9D9",
        width : wp('70%'),
        marginTop:5,
        borderRadius: 5
    },
    buttonView: {
        backgroundColor: '#448EF6',
        marginTop: 50,
        height: 48,
        borderRadius: 5,
        alignItems: "center",
        justifyContent: 'center',
        width : wp('70%')
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontFamily:"GMedium"
    },
    label:{
        fontSize: 16,
        fontFamily:"GMedium"
    }
})