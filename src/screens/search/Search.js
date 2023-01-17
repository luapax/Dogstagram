import { View, Text, FlatList, StyleSheet } from "react-native";
import SearchHeader from "./SearchHeader";
import SearchPhoto from "./SearchPhoto";
import { useQuery } from "@tanstack/react-query";



async function getPhotos() {
    return fetch("https://jsonplaceholder.typicode.com/photos").then((response) =>
        response.json()
    );
}


// async function getPhotos() {
//     return fetch("https://api.thedogapi.com/v1/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0").the//n((response) =>
//         response.json()
//     );
// }





export default function Search({ navigation }) {
    const { data, isLoading } = useQuery(["random"], getPhotos, {
        placeholderData: [],
    });
    return (
        <View style={styles.container}>
            <SearchHeader />
            <View style={styles.content}>
                <FlatList
                    numColumns={3}
                    data={data}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item, index }) => {
                        return <SearchPhoto item={item} navigation={navigation} />;
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