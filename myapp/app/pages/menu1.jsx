import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';

import React from 'react'
const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap:15,
        // justifyContent: 'space-between',
        // gridTemplateColumns: 'repeat(auto-fit, minmax(33.33%, 1fr))'
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
        width: '30%',
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
        { name: 'হাসপাতাল', image: require('../../assets/images/menu/menu1/image1.png') },
        { name: 'অ্যাম্বুলেন্স', image: require('../../assets/images/menu/menu1/image2.jpg') },
        { name: 'রক্ত', image: require('../../assets/images/menu/menu1/image3.png') },
        { name: 'ফার্মেসী ', image: require('../../assets/images/menu/menu1/image4.png') },
        { name: 'ডায়াগনস্টিক সেন্টার', image: require('../../assets/images/menu/menu1/image5.jpg') },
        { name: 'হোমিও', image: require('../../assets/images/menu/menu1/image6.jpg') },
        { name: 'পশু-চিকিৎসা', image: require('../../assets/images/menu/menu1/image7.png') },
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