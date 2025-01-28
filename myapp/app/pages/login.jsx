import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native'
import { useState } from 'react'
// import { GoogleSignin } from '@react-native-google-signin/google-signin'

// GoogleSignin.configure({
//   webClientId: 'YOUR_WEB_CLIENT_ID', // Replace with your actual client ID
// })

function Login({ navigation }) {
  const [credentials, setCredentials] = useState({
    emailOrNumber: '',
    password: '',
  })
  const [errors, setErrors] = useState({})

  const validateForm = () => {
    let newErrors = {}
    
    if (!credentials.emailOrNumber) {
      newErrors.emailOrNumber = 'Email or phone number is required'
    }
    if (!credentials.password) {
      newErrors.password = 'Password is required'
    }
    
    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleLogin = () => {
    if (validateForm()) {
      // Add your authentication logic here
      console.log('Login credentials:', credentials)
      navigation.navigate('Home')
    }
  }

//   const handleGoogleLogin = async () => {
//     try {
//       await GoogleSignin.hasPlayServices()
//       const userInfo = await GoogleSignin.signIn()
//       console.log('Google user info:', userInfo)
//       navigation.navigate('Home')
//     } catch (error) {
//       Alert.alert('Google Sign-In Error', error.message)
//     }
//   }

  const handleForgotPassword = () => {
    navigation.navigate('ForgotPassword')
  }

  return (
    <View className="flex-1 p-6 bg-gray-50 justify-center">
      <View className="mb-8">
        <Text className="text-3xl font-bold text-gray-800">Welcome Back</Text>
        <Text className="text-gray-500 mt-2">Please sign in to continue</Text>
      </View>

      <View className="space-y-4">
        <View>
          <Text className="text-gray-700 mb-1">Email or Phone Number</Text>
          <TextInput
            className={`p-3 border rounded-lg ${errors.emailOrNumber ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="john@example.com or +1234567890"
            keyboardType="email-address"
            value={credentials.emailOrNumber}
            onChangeText={(text) => {
              setCredentials({...credentials, emailOrNumber: text})
              setErrors({...errors, emailOrNumber: null})
            }}
          />
          {errors.emailOrNumber && 
            <Text className="text-red-500 text-sm mt-1">{errors.emailOrNumber}</Text>}
        </View>

        <View>
          <Text className="text-gray-700 mb-1">Password</Text>
          <TextInput
            className={`p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
            placeholder="••••••••"
            secureTextEntry
            value={credentials.password}
            onChangeText={(text) => {
              setCredentials({...credentials, password: text})
              setErrors({...errors, password: null})
            }}
          />
          {errors.password && 
            <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>}
        </View>

        <TouchableOpacity 
          className="items-end mb-4"
          onPress={handleForgotPassword}
        >
          <Text className="text-blue-500 font-semibold">Forgot Password?</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="bg-blue-500 p-4 rounded-lg"
          onPress={handleLogin}
        >
          <Text className="text-white text-center font-bold">Sign In</Text>
        </TouchableOpacity>

        <View className="flex-row items-center my-6">
          <View className="flex-1 h-px bg-gray-300" />
          <Text className="px-3 text-gray-500">Or continue with</Text>
          <View className="flex-1 h-px bg-gray-300" />
        </View>

        <TouchableOpacity
          className="bg-red-500 p-4 rounded-lg flex-row items-center justify-center"
        //   onPress={handleGoogleLogin}
        >
          {/* Add Google icon here or use icon library */}
          <Text className="text-white font-bold ml-2">Google</Text>
        </TouchableOpacity>

        <View className="flex-row justify-center mt-6">
          <Text className="text-gray-600">Don't have an account? </Text>
          <TouchableOpacity onPress={() => navigation.navigate('SignUp')}>
            <Text className="text-blue-500 font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  )
}

export default Login