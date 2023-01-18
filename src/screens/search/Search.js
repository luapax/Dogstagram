import { View, FlatList, StyleSheet } from "react-native";
import SearchHeader from "./SearchHeader";
import SearchPhoto from "./SearchPhoto";
import { useQuery } from "@tanstack/react-query";


async function getPhotos() {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
        response.json()
    );
}


export default function Search({ navigation }) {
    const { data, isLoading } = useQuery(["random"], getPhotos, {
        placeholderData: [],
    });


    return (
        <View style={styles.container}>
            <SearchHeader />
            <View style={styles.content}>
                {isLoading && <Text>Loading...</Text>}
                <FlatList
                    numColumns={3}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => {
                        return <SearchPhoto item={item} />;
                    }}
                />
            </View>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        flex: 10,
        justifyContent: 'center',
        alignItems: 'center',
    },

});