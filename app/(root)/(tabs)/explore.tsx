import {View, Text, ScrollView, Image, TouchableOpacity} from "react-native";
import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import Search from "@/components/Search";

const Explore = () => {
    return (
        <SafeAreaView className={"bg-white h-full"}>
            <Search/>
        </SafeAreaView>
    )
}

export default Explore