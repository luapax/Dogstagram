import FeedHeader from "./FeedHeader";
import { View, Text, Button, StyleSheet, FlatList, Image } from "react-native";
import { useQuery } from "@tanstack/react-query";
import { Photo } from "./Photo";


async function getPhotos() {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((response) => response.json()
    );
}


// async function getPhotos() {
//     return fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0").then((response) =>
//         response.json()
//     );
// }



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
                    renderItem={({ item, index }) => {
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
