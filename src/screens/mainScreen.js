import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Balance from '../components/Views/balance';
import StockList from '../components/Views/list';
import NavBar from '../components/Views/navbar';

export default function MainScreen(){

    return(
        <View style={styles.screen}>
            <NavBar />
            <Balance />
            <StockList />
        </View>

    );
}

const styles = StyleSheet.create({
    screen: {
        display: 'flex',
        flex: 1,
        backgroundColor: '#ffd300',
    
    }




})