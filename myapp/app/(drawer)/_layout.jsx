import { View, Text, StyleSheet, Linking, Share } from "react-native";
import React, { useEffect } from "react";
import { Drawer } from "expo-router/drawer";
import { DrawerContentScrollView, DrawerItem } from "@react-navigation/drawer";
import { router, usePathname } from "expo-router";
import {
    Feather,
    AntDesign,
    MaterialIcons,
    Ionicons,
} from "@expo/vector-icons";
import { useFonts } from "expo-font";

const CustomDrawerContent = (props) => {
    const pathname = usePathname();

    const [fontsLoaded] = useFonts({
        BanglaFont1: require("../../assets/fonts/ShohidShafkatSamir.ttf"),
        BanglaFont2: require("../../assets/fonts/ShohidShafkatSamir.ttf"),
    });

    useEffect(() => { }, [pathname]);

    if (!fontsLoaded) return null; // Ensure fonts are loaded before rendering

    const openSocialLink = async (url) => {
        try {
            const supported = await Linking.canOpenURL(url);
            if (supported) {
                await Linking.openURL(url);
            } else {
                console.error("Can't open URL:", url);
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };
    return (
        <DrawerContentScrollView {...props} contentContainerStyle={{ padding: 0, margin: 0, }}>
            {/* Drawer Header */}
            <View style={styles.drawerHeader}>
                <Text style={styles.drawerTitle}>আমাদের ফেনী</Text>
                <Text style={styles.drawerSubtitle}>শিক্ষা, সংস্কৃতি, ঐতিহ্য</Text>
            </View>
            {/* Join US */}
            <View className="bg-primary-50 border-y-2 border-gray-200 px-2">
                <Text className="text-lg font-bold mb-2">Join Us</Text>
                <View className="joinUsContainer">
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather
                                name="facebook"
                                size={size}
                            />
                        )}
                        label={"Facebook"}
                        labelStyle={[
                            styles.navItemLabel,
                        ]}
                        style={{
                            marginVertical: 0,
                        }}
                        onPress={() =>
                            Linking.openURL(
                                "https://facebook.com/YourPage"
                            )
                        }
                    />
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather
                                name="instagram"
                                size={size}
                            />
                        )}
                        label={"Instagram"}
                        labelStyle={[
                            styles.navItemLabel,
                        ]}
                        style={{
                            marginVertical: 0,
                        }}
                        onPress={() =>
                            Linking.openURL(
                                "https://instagram.com/YourPage"
                            )
                        }
                    />
                </View>
            </View>
            {/* Contact US */}
            <View className="bg-primary-50 border-y-2 border-gray-200 px-2">
                <Text className="text-lg font-bold mb-2">Contact</Text>
                <View className="joinUsContainer">
                    {/* Call Action */}
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="phone" size={size} color="#000" />
                        )}
                        label={"Call Us"}
                        labelStyle={styles.navItemLabel}
                        style={{ backgroundColor: "#fff", marginVertical: 0 }}
                        onPress={() => Linking.openURL("tel:+1234567890")}
                    />

                    {/* Message Action */}
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="message-circle" size={size} color="#000" />
                        )}
                        label={"Send a Message"}
                        labelStyle={styles.navItemLabel}
                        style={{ backgroundColor: "#fff", marginVertical: 0 }}
                        onPress={() => Linking.openURL("sms:+1234567890")}
                    />

                    {/* Email Action */}
                    <DrawerItem
                        icon={({ color, size }) => (
                            <Feather name="mail" size={size} color="#000" />
                        )}
                        label={"Email Us"}
                        labelStyle={styles.navItemLabel}
                        style={{ backgroundColor: "#fff", marginVertical: 0 }}
                        onPress={() =>
                            Linking.openURL(
                                "mailto:example@email.com?subject=Inquiry&body=Hello, I would like to..."
                            )
                        }
                    />
                </View>
            </View>
            {/* Others */}
            <View className="bg-primary-50 border-y-2 border-gray-200 px-2">
                <Text className="text-lg font-bold mb-2">Others</Text>
                <View className="joinUsContainer">
                    {/* Contributors */}
                    <DrawerItem
                        icon={({ size }) => <Feather name="users" size={size} color="#000" />}
                        label={"Contributors"}
                        labelStyle={styles.navItemLabel}
                        style={{ marginVertical: 0 }}
                        onPress={() => router.push("/contributors")} // Redirect to contributors page
                    />

                    {/* Developer */}
                    {/* <DrawerItem
                        icon={({ size }) => <Feather name="code" size={size} color="#000" />}
                        label={"Developer"}
                        labelStyle={styles.navItemLabel}
                        style={{ marginVertical: 0 }}
                        onPress={() => router.push("/developer")} // Redirect to developer page
                    /> */}

                    {/* Share */}
                    <DrawerItem
                        icon={({ size }) => <Feather name="share" size={size} color="#000" />}
                        label={"Share"}
                        labelStyle={styles.navItemLabel}
                        style={{ marginVertical: 0 }}
                        onPress={async () => {
                            try {
                                const result = await Share.share({
                                    message: "Check out this amazing app: https://example.com",
                                });
                                if (result.action === Share.sharedAction) {
                                    if (result.activityType) {
                                        console.log("Shared with activity type:", result.activityType);
                                    } else {
                                        console.log("Shared successfully!");
                                    }
                                } else if (result.action === Share.dismissedAction) {
                                    console.log("Share dismissed.");
                                }
                            } catch (error) {
                                console.error("Error sharing:", error.message);
                            }
                        }}
                    />

                    {/* Rate Us */}
                    <DrawerItem
                        icon={({ size }) => <Feather name="star" size={size} color="#000" />}
                        label={"Rate Us"}
                        labelStyle={styles.navItemLabel}
                        style={{ marginVertical: 0 }}
                        onPress={() =>
                            Linking.openURL(
                                "https://play.google.com/store/apps/details?id=com.example.app" // Replace with your app's store URL
                            )
                        }
                    />

                    {/* Privacy Policy */}
                    <DrawerItem
                        icon={({ size }) => <Feather name="file-text" size={size} color="#000" />}
                        label={"Privacy Policy"}
                        labelStyle={styles.navItemLabel}
                        style={{ marginVertical: 0 }}
                        onPress={() =>
                            Linking.openURL("https://example.com/privacy-policy") // Replace with your privacy policy URL
                        }
                    />
                </View>
            </View>
        </DrawerContentScrollView>
    );
};

export default function Layout() {
    return (
        <Drawer
            drawerContent={(props) => <CustomDrawerContent {...props} />}
            screenOptions={{
                headerShown: false,
                drawerStyle: { backgroundColor: "#fff", padding: 0 },
                sceneContainerStyle: { backgroundColor: "#fff" },
                drawerType: "front", // Ensures minimal behavior
                swipeEdgeWidth: 0, // Removes swipe area for opening
            }}
        >
            <Drawer.Screen name="favourites" options={{ headerShown: true }} />
            <Drawer.Screen name="settings" options={{ headerShown: true }} />
        </Drawer>
    );
}

const styles = StyleSheet.create({
    drawerHeader: {
        padding: 20,
        backgroundColor: "#0984e3",
        alignItems: "center",
    },
    drawerTitle: {
        fontSize: 28,
        fontFamily: "BanglaFont1",
        color: "#fff",
        fontWeight: "bold",
    },
    drawerSubtitle: {
        fontSize: 16,
        fontFamily: "BanglaFont2",
        color: "#fff",
    },
    navItemLabel: {
        fontSize: 16,
        fontWeight: "bold",
    },
});
