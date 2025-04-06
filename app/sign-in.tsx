import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";

const SignIn = () => {
    const handleLogin = () => {

    }

    return (
        <SafeAreaView className={"bg-white h-full"}>
            <ScrollView contentContainerClassName="h-full">
                <Image source={require('../assets/images/nature_01.jpg')} className="w-full h-4/6" resizeMode="contain"/>
                <View className="px-10">
                    <Text className="text-base text-center">
                        Welcome to Uganda
                    </Text>
                    <Text className="text-3xl font-bold text-black-300 text-center mt-2">
                        Let's begin the journey! {"\n"}
                        <Text className="text-blue-700">
                            amogus
                        </Text>
                    </Text>
                    <TouchableOpacity onPress={handleLogin} className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5">
                        <Text className="text-center text-2xl font-bold">Sign In</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default SignIn