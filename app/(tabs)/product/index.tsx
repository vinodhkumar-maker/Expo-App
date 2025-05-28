import { Product } from '@/hooks/apiTypes';
import { useGetProductData } from '@/hooks/useQueryFn';
import { Link } from 'expo-router';
import React from 'react';
import { FlatList, Text, View } from 'react-native';

const ProductLists = () => {
    const { data: productData } = useGetProductData() as { data?: Product[] };

    if (!productData || productData.length === 0) {
        return (
            <View className='flex-1 items-center justify-center bg-gray-100'>
                <Text className='text-gray-500'>No products available</Text>
            </View>
        );
    }

    return (
        <View className='flex-1 bg-gray-100 p-4'>
            <FlatList
                data={productData}
                renderItem={({ item }) => (
                    <Link
                        href={`/product/${item.id}`}
                        className='bg-white p-4 mb-4 rounded shadow-lg'
                    >
                        <Text className='text-lg font-bold'>{item.title}</Text>
                    </Link>
                )}
                keyExtractor={(item) => item.id.toString()}
                showsVerticalScrollIndicator={false}
            />
        </View>
    );
};

export default ProductLists;
