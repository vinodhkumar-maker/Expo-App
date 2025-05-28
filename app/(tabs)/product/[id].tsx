import { useFetchProductItem } from '@/hooks/useQueryFn';
import { useLocalSearchParams } from 'expo-router';
import { ActivityIndicator, Image, Text, View } from 'react-native';


const ProductItem = () => {
    const { id } = useLocalSearchParams();

    const { data, isLoading, error } = useFetchProductItem(id ? parseInt(id as string) : undefined);
    console.log('data', data);
    const parsedId = typeof id === 'string' ? parseInt(id, 10) : undefined;
    if (!parsedId || isNaN(parsedId)) {
        return <Text>Invalid product ID</Text>;
    }
    if (isLoading) return <ActivityIndicator size="large" className="mt-10" />;
    if (error) return <Text>Error loading product.</Text>;
    if (!data) return <Text>No product data found</Text>;

    const product = data as {
        id: number;
        title: string;
        description: string;
        price: string;
        image: string;
    }

    return (
        <View className="p-4 bg-white h-full">
            <Text className="text-2xl font-bold">{product.title}</Text>
            <Image
                source={{ uri: product.image }}
                className="w-full h-[300px] mt-4"
                resizeMode="contain"
            />
            <Text className="mt-2">{product.description}</Text>
            <Text className="mt-2 font-bold text-lg">{product.price}</Text>
        </View>
    );
};

export default ProductItem;
