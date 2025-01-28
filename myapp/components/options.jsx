import { StyleSheet, Text, View, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { Link, useNavigation } from 'expo-router';

import image1 from '../assets/images/menu/image1.png';
import image2 from '../assets/images/menu/image2.png';
import image3 from '../assets/images/menu/image3.png';
import image4 from '../assets/images/menu/image4.jpg';
import image5 from '../assets/images/menu/image5.jpg';
import image6 from '../assets/images/menu/image6.png';
import image7 from '../assets/images/menu/image7.png';
import image8 from '../assets/images/menu/image8.jpeg';
import image9 from '../assets/images/menu/image9.png';
import image10 from '../assets/images/menu/image10.jpg';
import image11 from '../assets/images/menu/image11.png';
import image12 from '../assets/images/menu/image12.png';
import image13 from '../assets/images/menu/image13.png';
import image14 from '../assets/images/menu/image14.png';
import image15 from '../assets/images/menu/image15.png';
import image16 from '../assets/images/menu/image16.png';
import image17 from '../assets/images/menu/image17.png';
import image18 from '../assets/images/menu/image18.png';


const styles = StyleSheet.create({
    grid: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        gridTemplateColumns: 'repeat(auto-fit, minmax(33.33%, 1fr))'
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
// const navigation = useNavigation();

// const handlePress = (e) => {
//     navigation.navigate(e);
// };
export default function App() {
    const menuItems = [
        { name: 'চিকিৎসা', image: image1, ref: "/pages/menu1" },
        { name: 'গাড়ি ভাড়া', image: image2, ref: "/pages/menu2" },
        { name: 'বেচা-কিনা', image: image3, ref: "/pages/menu3" },
        { name: 'সিলিন্ডার লাগবে', image: image5, ref: "/pages/menu4" },

    ];
    const menuItems1 = [
        { name: 'কমিউনিটি সেন্টার', image: image4 },
        { name: 'টিউশন', image: image6 },
        { name: 'জব', image: image7 },
        { name: 'মিস্ত্রি লাগবে', image: image8 },
        { name: 'স্কুল', image: image9 },
        { name: 'মাদ্রাসা', image: image10 },
        { name: 'কলেজ', image: image11 },
        { name: 'ফায়ার সার্ভিস', image: image12 },
        { name: 'পুলিশ স্টেশন', image: image13 },
        { name: 'BD Clean', image: image14 },
        { name: 'Red Crescent', image: image15 },
        { name: 'Animal Rescue', image: image16 },
        { name: 'Skills', image: image17 },
        { name: 'Travels', image: image18 },
    ];
    return (
        <View style={styles.grid}>
            {menuItems.map((item, index) => (
                < Link href={item.ref} key={index} style={styles.cardContainer} >
                    <View style={styles.view}>
                        <Image source={item.image} style={styles.image} />
                        <Text style={styles.cardText}>{item.name}</Text>
                    </View>
                </Link>
            ))
            }
            {menuItems1.map((item, index) => (
                <TouchableOpacity style={styles.card} key={index}>
                    <Image source={item.image} style={styles.image} />
                    <Text style={styles.cardText}>{item.name}</Text>
                </TouchableOpacity>
            ))}
        </View >
    );
}