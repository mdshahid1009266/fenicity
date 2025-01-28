import { Stack } from "expo-router"
import Info from "./pages/InfoPage"
import "./global.css"

const _layout = () => {
    return (
        <Stack>
            <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
            <Stack.Screen name="pages/InfoPage" options={{ headerShown: true, title: 'Info', headerTitleAlign: 'left' }} />
            <Stack.Screen name="pages/menu1" options={{
                headerShown: true, title: 'চিকিৎসা', headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#0984e3',
                },
            }} />
            <Stack.Screen name="pages/menu2" options={{
                headerShown: true, title: 'গাড়ি ভাড়া', headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#0984e3',
                },
            }} />
            <Stack.Screen name="pages/menu3" options={{
                headerShown: true, title: 'বেচা-কিনা', headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#0984e3',
                },
            }} />
            <Stack.Screen name="pages/menu4" options={{
                headerShown: true, title: 'সিলিন্ডার লাগবে', headerTitleAlign: 'left',
                headerTitleStyle: {
                    fontWeight: 'bold',
                    color: '#0984e3',
                },
            }} />


            <Stack.Screen name="pages/signUp" options={{ headerShown: false }} />
            <Stack.Screen name="pages/login" options={{ headerShown: false }} />
        </Stack>
    )
}

export default _layout