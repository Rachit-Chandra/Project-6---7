import React, { useState } from "react";

import { Image, ImageBackground, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View, Button, Alert } from "react-native";
import axios from 'axios';



const Signup = ({ navigation }) => {

    const register = async () => {
        await axios({
            method: 'POST',
            url: 'http://192.168.1.37:8085/signup',
            data: {
                accno: accno,
                username: username,
                email: email,
                password: password
            }
        })
            .then(function (response) {
                console.log("response ", JSON.stringify(response.data))
                // alert(JSON.stringify(response.data));
            })
            .catch(function (error) {
                console.log("error", error)
                alert(error);
            })
    }
    const navlog = () => {
        register();
        alert("Signup Successful");

    }
    const [accno, setAcc] = useState("");
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const validate = () => {
        const strongRegex = new RegExp("^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$");
        if ((accno == "") || (username == "") || (email == "") || (password == "")) {
            alert("Input all fields")
        }
        else if (password.length < 8) {
            alert("Password should contain more than 8 characters");
        }
        else if (!strongRegex.test(email)) {
            alert("Enter proper email");
        }
        else if (accno.length != 4) {
            alert("Account number should be 4 digit")
        }
        // else{
        //     Alert.alert("Confirm","Are you sure you want to continue?", [
        //         {
        //           text: "Cancel",
        //           style: "cancel"
        //         },
        //         { text: "OK", onPress: () => navlog() }
        //       ],
        //       {cancelable:true})
        //     }
        else {
            navlog()
        }
    }


    return (
        <SafeAreaView>
            <ScrollView>
                <View style={styles.container}>
                    <ImageBackground style={styles.defaultBg} resizeMode={'cover'} source={require('../assets/idfc.png')} />
                </View>
                <View style={{ padding: 17 }}>
                    <View style={styles.formInput}>
                        <View style={{ justifyContent: 'center', alignItems: 'center' }}>
                            <Image source={require('../assets/Register1.png')} resizeMode={'contain'} style={{ width: '100%', height: 90 }} />
                        </View>
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Enter Account Number " value={accno} onChangeText={(accno) => setAcc(accno)} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Enter Full Name" value={username} onChangeText={(username) => setUsername(username)} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Your email address" value={email} onChangeText={(email) => setEmail(email)} />
                    </View>
                    <View style={styles.formInput}>
                        <TextInput style={styles.textInput} placeholderTextColor={"black"} placeholder="Password" secureTextEntry={true} onChangeText={(password) => setPassword(password)} />
                    </View>


                    <View style={styles.formInput}>
                        <TouchableOpacity style={styles.defaultButton}>
                            <Button onPress={() => validate()} title="REGISTER" />
                        </TouchableOpacity>
                    </View>


                    <View style={styles.formInput}>
                        <TouchableOpacity>
                            <Text onPress={() => navigation.navigate('Login')} style={{ color: "#4287f5", textAlign: 'center', fontSize: 16, fontWeight: 'bold' }}>Already Have Account ? Login</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        width: '100%',
        height: 170
    }, defaultBg: {
        width: '100%',
        height: 150,
    }, formInput: {
        marginTop: 10,
        padding: 10,
    }, textInput: {
        padding: 10,
        fontSize: 15,
        borderWidth: 1,
        borderColor: "#a7a7a7",
        borderRadius: 10,
    }
});

export default Signup;