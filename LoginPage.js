import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';
import { FontDisplay } from 'expo-font';

const LoginPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSignUp = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            console.log('User signed up successfully');
        } catch (error) {
            console.error(error);
        }
    };

    const validateEmail = (email) => {
        // regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // regex for password validation: at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number
        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
        return passwordRegex.test(password);
    };

    const handleSignUpButtonPress = () => {
        if (validateEmail(email) && validatePassword(password)) {
            handleSignUp();
        } else {
            alert('Please enter a valid email and password.');
        }
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.masterView}>
                <View style={styles.logoStyleContainer}>
                    <Image source={require('./RexyLogo.png')} style={styles.image} />
                </View>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>Sign Up</Text>
                </View>
                <View style={styles.logInContainer}>
                    <TextInput
                        style={styles.input}
                        placeholder="Email"
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        keyboardType="email-address"
                        autoCapitalize="none"
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Password"
                        value={password}
                        onChangeText={(text) => setPassword(text)}
                        secureTextEntry
                        autoCapitalize="none"
                    />
                    <TouchableOpacity style={styles.button} onPress={handleSignUpButtonPress}>
                        <Text style={styles.buttonText}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    masterView: {
        flex: 1,

    },
    logInContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#fff',
        justifyContent: '',
        marginTop: 100
    },
    title: {
        fontSize: 50,
        fontWeight: 'bold',
        marginBottom: 32,
        alignSelf: 'flex-start',
        marginLeft: 16,
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 4,
        padding: 12,
        marginVertical: 8,
        width: '80%',
        fontSize: 16,
    },
    button: {
        backgroundColor: '#BD111D',
        borderRadius: 4,
        padding: 12,
        marginVertical: 8,
        width: '80%',
    },
    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 16,
    },
    titleContainer: {
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        padding: 16,
        marginTop: 20
    },
    image: {
        flexGrow: 1,
        width: 1000,
        height: 40,
        resizeMode: 'contain'
    },
    logoStyleContainer: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    safeArea: {
        flexGrow: 1,
        justifyContent: 'flex-end',
        alignItems: 'stretch',
    },
});

export { LoginPage };
