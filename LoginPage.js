import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Image, SafeAreaView } from 'react-native';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase.js';

const LogInPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    };

    const validateEmail = (email) => {
        // regex for email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePassword = (password) => {
        // regex for password validation: at least 8 characters, 1 uppercase letter, 1 lowercase letter, and 1 number
        const passwordRegex = /^(?=.*[A-Z])(?=.*[!@#$%^&*])(?=.{8,})/;
        return passwordRegex.test(password);
    };

    const handleLoginButtonPress = () => {
        console.log(validateEmail(email))
        console.log(validatePassword(password))

        if (validateEmail(email) && validatePassword(password)) {
            handleLogin();
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
                    <Text style={styles.title}>Log In</Text>
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
                    <TouchableOpacity style={styles.button} onPress={handleLoginButtonPress}>
                        <Text style={styles.buttonText}>Log In</Text>
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

export { LogInPage };
