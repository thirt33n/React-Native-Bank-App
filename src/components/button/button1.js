import React,{ useState } from 'react';
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native';

export default function Button(props) {

    let {title, action} = props

    return( 
            <TouchableOpacity style={styles.button} onPress={action}>
                <Text style={{ fontSize: 25}}>{title}</Text>
            </TouchableOpacity>

    
    );
};


const styles = StyleSheet.create ({

    button: {
        margin: '5%',
        backgroundColor: 'rgba(255,255,255,0.8)',
        borderRadius: 30,
        color: 'black',
        alignItems:'center',
        justifyContent: 'center',
        width: 50,
        height: 40,

    }


})