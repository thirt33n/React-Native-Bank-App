import React,{ useState } from 'react';
import { StyleSheet,Modal,ScrollView, Text,View, Alert, Pressable } from 'react-native';

export default function StockList(){
    function stonks(){
        let amt = Math.floor((Math.random()*500)+40);
        return amt;

    }
    const Stocks = [
        {name:"BTC",stock:stonks(),key:1},
        {name:"ETH",stock:stonks(),key:2},
        {name:"SHIBA",stock:stonks(),key:3},
        {name:"LTC",stock:stonks(),key:4},
        {name:"BBC",stock:stonks(),key:5},
        {name:"NIFTY",stock:stonks(),key:6},
        {name:"SENSEX",stock:stonks(),key:7},
        {name:"BNB",stock:stonks(),key:8},
        {name:"NYSE:U",stock:stonks(),key:9},
        {name:"NYSE:TF",stock:stonks(),key:10},
        {name:"NYSE:MF",stock:stonks(),key:11},

    ]


    const [modalVisible, setModalVisible] = useState(false);

    return(

        <View style={styles.container}>
            <Text style={styles.topText}> Stocks</Text>
            <ScrollView>
                <Modal
                animationType='fade'
                transparent={true}
                visible={modalVisible}
                onRequestClose={()=>{
                    Alert.alert("Job Done!");
                    setModalVisible(!modalVisible);
                } }
                >
                <View style={styles.modalView}>

                    <Pressable
                    style = {styles.button}
                    onPress = {() => 
                        setModalVisible(!modalVisible)
                    }
                    >
                        <Text style={styles.buyButton}>Buy</Text>
                    </Pressable>
                    <Pressable
                    style = {styles.button}
                    onPress = {() => 
                        setModalVisible(!modalVisible)
                    }
                    >
                        <Text style={styles.sellButton}>Sell</Text>
                    </Pressable>
                </View>
                </Modal>
                {   
                    Stocks.map( Stocks => {
                        return(
                            <Pressable
                            onPress={() => setModalVisible(true)}
                            >
                            <View key ={Stocks.key} style={styles.items}>
                                <Text style={{fontSize: 20,color: '#FFD300'}}>{Stocks.name}</Text>
                                <Text style={{fontSize: 20,color: '#FFD300'}}>{Stocks.stock}</Text>
                            </View>
                            </Pressable>
                        );



                }
            
                )

                }

            </ScrollView>
        </View>

    );

}



const styles = StyleSheet.create({
    container: {
        display: 'flex',
        backgroundColor: '#171717',
        color: '#FFD300',
        borderRadius: 20,
        paddingTop: '1%',
        marginTop: '25%',
        paddingBottom: '70%',

    },

    items: {
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '4%',
        padding: '6%',
        fontSize: 70,
        borderStyle: 'solid',
        borderTopColor: 'rgba(0,0,0,0)',
        borderBottomColor: 'rgba(255,211,0,0.3)',
        borderWidth: 1,
        borderLeftColor: 'rgba(0,0,0,0)',
        borderRightColor: 'rgba(0,0,0,0)',

    },
    modalView: {
        margin: 20,
        backgroundColor: "#171717",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 2,
          
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
      },
      button: {
        borderRadius: 50,
        padding: 10,
        display: 'flex',
        margin: '5%',
        flexDirection: 'row',
      },
      buyButton: {
        paddingVertical: '7%',
        paddingHorizontal: '15%',
        backgroundColor: "#006500",
        color: '#ffd300',
        borderRadius: 10

      },
      sellButton: {
        paddingVertical: '7%',
        paddingHorizontal: '15%',
        backgroundColor: "#EF557B",
        color: '#ffd300',
        borderRadius: 10

      },
      topText:{
            marginLeft: '5%',
            fontSize: 25,
            paddingBottom:'2%',
            borderStyle: 'solid',
            borderWidth: 1,
            borderTopColor: 'rgba(255,255,255,0)',
            borderLeftColor: 'rgba(255,255,255,0)',
            borderRightColor:'rgba(255,255,255,0)',
            borderBottomColor: 'rgba(255,211,0,0.3)',
            color: '#FFD300'
      },




})