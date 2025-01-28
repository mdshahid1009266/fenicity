import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import React from 'react'
const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: 5
    },
    cardContainer: {
        width: '30%',
        marginBottom: 15,
    },
    view: {
        width: '100%',
        height: "100%",
        padding: 15,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        boxShadow: '0px 2px 8px 0px rgba(60, 64, 67, 0.25)',
    },
    card: {
        width: '32%',
        marginBottom: 15,
        paddingVertical: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
        alignItems: 'center',
        boxShadow: '0px 2px 8px 0px rgba(60, 64, 67, 0.25)',
    },
    cardText: {
        marginTop: 10,
        textAlign: 'center',
    },
    image: {
        width: 80,
        height: 50,
        resizeMode: 'contain'
    }
});

const menu1 = () => {
    const menuItems = [
        { name: 'Omera', image: require('../../assets/images/menu/menu4/image1.jpg') },
        { name: 'Total ', image: require('../../assets/images/menu/menu4/image2.png') },
        { name: 'Beximco', image: require('../../assets/images/menu/menu4/image3.png') },
        { name: 'Jamuna', image: require('../../assets/images/menu/menu4/image4.jpg') },
        // { name: 'Others', image: require('../../assets/images/menu/menu4/image5.png') },
    ];
    return (
        <View style={{ flex: 1, paddingHorizontal: 15, marginTop: 10 }} >
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View style={styles.grid}>
                    {menuItems.map((item, index) => (
                        <TouchableOpacity style={styles.card} key={index}>
                            <Image source={item.image} style={styles.image} />
                            <Text style={styles.cardText}>{item.name}</Text>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView >
        </View >
    )
}

export default menu1