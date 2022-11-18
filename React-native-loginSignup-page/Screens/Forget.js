import React, { useState } from "react";
import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View,Button,Alert } from "react-native";

const Forget = ({navigation})=>{
   
    const [email, setEmail] = useState("");
   
    const validate = () => {
        if (email === "rachit@gmail.com") {
            Alert.alert('An email link of password reset has been sent to you !')
        }
        else{
            Alert.alert('  Email Doesnt exist !!!')
        }
    };
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../assets/idfc.png')}/>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image source={require('../assets/forget1.jpg')} resizeMode={'contain'} style={{width:'100%',height:90}}/>
                        </View>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Your email address" value={email} onChangeText={(email) => setEmail(email)}/>
                    </View>
                    
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Button onPress={() => validate()} title="SEND PASSWORD RESET LINK"></Button>
                        </TouchableOpacity>
                    </View>
                    
                   
                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Login')} style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Already Have Account? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        width:'100%',
        height:200
    },defaultBg:{
        width:'100%',
        height:150
    },formInput:{
        marginTop:10,
        padding:10,
    },textInput:{
        padding:10,
        fontSize:16,
        borderWidth:2,
        borderColor:"#a7a7a7",
        borderRadius:10,
    }
});

export default Forget;