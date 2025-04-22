import {View, Text, ScrollView, TouchableOpacity, ActivityIndicator, TextInput, Button, Alert, StyleSheet} from "react-native";
import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import auth from '@react-native-firebase/auth';


const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);
    const handleLogin = () => {

    }

    const signUp = async () => {
        setLoading(true);
        try {
            // Пример для Firebase Auth:
            // await createUserWithEmailAndPassword(auth, email, password);
            await auth().createUserWithEmailAndPassword(email, password);
            Alert.alert('Успех!', 'Аккаунт создан.');
        } catch (error: any) {
            Alert.alert('Ошибка', error.message);
        } finally {
            setLoading(false);
        }
    };

    const signIn = async () => {
        setLoading(true);
        try {
            // Пример для Firebase Auth:
            // await signInWithEmailAndPassword(auth, email, password);
            await auth().signInWithEmailAndPassword(email, password);
            Alert.alert('Успех!', 'Вход выполнен.');
        } catch (error: any) {
            Alert.alert('Ошибка', error.message);
        } finally {
            setLoading(false);
        }
    };


    return (
        <SafeAreaView className={"bg-white h-full"}>
            <ScrollView contentContainerClassName="h-full">
                {/*<Image source={require('../assets/images/nature_01.jpg')} className="w-full h-4/6" resizeMode="contain"/>*/}
                <View className="px-10">
                    <Text className="text-base text-center">
                        Welcome
                    </Text>
                    <Text className="text-3xl font-bold text-black-300 text-center mt-2">
                        Let's begin the journey! {"\n"}
                        <Text className="text-blue-700">
                            Please sign in
                        </Text>
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
                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <Text className="text-center text-2xl font-bold">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn