import { Tabs } from 'expo-router';
import React from 'react';
import { Platform } from 'react-native';

import { HapticTab } from '@/components/HapticTab';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme.web';
import { faAddressCard, faRightToBracket, faUpRightAndDownLeftFromCenter } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

const LoginLayout = () => {
    const colorScheme = useColorScheme();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                headerShown: true,
                tabBarButton: HapticTab,
                tabBarBackground: TabBarBackground,
                tabBarStyle: Platform.select({
                    ios: {
                        // Use a transparent background on iOS to show the blur effect
                        position: 'absolute',
                    },
                    default: {},
                }),
            }}
        >
            <Tabs.Screen
                name="index"
                options={{
                    title: 'Login',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon size={24} icon={faRightToBracket} color={color} />,
                }}
            />
            <Tabs.Screen
                name="register"
                options={{
                    title: 'Register',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon size={24} icon={faAddressCard} color={color} />,
                    // tabBarBadge: 3
                }}
            />
            <Tabs.Screen
                name="logout"
                options={{
                    title: 'LogOut',
                    tabBarIcon: ({ color }) => <FontAwesomeIcon size={24} icon={faUpRightAndDownLeftFromCenter} color={color} />,
                }}
            />
        </Tabs>
    )
}

export default LoginLayout