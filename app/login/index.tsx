import LoginPage from '@/components/authcomponents/LoginPage'
import React from 'react'
import { View } from 'react-native'

const AuthScreen = () => {
    return (
        <View className='flex flex-row h-full w-full justify-center items-center'>
            <LoginPage />
        </View>
    )
}

export default AuthScreen