import {
    View,
    Text,
    ScrollView,
    TouchableOpacity,
    ActivityIndicator,
    TextInput,
    Button,
    Alert,
    KeyboardAvoidingView,
    StyleSheet,
    Platform
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";
import {Ionicons} from "@expo/vector-icons"; // Импортируем auth из вашего firebaseConfig.js

const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const [secureTextEntry, setSecureTextEntry] = useState(true);

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
        <SafeAreaView style={styles.container}>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                style={styles.keyboardAvoidingView}
            >
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                    {/* Логотип и заголовок */}
                    <View style={styles.header}>
                        <LinearGradient
                            colors={['#4A90E2', '#6E45E2']}
                            style={styles.logo}
                            start={{ x: 0, y: 0 }}
                            end={{ x: 1, y: 1 }}
                        >
                            <Ionicons name="home" size={40} color="white" />
                        </LinearGradient>
                        <Text style={styles.title}>Добро пожаловать</Text>
                        <Text style={styles.subtitle}>Войдите в свой аккаунт</Text>
                    </View>

                    {/* Форма входа */}
                    <View style={styles.form}>
                        {/* Поле Email */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="mail-outline" size={20} color="#7C7C7C" style={styles.inputIcon} />
                            <TextInput
                                placeholder="Email"
                                placeholderTextColor="#7C7C7C"
                                value={email}
                                onChangeText={setEmail}
                                keyboardType="email-address"
                                autoCapitalize="none"
                                style={styles.input}
                            />
                        </View>

                        {/* Поле Пароль */}
                        <View style={styles.inputContainer}>
                            <Ionicons name="lock-closed-outline" size={20} color="#7C7C7C" style={styles.inputIcon} />
                            <TextInput
                                placeholder="Пароль"
                                placeholderTextColor="#7C7C7C"
                                value={password}
                                onChangeText={setPassword}
                                secureTextEntry={secureTextEntry}
                                style={styles.input}
                            />
                            <TouchableOpacity
                                onPress={() => setSecureTextEntry(!secureTextEntry)}
                                style={styles.eyeIcon}
                            >
                                <Ionicons
                                    name={secureTextEntry ? 'eye-off-outline' : 'eye-outline'}
                                    size={20}
                                    color="#7C7C7C"
                                />
                            </TouchableOpacity>
                        </View>

                        {/* Кнопка входа */}
                        <TouchableOpacity
                            style={styles.loginButton}
                            onPress={signIn}
                            disabled={loading}
                        >
                            {loading ? (
                                <ActivityIndicator color="white" />
                            ) : (
                                <Text style={styles.loginButtonText}>Войти</Text>
                            )}
                        </TouchableOpacity>

                        {/* Кнопка регистрации */}
                        <TouchableOpacity
                            style={styles.registerButton}
                            onPress={signUp}
                            disabled={loading}
                        >
                            <Text style={styles.registerButtonText}>Создать аккаунт</Text>
                        </TouchableOpacity>

                        {/* Забыли пароль */}
                        <TouchableOpacity style={styles.forgotPassword}>
                            <Text style={styles.forgotPasswordText}>Забыли пароль?</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFFFFF',
    },
    keyboardAvoidingView: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 30,
    },
    header: {
        alignItems: 'center',
        paddingTop: 40,
        paddingBottom: 30,
    },
    logo: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 8,
    },
    subtitle: {
        fontSize: 16,
        color: '#7C7C7C',
    },
    form: {
        paddingHorizontal: 30,
        marginTop: 20,
    },
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#F5F5F5',
        borderRadius: 12,
        paddingHorizontal: 15,
        marginBottom: 15,
    },
    inputIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        height: 50,
        color: '#333',
    },
    eyeIcon: {
        padding: 10,
    },
    loginButton: {
        backgroundColor: '#4A90E2',
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    loginButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
    },
    registerButton: {
        height: 50,
        borderRadius: 12,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
        borderWidth: 1,
        borderColor: '#4A90E2',
    },
    registerButtonText: {
        color: '#4A90E2',
        fontSize: 16,
        fontWeight: 'bold',
    },
    forgotPassword: {
        alignSelf: 'center',
        marginTop: 20,
    },
    forgotPasswordText: {
        color: '#4A90E2',
        fontSize: 14,
    },
    socialContainer: {
        marginTop: 40,
        alignItems: 'center',
    },
    socialText: {
        color: '#7C7C7C',
        marginBottom: 20,
    },
    socialButtons: {
        flexDirection: 'row',
        justifyContent: 'center',
    },
    socialButton: {
        width: 50,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: 10,
    },
});

export default SignIn;