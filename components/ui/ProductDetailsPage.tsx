import { Product } from '@/hooks/apiTypes';
import { useGetProductData } from '@/hooks/useQueryFn';
import React from 'react';
import { FlatList, Pressable, ScrollView, Text, View } from 'react-native';
import ProductCard from './ProductCard';


const ProductDetailsPage = () => {
    const { data: productData } = useGetProductData() as { data?: Product[] | [] };
    console.log('ProductDetailsPage productData:', productData);
    return (
        <View className='w-full h-full bg-gray-100 flex items-center justify-center p-4'>
            <ScrollView>
                {productData?.map((product) => (
                    <FlatList
                        key={product.id}
                        data={[product]}
                        renderItem={({ item }) => (
                            <Pressable className={`bg-white p-4 mb-4 rounded shadow-lg ${item.id % 2 === 0 ? 'bg-red-500' : 'bg-green-100'}`}>
                                <Text className='text-lg font-bold'>{item.title}</Text>
                            </Pressable>
                        )}
                        keyExtractor={(item) => item.id.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                ))}:
                {productData?.length === 0 && (
                    <Text className='text-gray-500 text-center'>No products available</Text>
                )}
            </ScrollView>
            <ProductCard />

        </View>
    );
};
export default ProductDetailsPage


