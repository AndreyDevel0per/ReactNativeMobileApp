import {ScrollView, Text, TouchableOpacity, View, StyleSheet, Image } from "react-native";
import {Link} from "expo-router";
import 'react-native-gesture-handler';
import { Ionicons } from "@expo/vector-icons";
import apartmentImage from '../../../assets/images/renderimage.png';

export default function Index() {
    return (
        <ScrollView style={styles.container}>
            {/* Шапка с приветствием */}
            <View style={styles.header}>
                <Text style={styles.greeting}>Добро пожаловать!</Text>
                <Text style={styles.subtitle}>Найдите идеальное жилье для отдыха</Text>
            </View>

            {/* Поисковая строка */}
            <TouchableOpacity style={styles.searchBar}>
                <Ionicons name="search" size={20} color="#888" />
                <Text style={styles.searchText}>Куда едем?</Text>
            </TouchableOpacity>

            {/* Категории */}
            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Категории</Text>
                <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                    {['Квартиры', 'Дома', 'Отели', 'Коттеджи', 'Глэмпинг'].map((category) => (
                        <TouchableOpacity key={category} style={styles.categoryItem}>
                            <Text style={styles.categoryText}>{category}</Text>
                        </TouchableOpacity>
                    ))}
                </ScrollView>
            </View>

            {/* Популярные предложения */}
            <View style={styles.section}>

                {[1, 2, 3].map((item) => (
                    <Link href={`/properties/${item}`} key={item} style={styles.propertyCard}>
                        <Image
                            source={apartmentImage}
                            style={styles.propertyImage}
                            resizeMode="cover"
                        />
                        <View style={styles.propertyInfo}>
                            <Text style={styles.propertyTitle}>Уютная квартира в центре</Text>
                            <Text style={styles.propertyLocation}>Москва, 2 км до центра</Text>
                            <Text style={styles.propertyPrice}>₽2,500 / ночь</Text>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Text style={styles.ratingText}>4.8 (124 отзыва)</Text>
                            </View>
                        </View>
                    </Link>
                ))}
            </View>
        </ScrollView>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 16,
    },
    header: {
        marginBottom: 24,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        color: '#333',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        marginTop: 8,
    },
    searchBar: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        paddingVertical: 14,
        paddingHorizontal: 20,
        marginBottom: 24,
    },
    searchText: {
        marginLeft: 10,
        color: '#888',
        fontSize: 16,
    },
    section: {
        marginBottom: 64,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
        marginBottom: 16,
    },
    seeAll: {
        color: '#FF385C',
        fontSize: 14,
    },
    categoryItem: {
        backgroundColor: '#f5f5f5',
        borderRadius: 20,
        paddingVertical: 8,
        paddingHorizontal: 16,
        marginRight: 10,
    },
    categoryText: {
        color: '#333',
        fontSize: 14,
    },
    propertyCard: {
        borderRadius: 12,
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        marginBottom: 16,
        overflow: 'hidden',
    },
    propertyImage: {
        width: '100%',
        height: 200,
    },
    propertyInfo: {
        padding: 16,
    },
    propertyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    propertyLocation: {
        color: '#666',
        marginBottom: 4,
    },
    propertyPrice: {
        fontWeight: 'bold',
        marginBottom: 4,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 4,
        color: '#666',
    },
    navigation: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderTopWidth: 1,
        borderTopColor: '#eee',
    },
    navItem: {
        alignItems: 'center',
    },
    navText: {
        fontSize: 12,
        marginTop: 4,
        color: '#888',
    },
});
