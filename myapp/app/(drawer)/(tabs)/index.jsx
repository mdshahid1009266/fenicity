import { View, Text, StatusBar } from 'react-native'
import React from 'react'
import Navbar from '@/components/navbar'
import Carousel from "../../../components/carousel"
import Menu from "../../../components/options"
import { ScrollView } from 'react-native-gesture-handler'
const Home = () => {
    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                backgroundColor="#0984e3" // Set background color
                barStyle="light-content" // Set text color (light-content for dark text, dark-content for light text) 
                hidden={false} // Show or hide the status bar (true to hide)
                translucent={false} // Set to true for semi-transparent status bar 
            />
            <View>
                <Navbar />
            </View>
            <View>
                <Carousel />
            </View>
            <View style={{ flex: 1,paddingHorizontal: 15,marginTop: 10 }} >
                <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                    <Menu />
                </ScrollView>
            </View>
        </View>
    )
}

export default Home