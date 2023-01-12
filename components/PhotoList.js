import { useEffect, useState } from 'react';
import { StyleSheet, View, Text, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";


async function fetchPhotos() {
    const response = await fetch('https://jsonplaceholder.typicode.com/photos')
    return await response.json();
}

export default function PhotoList() {


    const [photos, setPhotos] = useState([]);
    useEffect(() => {
        fetchPhotos().then(photos => setPhotos(photos));
    }, [])

    return (
        <View>
            <Text>Hello</Text>
            <FlatList>
                {photos.map(photo => (
                    <View key={photo.id}>
                        <Text>{photo.id}</Text></View>
                ))}
            </FlatList>
        </View>

    );
}





