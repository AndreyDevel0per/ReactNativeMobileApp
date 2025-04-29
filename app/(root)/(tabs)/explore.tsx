import {
    View,
    Text,
    ScrollView,
    Image,
    TouchableOpacity,
    StyleSheet,
    SafeAreaView,
    FlatList,
    TextInput
} from "react-native";
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
// @ts-ignore
import offer1 from "../../../assets/images/offer1.jpg";

const Explore = () => {
    const [activeFilter, setActiveFilter] = useState('Все');
    const [searchQuery, setSearchQuery] = useState('');

    // Пример данных объектов
    const properties = [
        {
            id: 1,
            title: "Уютная квартира в центре",
            location: "Москва, 2 км до центра",
            price: "₽2,500",
            rating: 4.8,
            reviews: 124,
            image: require("../../../assets/images/offer1.jpg"),
            type: "Квартира"
        },
        {
            id: 2,
            title: "Загородный дом у озера",
            location: "Подмосковье, 15 км от МКАД",
            price: "₽5,000",
            rating: 4.9,
            reviews: 87,
            image:  require("../../../assets/images/offer2.jpg"),
            type: "Дом"
        },
        {
            id: 3,
            title: "Студия с видом на город",
            location: "Санкт-Петербург, Центр",
            price: "₽3,200",
            rating: 4.7,
            reviews: 56,
            image:  require("../../../assets/images/offer3.jpg"),
            type: "Квартира"
        },
        {
            id: 4,
            title: "Коттедж в лесу",
            location: "Карелия, 30 км от Петрозаводска",
            price: "₽6,500",
            rating: 4.9,
            reviews: 43,
            image:  require("../../../assets/images/offer4.jpg"),
            type: "Дом"
        },
    ];

    // Фильтры
    const filters = ['Все', 'Квартиры', 'Дома', 'Отели', 'Глэмпинг'];

    // Фильтрация объектов
    const filteredProperties = activeFilter === 'Все'
        ? properties
        : properties.filter(property => property.type === activeFilter);

    return (
        <SafeAreaView style={styles.container}>
            {/* Поисковая строка */}
            <View style={styles.searchContainer}>
                <View style={styles.searchInput}>
                    <Ionicons name="search" size={20} color="#666" style={styles.searchIcon} />
                    <TextInput
                        placeholder="Куда едем?"
                        placeholderTextColor="#888"
                        value={searchQuery}
                        onChangeText={setSearchQuery}
                        style={styles.input}
                    />
                    <TouchableOpacity style={styles.filterButton}>
                        <Ionicons name="options" size={20} color="#666" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Карточки объектов */}
            <FlatList
                data={filteredProperties}
                keyExtractor={item => item.id.toString()}
                contentContainerStyle={styles.propertiesContainer}
                renderItem={({ item }) => (
                    <TouchableOpacity style={styles.propertyCard}>
                        <Image
                            source={item.image}
                            style={styles.propertyImage}
                        />
                        <View style={styles.propertyInfo}>
                            <Text style={styles.propertyTitle}>{item.title}</Text>
                            <Text style={styles.propertyLocation}>{item.location}</Text>
                            <Text style={styles.propertyPrice}>{item.price} / ночь</Text>
                            <View style={styles.ratingContainer}>
                                <Ionicons name="star" size={16} color="#FFD700" />
                                <Text style={styles.ratingText}>
                                    {item.rating} ({item.reviews} отзывов)
                                </Text>
                            </View>
                        </View>
                        <TouchableOpacity style={styles.favoriteButton}>
                            <Ionicons name="heart-outline" size={24} color="#fff" />
                        </TouchableOpacity>
                    </TouchableOpacity>
                )}
            />

            {/* Кнопка карты */}
            <TouchableOpacity style={styles.mapButton}>
                <Ionicons name="map" size={24} color="#fff" />
                <Text style={styles.mapButtonText}>Показать на карте</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f8f9fa',
    },
    searchContainer: {
        padding: 15,
        backgroundColor: '#fff',
    },
    searchInput: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#f5f5f5',
        borderRadius: 30,
        paddingHorizontal: 15,
        height: 50,
    },
    searchIcon: {
        marginRight: 10,
    },
    input: {
        flex: 1,
        fontSize: 16,
    },
    filterButton: {
        marginLeft: 10,
    },
    filtersContainer: {
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: '#fff',
    },
    filterItem: {
        paddingHorizontal: 15,
        paddingVertical: 8,
        borderRadius: 20,
        marginRight: 10,
        backgroundColor: '#f5f5f5',
    },
    activeFilterItem: {
        backgroundColor: '#4A90E2',
    },
    filterText: {
        color: '#666',
    },
    activeFilterText: {
        color: '#fff',
        fontWeight: 'bold',
    },
    propertiesContainer: {
        padding: 15,
    },
    propertyCard: {
        backgroundColor: '#fff',
        borderRadius: 12,
        marginBottom: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 2,
        overflow: 'hidden',
    },
    propertyImage: {
        width: '100%',
        height: 200,
    },
    propertyInfo: {
        padding: 15,
    },
    propertyTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 5,
    },
    propertyLocation: {
        color: '#666',
        marginBottom: 5,
    },
    propertyPrice: {
        fontWeight: 'bold',
        marginBottom: 5,
    },
    ratingContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
        color: '#666',
    },
    favoriteButton: {
        position: 'absolute',
        top: 15,
        right: 15,
        backgroundColor: 'rgba(0,0,0,0.3)',
        borderRadius: 20,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    mapButton: {
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
        backgroundColor: '#4A90E2',
        borderRadius: 30,
        padding: 15,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    mapButtonText: {
        color: '#fff',
        fontWeight: 'bold',
        marginLeft: 10,
        fontSize: 16,
    },
});

export default Explore;