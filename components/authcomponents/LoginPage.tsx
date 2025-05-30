import { useSubmitUser } from '@/hooks/useQueryFn';
import { faRightToBracket } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { useRouter } from 'expo-router';
import { Controller, useForm } from 'react-hook-form';
import { Text, TextInput, TouchableOpacity, View } from 'react-native';

type FormData = {
    name: string;
    password: string;
};

const LoginScreen = () => {
    const router = useRouter();

    const userData: FormData = {
        name: 'Vinodh',
        password: 'P@ssw0rd',
    }
    const {
        control,
        reset,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>();

    const { mutate: mutation } = useSubmitUser();

    const onSubmit = (data: FormData) => {
        mutation(
            { name: data.name, password: data.password },
            {
                onSuccess: (response: any) => {
                    console.log('User created successfully:', response);
                    const isValidUser = data.name === userData.name && data.password === userData.password;

                    if (isValidUser) {
                        console.log('Login successful:', data);
                        router.push('/(tabs)');
                    } else {
                        alert('Invalid credentials. Please try again.');
                    }
                    reset();
                },
                onError: (error: any) => {
                    alert('An error occurred while logging in. Please try again.');
                },
            },


        );
    };

    return (
        <View className="flex-1 justify-center items-center bg-white p-10"
        >
            <View className="flex flex-row items-center justify-center gap-4 mb-6"
            >
                <FontAwesomeIcon icon={faRightToBracket} size={30} />
                <Text className="text-2xl font-bold text-blue-600"
                >
                    User Login
                </Text>
            </View>

            <Text className="self-start mb-1 text-base font-medium">Name</Text>
            <Controller
                control={control}
                rules={{ required: 'Name is required' }}
                name="name"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        className="w-full border border-gray-300 rounded-md p-3 mb-1"
                        placeholder="Enter your name"
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors.name && (
                <Text className="text-red-500 mb-2">{errors.name.message}</Text>
            )}

            <Text className="self-start mb-1 text-base font-medium">Password</Text>
            <Controller
                control={control}
                rules={{ required: 'Password is required' }}
                name="password"
                render={({ field: { onChange, value } }) => (
                    <TextInput
                        className="w-full border border-gray-300 rounded-md p-3 mb-1"
                        placeholder="Enter your password"
                        secureTextEntry
                        value={value}
                        onChangeText={onChange}
                    />
                )}
            />
            {errors.password && (
                <Text className="text-red-500 mb-4">{errors.password.message}</Text>
            )}

            <View className="w-full">
                <TouchableOpacity
                    className="bg-blue-600 py-3 rounded-md items-center mt-4"
                    onPress={handleSubmit(onSubmit)}
                >
                    <Text className="text-white font-semibold text-base">Login</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default LoginScreen;
