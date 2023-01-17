import { View, StyleSheet, TextInput } from "react-native";
import * as SplashScreen from 'expo-splash-screen';
import { Fontisto } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();


export default function SearchHeader() {

    return (
        <View style={styles.search}>
            <Fontisto
                name="search"
                size={24}
                color="black"
                style={styles.search_icon}
            />
            <TextInput
                style={styles.search_input}
                placeholder="Search"
                placeholderTextColor="black"
            ></TextInput>
        </View>
    );
}

const styles = StyleSheet.create({
    search: {
        flex: 1,
        flexDirection: "row",
        padding: 8,
        marginTop: 15,
        alignItems: "flex-end",
        justifyContent: "center",
    },
    search_icon: {
        position: "absolute",
        left: 20,
        bottom: 13,
        zIndex: 2,
    },
    search_input: {
        paddingLeft: 44,
        fontSize: 16,
        backgroundColor: "white",
        paddingVertical: 10,
        width: "98%",
        color: "black",
        borderRadius: 5,
    },
});