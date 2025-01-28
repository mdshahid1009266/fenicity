import { View, Text, TextInput, TouchableOpacity, ScrollView, StatusBar } from 'react-native'
import { useState } from 'react'

function SignUp() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        number: '',
        address: '',
        password: '',
        confirmPassword: ''
    })
    const [errors, setErrors] = useState({})

    const validateForm = () => {
        let newErrors = {}

        if (!formData.name) newErrors.name = 'Name is required'
        if (!formData.email) newErrors.email = 'Email is required'
        if (!formData.number) newErrors.number = 'Number is required'
        if (!formData.address) newErrors.address = 'Address is required'
        if (!formData.password) newErrors.password = 'Password is required'
        if (formData.password !== formData.confirmPassword)
            newErrors.confirmPassword = 'Passwords do not match'

        setErrors(newErrors)
        return Object.keys(newErrors).length === 0
    }

    const handleSubmit = () => {
        if (validateForm()) {
            // Submit form data
            console.log('Form submitted:', formData)
        }
    }

    const handleInputChange = (name, value) => {
        setFormData({
            ...formData,
            [name]: value
        })
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors({
                ...errors,
                [name]: null
            })
        }
    }

    return (
        <View style={{ flex: 1, backgroundColor: "green" }} >
            <StatusBar
                backgroundColor="#0984e3" // Set background color
                barStyle="light-content" // Set text color (light-content for dark text, dark-content for light text) 
                hidden={false} // Show or hide the status bar (true to hide)
                translucent={false} // Set to true for semi-transparent status bar 
            />
            <ScrollView style={{ flex: 1 }} showsVerticalScrollIndicator={false} >
                <View className="flex-1 bg-[#0984e3]">
                    <View className="mb-8  p-6 ">
                        <Text className="text-3xl font-bold text-white font-rubik-bold">Create Account</Text>
                        <Text className="text-gray-50 mt-2">Join our community today!</Text>
                    </View>
                    <View className="space-y-4 bg-gray-50 rounded-t-2xl p-6">
                        <View>
                            <Text className="text-gray-700 mb-1">Full Name</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.name ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Write your full name"
                                value={formData.name}
                                onChangeText={(text) => handleInputChange('name', text)}
                            />
                            {errors.name && <Text className="text-red-500 text-sm mt-1">{errors.name}</Text>}
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Email</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.email ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Write your email"
                                keyboardType="email-address"
                                value={formData.email}
                                onChangeText={(text) => handleInputChange('email', text)}
                            />
                            {errors.email && <Text className="text-red-500 text-sm mt-1">{errors.email}</Text>}
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Phone Number</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.number ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="+1 234 567 890"
                                keyboardType="phone-pad"
                                value={formData.number}
                                onChangeText={(text) => handleInputChange('number', text)}
                            />
                            {errors.number && <Text className="text-red-500 text-sm mt-1">{errors.number}</Text>}
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Address</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.address ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="Street, City, Country"
                                multiline
                                value={formData.address}
                                onChangeText={(text) => handleInputChange('address', text)}
                            />
                            {errors.address && <Text className="text-red-500 text-sm mt-1">{errors.address}</Text>}
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Password</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.password ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                secureTextEntry
                                value={formData.password}
                                onChangeText={(text) => handleInputChange('password', text)}
                            />
                            {errors.password && <Text className="text-red-500 text-sm mt-1">{errors.password}</Text>}
                        </View>

                        <View>
                            <Text className="text-gray-700 mb-1">Confirm Password</Text>
                            <TextInput
                                className={`p-3 border rounded-lg ${errors.confirmPassword ? 'border-red-500' : 'border-gray-300'}`}
                                placeholder="••••••••"
                                secureTextEntry
                                value={formData.confirmPassword}
                                onChangeText={(text) => handleInputChange('confirmPassword', text)}
                            />
                            {errors.confirmPassword &&
                                <Text className="text-red-500 text-sm mt-1">{errors.confirmPassword}</Text>}
                        </View>

                        <TouchableOpacity
                            className="bg-blue-500 p-4 rounded-lg mt-6"
                            onPress={handleSubmit}
                        >
                            <Text className="text-white text-center font-bold">Sign Up</Text>
                        </TouchableOpacity>

                        <View className="flex-row justify-center mt-4">
                            <Text className="text-gray-600">Already have an account? </Text>
                            <TouchableOpacity>
                                <Text className="text-blue-500 font-bold">Login</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView >
        </View >
    )
}

export default SignUp