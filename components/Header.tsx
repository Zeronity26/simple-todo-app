import React from 'react';
import {View,Text} from 'react-native';
import Style from './Style';

export default function Header(){
    return(
        <View style={Style.header}>
            <Text style={Style.headerText}>Simple Todo App</Text>
        </View>
    )
}