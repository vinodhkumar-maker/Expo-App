import { faEdit } from '@fortawesome/free-regular-svg-icons';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React, { useState } from 'react';
import { Alert, Button, FlatList, Pressable, Text, TextInput, View } from 'react-native';

const Profile = () => {
    const initialDetails = {
        name: 'Vinodh Kumar',
        email: 'vinodh@gmail.com',
        phone: '7032322670',
        address: '123 Main St, City, Country',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    };

    const [edit, setEdit] = useState(false);
    const [userDetails, setUserDetails] = useState(initialDetails);
    const [tempDetails, setTempDetails] = useState(initialDetails);

    const handleEdit = () => {
        setEdit(true);
        setTempDetails(userDetails);
    };

    const handleSave = () => {
        if (tempDetails.name.trim() === '') {
            Alert.alert('Validation Error', 'Name is required');
            return;
        }

        setUserDetails(tempDetails);
        setEdit(false);
    };

    const handleCancel = () => {
        setTempDetails(userDetails);
        setEdit(false);
    };

    const handleChange = (key: string, value: string) => {
        setTempDetails(prev => ({
            ...prev,
            [key]: value,
        }));
    };

    return (
        <View className="flex-1 mt-6 p-5 bg-gray-100">
            <View className="flex-row justify-between items-center mb-5">
                <FontAwesomeIcon size={50} icon={faUserCircle} color="blue" />
                {!edit && (
                    <Pressable onPress={handleEdit} className="flex-row items-center space-x-2 gap-2">
                        <Text className="text-base font-medium">Edit</Text>
                        <FontAwesomeIcon size={20} icon={faEdit} color="gray" />
                    </Pressable>
                )}
            </View>

            <FlatList
                data={Object.entries(edit ? tempDetails : userDetails)}
                keyExtractor={(item) => item[0]}
                renderItem={({ item }) => (
                    <View className="py-2 flex-row flex-wrap items-center">
                        <Text className="text-lg font-bold mr-2 w-[90px]">
                            {item[0].charAt(0).toUpperCase() + item[0].slice(1)}:
                        </Text>
                        {edit ? (
                            <TextInput
                                className="flex-1 text-base border-b border-gray-400 p-1"
                                value={item[1]}
                                onChangeText={(text) => handleChange(item[0], text)}
                            />
                        ) : (
                            <Text className="flex-1 text-base">{item[1]}</Text>
                        )}
                    </View>
                )}
            />

            {edit && (
                <View className="flex-row mt-5 justify-between space-x-3 gap-3">
                    <View className="flex-1">
                        <Button title="Cancel" onPress={handleCancel} color="red" />
                    </View>
                    <View className="flex-1">
                        <Button title="Save" onPress={handleSave} color="blue" />
                    </View>
                </View>
            )}
        </View>
    );
};

export default Profile;