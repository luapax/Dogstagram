import FeedHeader from "./FeedHeader";
import { View, Text, StyleSheet, FlatList } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "./Photo";


async function getPhotos() {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()
    );
}


export default function NewsFeed() {
    const { data, isLoading } = useQuery(["random"], getPhotos, {
        placeholderData: [],
    });


    return (
        <View style={styles.container}>
            <FeedHeader />

            <View style={styles.container_header}>
                {isLoading && <Text>Loading...</Text>}
                <FlatList
                    data={data}
                    keyExtractor={(item) => item.id}
                    isLoading={isLoading}
                    renderItem={({ item }) => {
                        return (
                            <>
                                <Photo item={item} />
                            </>
                        );
                    }}
                ></FlatList>
            </View >
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    container_header: {
        flex: 10,
        alignSelf: 'stretch',
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center'
    },
});
