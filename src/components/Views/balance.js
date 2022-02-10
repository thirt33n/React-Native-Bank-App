import React,{ useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import Button from '../button/button1';
import { StatusBar } from 'expo-status-bar';

export default function Balance(){
    
    const [bal, setBal] = useState(10000);
    const [cur, setCur] = useState('$');
    const [change, setChange] = useState('-');
    const [animate,setAnm] = useState(false);

    function close(){
        setAnm(false);
    }

    function square(){
        let x = Math.floor((Math.random() * 2)+1);
        return x;
    }
    function balChange(){
        setAnm(true);
        setTimeout(close,2000);
        let change = square()
        let val = Math.pow(-1,change);
        let inc = Math.floor((Math.random() *val*999) + 0);
        if(inc>0)
            setChange('⬆');
        else if(inc<0)
            setChange('⬇')
        else
            setChange('-');
        setBal(bal + inc);
    }

    function dolToRup(){
        setAnm(true);
        setTimeout(close,2000);
        if ({cur} === '₹')
            return;
        else{
            let rup = Math.floor(bal * 75);
            setBal(rup);
            setCur('₹');
        }
        
    }
    function rupToDol(){
        setAnm(true);
        setTimeout(close,2000);
        if ({cur} === "$"){
            return;
        }
        else{
            let dol = Math.floor(bal * 0.0134);
            setBal(dol);
            setCur('$');
        }

    }
    
    return(
        <View style = {styles.main}>

            <StatusBar backgroundColor='#171717' />
            <View style = {styles.loader}>
                <Text style={{position:'absolute',fontSize:20,marginLeft:-60}}>Account Balance</Text>
                <ActivityIndicator
                animating = {animate}
                color = '#000'
                size = "large"
                />
            </View>
            <Text style = {styles.Balance}>{cur} {bal}  {change}</Text>
            <View style = {styles.Buttons}>
                <Button title={'?'} action={balChange} />
                <Button title={'₹'} action={dolToRup} />
                <Button title={'$'} action={rupToDol} />
            </View>
        </View>
    );



}

const styles = StyleSheet.create({

    main: {
        display: 'flex',
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: '35%',
        marginBottom: '10%',

    },

    loader:{
        marginBottom: '30%',
    },

    Balance: {
        display: 'flex',
        color: '#252525',
        fontSize: 40,
        fontFamily: 'sans-serif-condensed',
        fontWeight: 'normal',
        position: 'absolute',
        marginBottom: '10%',
    },

    Buttons: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        marginBottom: '15%',

    },
    text: {
        fontSize: 10,
        color: '#000',
        marginTop: '4%',
        padding: '2%'


    }




})