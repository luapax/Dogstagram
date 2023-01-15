import { View, Text, Button, StyleSheet, Image } from "react-native";
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import { useCallback } from 'react';
import { Octicons, Ionicons, Feather } from '@expo/vector-icons';

SplashScreen.preventAutoHideAsync();



export default function FeedHeader() {

    const [fontsLoaded] = useFonts({
        'Pacifico': require('./Pacifico-Regular.ttf'),
    });

    const onLayoutRootView = useCallback(async () => {
        if (fontsLoaded) {
            await SplashScreen.hideAsync();
        }
    }, [fontsLoaded]);

    if (!fontsLoaded) {
        return null;
    }
    return (
        <View style={styles.container_header} >
            <View style={styles.container_header_logo}>
                <Image source={require('./logo1.jpg')} style={{
                    height: 60,
                    width: 60,
                }}></Image>
            </View>
            <View style={styles.container_header_name} onLayout={onLayoutRootView}>
                <Text style={{ fontFamily: 'Pacifico', fontSize: 30 }}>Dogstagram</Text>
            </View>

            <View style={styles.container_header_icons}>
                <Ionicons style={styles.container_header_icons_icon} name="paw" size={24} color="black" />
                <Octicons style={styles.container_header_icons_icon} name="diff-added" size={24} color="black" />
                <Feather style={styles.container_header_icons_icon} name="send" size={24} color="black" />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container_header: {
        flex: 1,
        flexDirection: "row",
        paddingTop: 50,
        backgroundColor: 'white',
        alignContent: 'stretch',
        justifyContent: "space-between"
    },
    container_header_logo: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: 'green',
        height: 60,
        alignItems: 'center',
        paddingLeft: 5,
    },
    container_header_name: {
        flex: 3,
        flexDirection: "row",
        height: 60,
        alignItems: 'center',
        fontFamily: 'Pacifico',
    },
    container_header_icons: {
        flex: 1,
        flexDirection: "row",
        // backgroundColor: 'pink',
        alignItems: 'center',
        height: 60,
        marginRight: 30,
        // justifyContent: 'flex-end',
        // justifyContent: "space-between"
    },
    container_header_icons_icon: {
        paddingRight: 10,

    }
});