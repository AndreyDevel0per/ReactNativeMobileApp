import { View, Text, Image, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from '@expo/vector-icons';

const Profile = () => {
    // Пример данных пользователя
    const user = {
        name: "Андрей Пимонов",
        email: "andrey.admin@example.com",
        phone: "+7 (912) 345-67-89",
        avatar: "https://randomuser.me/api/portraits/men/1.jpg",
        bookings: 12,
        favorites: 7,
        memberSince: "2025",
    };

    return (
        <ScrollView style={styles.container}>
            {/* Шапка профиля */}
            <View style={styles.header}>
                <View style={styles.avatarContainer}>
                    <Image
                        source={{ uri: user.avatar }}
                        style={styles.avatar}
                    />
                    <TouchableOpacity style={styles.editIcon}>
                        <Ionicons name="camera" size={20} color="white" />
                    </TouchableOpacity>
                </View>

                <Text style={styles.userName}>{user.name}</Text>
                <Text style={styles.userEmail}>{user.email}</Text>

                <View style={styles.statsContainer}>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{user.bookings}</Text>
                        <Text style={styles.statLabel}>Бронирований</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{user.favorites}</Text>
                        <Text style={styles.statLabel}>Избранных</Text>
                    </View>
                    <View style={styles.statItem}>
                        <Text style={styles.statNumber}>{user.memberSince}</Text>
                        <Text style={styles.statLabel}>Год регистрации</Text>
                    </View>
                </View>
            </View>

            {/* Основная информация */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Личная информация</Text>

                <View style={styles.infoItem}>
                    <Ionicons name="person-outline" size={22} color="#666" />
                    <Text style={styles.infoText}>{user.name}</Text>
                </View>

                <View style={styles.infoItem}>
                    <Ionicons name="mail-outline" size={22} color="#666" />
                    <Text style={styles.infoText}>{user.email}</Text>
                </View>

                <View style={styles.infoItem}>
                    <Ionicons name="call-outline" size={22} color="#666" />
                    <Text style={styles.infoText}>{user.phone}</Text>
                </View>
            </View>

            {/* Настройки */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Настройки</Text>

                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="notifications-outline" size={22} color="#666" />
                    </View>
                    <Text style={styles.menuText}>Уведомления</Text>
                    <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="lock-closed-outline" size={22} color="#666" />
                    </View>
                    <Text style={styles.menuText}>Безопасность</Text>
                    <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>

                <TouchableOpacity style={styles.menuItem}>
                    <View style={styles.menuIcon}>
                        <Ionicons name="card-outline" size={22} color="#666" />
                    </View>
                    <Text style={styles.menuText}>Платежные методы</Text>
                    <Ionicons name="chevron-forward" size={18} color="#999" />
                </TouchableOpacity>
            </View>

            {/* Выход */}
            <TouchableOpacity style={styles.logoutButton}>
                <Text style={styles.logoutText}>Выйти из аккаунта</Text>
            </TouchableOpacity>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    header: {
        alignItems: 'center',
        paddingVertical: 30,
        backgroundColor: 'white',
        marginBottom: 10,
    },
    avatarContainer: {
        position: 'relative',
        marginBottom: 15,
    },
    avatar: {
        width: 100,
        height: 100,
        borderRadius: 50,
    },
    editIcon: {
        position: 'absolute',
        right: 0,
        bottom: 0,
        backgroundColor: '#4A90E2',
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    userEmail: {
        fontSize: 16,
        color: '#666',
        marginBottom: 20,
    },
    statsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%',
        paddingHorizontal: 20,
    },
    statItem: {
        alignItems: 'center',
    },
    statNumber: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
    },
    statLabel: {
        fontSize: 14,
        color: '#666',
    },
    section: {
        backgroundColor: 'white',
        marginBottom: 10,
        paddingHorizontal: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#eee',
    },
    infoItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    infoText: {
        fontSize: 16,
        marginLeft: 15,
        flex: 1,
    },
    menuItem: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingVertical: 15,
        borderBottomWidth: 1,
        borderBottomColor: '#f5f5f5',
    },
    menuIcon: {
        width: 30,
    },
    menuText: {
        fontSize: 16,
        flex: 1,
    },
    logoutButton: {
        margin: 20,
        padding: 15,
        backgroundColor: 'white',
        borderRadius: 10,
        alignItems: 'center',
    },
    logoutText: {
        color: 'red',
        fontSize: 16,
        fontWeight: '500',
    },
});

export default Profile;