import { View, Text, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert } from "react-native";
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig"; // Импортируем auth из вашего firebaseConfig.js

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    // Функция проверки email
    const isValidEmail = (email) => {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    };

    const signUp = async () => {
        if (!isValidEmail(email)) {
            Alert.alert('Ошибка', 'Пожалуйста, введите корректный email');
            return;
        }
        if (password.length < 6) {
            Alert.alert('Ошибка', 'Пароль должен содержать минимум 6 символов');
            return;
        }

        setLoading(true);
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            Alert.alert('Успех!', 'Аккаунт успешно создан');
        } catch (error) {
            handleAuthError(error);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async () => {
        if (!isValidEmail(email)) {
            Alert.alert('Ошибка', 'Пожалуйста, введите корректный email');
            return;
        }

        setLoading(true);
        try {
            await signInWithEmailAndPassword(auth, email, password);
            Alert.alert('Успех!', 'Вход выполнен');
        } catch (error) {
            handleAuthError(error);
        } finally {
            setLoading(false);
        }
    };

    // Обработчик ошибок Firebase
    const handleAuthError = (error) => {
        switch (error.code) {
            case 'auth/invalid-email':
                Alert.alert('Ошибка', 'Неверный формат email');
                break;
            case 'auth/user-not-found':
                Alert.alert('Ошибка', 'Пользователь не найден');
                break;
            case 'auth/wrong-password':
                Alert.alert('Ошибка', 'Неверный пароль');
                break;
            case 'auth/email-already-in-use':
                Alert.alert('Ошибка', 'Этот email уже используется');
                break;
            default:
                Alert.alert('Ошибка', error.message);
        }
    };


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ paddingHorizontal: 40 }}>
                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Welcome</Text>
                    <Text style={{ fontSize: 24, fontWeight: 'bold', textAlign: 'center', marginTop: 8 }}>
                        Let's begin the journey!{"\n"}
                        <Text style={{ color: 'blue' }}>Please sign in</Text>
                    </Text>
                    <View style={{ padding: 20 }}>
                        <TextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                            style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
                        />
                        <TextInput
                            placeholder="Пароль"
                            value={password}
                            onChangeText={setPassword}
                            secureTextEntry
                            style={{ marginBottom: 10, padding: 10, borderWidth: 1 }}
                        />
                        {loading ? (
                            <ActivityIndicator size="large" />
                        ) : (
                            <>
                                <Button title="Зарегистрироваться" onPress={signUp} />
                                <Button title="Войти" onPress={signIn} />
                            </>
                        )}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
};

export default SignIn;