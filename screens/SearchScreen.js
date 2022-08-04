import React, {Component} from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    StyleSheet,
    TextInput,
    SafeAreaView,
    Image
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

export default class SearchScreen extends Component{


    static navigationOptions = ({navigation}) => ({
        headerLeft: 
            <TouchableOpacity onPress={()=>{navigation.goBack()}}>
            <Image source = {require("../assets/images/back.png")} style={{width:22, height : 22, marginLeft:15}}/>
            </TouchableOpacity>
        ,
        headerTitle:null,
        headerRight:
            <TextInput 
            style={{height:35, width:300, borderRadius:5, backgroundColor:"#D9D9D9", marginRight:20,
                    paddingLeft:15, fontSize:18}}
            placeholder='검색'
            placeholderTextColor="#AAAAAA"
            multiline={false}
            onSubmitEditing={() => this.doSignup}
            />
    });

    render(){
        return (
            <SafeAreaView style={styles.container}>
            <View style={styles.control}>
                <View style={styles.search}>
                    <Text style={styles.title}>추천 검색어</Text>
                    <View>
                        <Text style={styles.tag}>#죽전</Text>
                    </View>
                </View>  
                <View style={styles.search}>
                    <Text style={styles.title}>최근 검색어</Text>
                    <View>
                        <Text style={styles.tag}>#어딘가</Text>
                    </View>
                </View>  
            </View>
            </SafeAreaView>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:"white",
        alignItems: 'center'
    },
    control:{
        width : wp('90%'),
        marginleft:30,
        marginTop:25,
        alignItems: 'left'
    },
    search:{
        marginBottom:30
    },
    title:{
        fontFamily:"GBold",
        fontSize:20,
        marginBottom:20
    },
    tag:{
        fontFamily:"GMedium",
        fontSize:18
    }
})