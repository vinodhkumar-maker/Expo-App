import { Stack } from 'expo-router'
import React from 'react'

function ProductsLayout() {
    return (
        <Stack>
            <Stack.Screen
                name="index"
                options={{
                    title: 'Products',
                    // headerTitleAlign: 'start',
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#343a40',
                    },
                }}
            />
            <Stack.Screen
                name="[id]"
                options={{
                    title: 'Product Item',
                    // headerTitleAlign: 'center',
                    headerStyle: {
                        backgroundColor: '#f8f9fa',
                    },
                    headerTitleStyle: {
                        fontWeight: 'bold',
                        color: '#343a40',
                    },
                }}
            />
        </Stack>
    )
}

export default ProductsLayout