import { StatusBar } from 'expo-status-bar';
import React,{useState} from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons'; 
import { Octicons } from '@expo/vector-icons'; 
import { MaterialIcons } from '@expo/vector-icons'; 
import { FontAwesome } from '@expo/vector-icons'; 
import Modal from "react-native-modal";

export default function NavBar(){


    const [modalVisible, setModalVisible] = useState(false);
    const [ismodalVisible, setisModalVisible] = useState(false);


    const toggleModal = () => {
        setModalVisible(!modalVisible);
      };

    function toggleNotification(){

        setisModalVisible(!ismodalVisible);
    }

    return(
        <View style={styles.container}>
            <Modal
                isVisible={modalVisible}
                animationIn='bounceInLeft'
                animationOut='bounceOutLeft'
                >
                <View style={styles.modalView}>
                <Text style={styles.optionText}>Options</Text>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                            <AntDesign name="swap" size={24} color="#ffd300" />
                            <Text style={{ color:'#ffd300' }}>Transfer</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                        <Ionicons name="md-download-outline" size={24} color='#ffd300' />
                            <Text style={{ color:'#ffd300' }}>Deposit</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                        <AntDesign name="customerservice" size={24} color='#ffd300' />
                            <Text style={{ color:'#ffd300' }}>Services</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                        <MaterialIcons name="payment" size={24} color='#ffd300'/>
                            <Text style={{ color:'#ffd300' }}>Payment</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                        <AntDesign name="gift" size={24} color="#ffd300" />
                            <Text style={{ color:'#ffd300' }}>Rewards</Text>
                        </View>
                    </Pressable>

                    <Pressable onPress={toggleModal}>
                        <View style={styles.options}>
                        <FontAwesome name="bitcoin" size={24} color='#ffd300' />
                            <Text style={{ color:'#ffd300' }}>Crypto</Text>
                        </View>
                    </Pressable>

                </View>
        </Modal>

        <Modal
                isVisible={ismodalVisible}
                animationIn='bounceInRight'
                animationOut='bounceOutRight'
                >
                <View style={styles.modalView}>
                    <Text style={styles.notificationText}>Notifications</Text>
                    <Pressable onPress={toggleNotification}>
                        <AntDesign style={styles.closer}  name="close" size={24} color="#ffd300" />
                    </Pressable>
                </View>
        


        </Modal>

        <Pressable onPress={toggleModal}>
            <AntDesign name="user" size={25} color="#ffd300" />
        </Pressable>
        
        <Text style={{fontSize: 20,color:'#ffd300'}}>Sid's Account</Text>

        <Pressable onPress={toggleNotification}>
            <Octicons name="bell" size={25} color="#ffd300" />
        </Pressable>
        </View>



    );



}

const styles = StyleSheet.create({

    container: {
        backgroundColor: '#171717',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: '5%',
        padding: '4%',
        borderRadius: 15,
        
    },
    modalView: {
        margin: '20%',
        backgroundColor: "#171717",
        borderRadius: 20,
        borderStyle: 'solid',
        borderWidth: 2,
        borderColor: 'rgba(0,0,0,1)',
        padding: '10%',
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
        alignContent: 'center',
        flex: 0.3,
        margin: '1%',
        flexWrap: 'wrap',
      },
      options:{
        display:'flex',
        flexDirection: 'column',
        borderStyle: 'solid',
        borderColor: 'rgba(255,211,0,0.4)',
        borderRadius: 10,
        borderWidth: 2,
        padding: '5%',
        margin: '1%',
        justifyContent:'center',
        alignItems: 'center',
        shadowOffset: {
            width: 0,
            height: 2,
            
          },
        shadowOpacity: 0.25,
        shadowRadius: 2,
       
      },
      optionText:{
        position:'absolute',
        marginVertical:'80%',
        marginLeft:'17%',
        fontSize:25,
        color: '#ffd300',
      },
      notificationText:{
        position:'absolute',
        marginVertical:'100%',
        marginLeft:'15%',
        fontSize:25,
        color: '#ffd300',
      },
      closer:{
       marginTop:'100%',
       marginStart: '60%'

      }

})