import { Text, View, Image } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text className="font-bold text-lg my-10 font-spaceMono">Roses</Text>

      <Image
        source={require("../../../assets/images/rose2.jpg")}
        className="w-full h-4/6"
        resizeMode="contain"
      />

      <Link href={"/sign-in"}>Sign In</Link>
      <Link href={"/look"}>Look</Link>
      <Link href={"/profile"}>Profile</Link>
    </View>
  );
}
