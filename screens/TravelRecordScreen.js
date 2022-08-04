import React, {Component, useEffect, useState} from 'react';
import {
    View,
    Text,
    ScrollView,
    StyleSheet,
    Button
} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import axios from "axios";


export default class TravelRecordScreen extends Component{
    
    hi(){
        axios.get('http://localhost:8080/hello')
            .then(function (response){
                console.warn(response.data);
            })
    }


    render(){
        return (
            <View>
                
                <Text>1</Text>
            </View>  
        );
    }
}
