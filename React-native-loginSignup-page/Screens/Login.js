import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View ,Button,Alert} from "react-native";
import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import axios from 'axios';


const Login = ({navigation})=>{

    
    const login = {
      accno,
      password,
    };

    const register=async()=>{
        await axios({
          method: 'GET',
          url: 'http://192.168.1.37:8085/login/' +accno,login
        })
        .then(function (response){
          console.log("response ", JSON.stringify(response.data))
          if(accno==response.data.accno&&password==response.data.password){
          alert("Welcome "+response.data.username)
        }
        else{
            alert("Either accno or password is incorrect")

        }
        })
        .catch(function(error){
          console.log("error",error)
          alert(error);
        })
      }

  const [accno, setAcc] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
    const validate=()=>{
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if((email=="")||(accno=="")||(password=="")){
          alert("Input all fields")
        }
        else if(password.length<3){
          alert("Password should contain more than 8 characters");
        }
        else if(!strongRegex.test(email)){
          alert("Enter proper email");
        }
        else if(accno.length!=4){
            alert("Account number should be 4 digit")
        }
        // else{
        //     Alert.alert("Confirm","Are you sure you want to continue?", [
        //         {
        //           text: "Cancel",
        //           style: "cancel"
        //         },
        //         { text: "OK", onPress: () => register() }
        //       ],
        //       {cancelable:true})
        // }
        else{
            register()
        }
    }
    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../assets/idfc.png')}/>
                </View>
                <View style={{padding:10}}>
                    <View style={styles.formInput}>
                        <View style={{justifyContent:'center',alignItems:'center'}}>
                            <Image onPress={() => navigation.navigate('Login')} source={require('../assets/Login2.png')} resizeMode={'contain'} style={{width:'100%',height:100}}/>
                        </View>
                    </View>
                    {/* {checkValidEmail ? (<Text style={styles.textFailed}>Wrong format email</Text> ) : (<Text style={styles.textFailed}> </Text>)}
                     */}
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"}  placeholder="Your email address" value={email} onChangeText={(email)=>setEmail(email)} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Your account number" value={accno} onChangeText={(accno)=>setAcc(accno)} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Password" secureTextEntry={true} value={password} onChangeText={(password)=>setPassword(password)} />
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Forget')} style={{color:"#db2218",textAlign:'right',fontSize:16,fontWeight:'bold'}}>Forgot password?</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                           
                            <Button  onPress={() => validate()}  title="LOGIN"/>
                        </TouchableOpacity>
                    </View>
                                      
                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Signup')} style={{color:"#4287f5",textAlign:'center',fontSize:16,fontWeight:'bold'}}>Need Account ? Register now</Text>
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
        borderRadius:10
    }, textFailed: {
        alignSelf: 'flex-end',
        color: 'red',
      }
});

export default Login;