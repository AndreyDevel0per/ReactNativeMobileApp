import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";

const SignIn = () => {
  const handleLogin = () => {};

  const handleForgotPassword = () => {};

  return (
    <SafeAreaView className={"bg-white h-full"}>
      <ScrollView contentContainerClassName="h-full">
        <View className="px-10">
          <Text className="text-3xl font-bold text-black-300 text-center mt-2">
            Зарегестрируйтесь {"\n"}
            <Text className="text-red-700">привет</Text>
          </Text>
          <Image
            source={require("../assets/images/rose.jpg")}
            className="w-full h-4/6"
          />
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <Text className="text-center text-2xl font-bold">Sign In</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={handleLogin}
            className="bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5"
          >
            <Text className="text-center text-2xl font-bold">Log In</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleForgotPassword} className="mt-2">
            <Text className="text-center text-blue-700 underline">
              Forget Password?
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SignIn;
