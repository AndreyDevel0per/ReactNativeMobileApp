import {Image, Text, TouchableOpacity, View} from "react-native";
import React from "react";
import {Tabs, useNavigation} from "expo-router";
import {createDrawerNavigator, DrawerContentScrollView, DrawerNavigationProp} from "@react-navigation/drawer";
import {Entypo} from "@expo/vector-icons";

const Drawer = createDrawerNavigator();

const TabIcon = ({focused, icon, title}: {
    focused: boolean;
    icon: any;
    title: string;
}) => (
    <View className="flex-1 mt-3 flex flex-col items-center">
        <Image source={icon} tintColor={focused ? "#0061ff" : "#666876"} resizeMode="contain" className="size-8" />
        <Text className={`${focused ? "text-primary-300" : "text-black-200"} text-xs w-full text-center mt-1`}>
            {title}
        </Text>
    </View>
)

// const HomeScreenWithDrawer = () => {
//     return <Drawer.Navigator
//         initialRouteName=""
//         drawerContent={() => {
//
//         }}
//     ></Drawer.Navigator>
// }

// Кастомное содержимое Drawer с вашими ссылками
const CustomDrawerContent = () => {
    const navigation = useNavigation();

    return (
        <DrawerContentScrollView style={{paddingTop: 50}}>
            <View className="p-4">
                <Text className="text-lg font-bold">Меню</Text>
            </View>

            <TouchableOpacity
                className="flex-row items-center p-4 border-b border-gray-200"
                onPress={() => navigation.navigate('sign-in')}
            >
                <Entypo name="login" size={20} color="#666" />
                <Text className="ml-4">Sign In</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center p-4 border-b border-gray-200"
                onPress={() => navigation.navigate('explore')}
            >
                <Entypo name="magnifying-glass" size={20} color="#666" />
                <Text className="ml-4">Explore</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center p-4 border-b border-gray-200"
                onPress={() => navigation.navigate('profile')}
            >
                <Entypo name="user" size={20} color="#666" />
                <Text className="ml-4">Profile</Text>
            </TouchableOpacity>

            <TouchableOpacity
                className="flex-row items-center p-4 border-b border-gray-200"
                onPress={() => navigation.navigate('properties/[id]')}
            >
                <Entypo name="home" size={20} color="#666" />
                <Text className="ml-4">Property</Text>
            </TouchableOpacity>
        </DrawerContentScrollView>
    );
};

const TabsLayout = () => {
    return (
        <Tabs
            screenOptions={{
                tabBarShowLabel: false,
                tabBarStyle: {
                    backgroundColor: "white",
                    position: "absolute",
                    borderTopColor: "#0061FF1A",
                    borderTopWidth: 1,
                    minHeight: 70,
                }
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: "Home",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={require("../../../assets/icons/icon-home.png")}
                            focused={focused}
                            title={"Home"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="explore"
                options={{
                    title: "Explore",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={require("../../../assets/icons/icon-search.png")}
                            focused={focused}
                            title={"Explore"}
                        />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: "Profile",
                    headerShown: false,
                    tabBarIcon: ({focused}) => (
                        <TabIcon
                            icon={require("../../../assets/icons/icon-user.png")}
                            focused={focused}
                            title={"Profile"}
                        />
                    )
                }}
            />
        </Tabs>
    )
}

// Главный компонент с Drawer и Tabs
export default function Layout() {
    return (
        <Drawer.Navigator
            drawerContent={CustomDrawerContent}
            screenOptions={({ navigation }) => ({
                headerShown: false,
                drawerPosition: "left",
                drawerType: "slide",
                drawerStyle: {
                    width: '70%',
                    backgroundColor: '#fff',
                },
                // Добавляем кнопку меню в заголовок
                headerLeft: () => (
                    <TouchableOpacity
                        onPress={() => navigation.toggleDrawer()}
                        style={{marginLeft: 15}}
                    >
                        <Entypo name="menu" size={24} color="black" />
                    </TouchableOpacity>
                ),
            })}
        >
            <Drawer.Screen
                name="Tabs"
                options={{
                    drawerLabel: () => null,
                    title: '',
                }}
            >
                {() => (
                    <Tabs
                        screenOptions={{
                            tabBarShowLabel: false,
                            tabBarStyle: {
                                backgroundColor: "white",
                                position: "absolute",
                                borderTopColor: "#0061FF1A",
                                borderTopWidth: 1,
                                minHeight: 70,
                            },
                            // Добавляем кнопку меню в заголовок табов
                            headerLeft: () => {
                                const navigation = useNavigation<DrawerNavigationProp<{}>>();
                                return (
                                    <TouchableOpacity
                                        onPress={() => navigation.toggleDrawer()}
                                        style={{marginLeft: 15}}
                                    >
                                        <Entypo name="menu" size={24} color="black" />
                                    </TouchableOpacity>
                                );
                            },
                        }}
                    >
                        <Tabs.Screen
                            name="index"
                            options={{
                                title: "Home",
                                headerShown: true,
                                tabBarIcon: ({focused}) => (
                                    <TabIcon
                                        icon={require("../../../assets/icons/icon-home.png")}
                                        focused={focused}
                                        title={"Home"}
                                    />
                                )
                            }}
                        />
                        <Tabs.Screen
                            name="explore"
                            options={{
                                title: "Explore",
                                headerShown: true,
                                tabBarIcon: ({focused}) => (
                                    <TabIcon
                                        icon={require("../../../assets/icons/icon-search.png")}
                                        focused={focused}
                                        title={"Explore"}
                                    />
                                )
                            }}
                        />
                        <Tabs.Screen
                            name="profile"
                            options={{
                                title: "Profile",
                                headerShown: true,
                                tabBarIcon: ({focused}) => (
                                    <TabIcon
                                        icon={require("../../../assets/icons/icon-user.png")}
                                        focused={focused}
                                        title={"Profile"}
                                    />
                                )
                            }}
                        />
                    </Tabs>
                )}
            </Drawer.Screen>
        </Drawer.Navigator>
    );
}

// export default TabsLayout