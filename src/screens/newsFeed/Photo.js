import { View, Text, Image, StyleSheet } from "react-native";
import { Ionicons, Feather, FontAwesome } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";

export const Photo = ({ item }) => {
    return (
        <>
            <View style={styles.container_header}>
                <FontAwesome name="user-circle-o" size={24} color="black" />
                <Text style={styles.container_header_user}>User Lorem</Text>
            </View>
            <View style={styles.container_image}>
                <Image
                    style={styles.image}
                    source={{
                        uri: item.url,
                    }}
                ></Image>
            </View>
            <View style={styles.container_footer}>
                <View style={styles.container_footer_icons}>
                    <Ionicons style={styles.container_footer_icons_icon} name="paw" size={24} color="black" />

                    <FontAwesome style={styles.container_footer_icons_icon} name="comment-o" size={24} color="black" /><Feather style={styles.container_footer_icons_icon} name="send" size={24} color="black" />
                </View>
                <View style={styles.container_footer_details}>
                    <Text style={styles.text}><Text style={styles.text_bold}>Views: 125 489</Text> </Text>
                    <Text style={styles.text}><Text style={styles.text_bold}>User Lorem:</Text> {item.title}</Text>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container_header: {
        paddingLeft: 5,
        flex: 1,
        flexDirection: "row",
        marginTop: 20,
        marginBottom: 5,
        alignItems: 'center',

    },
    container_header_user: {
        fontSize: 14,
        paddingLeft: 5,
    },
    image: {
        width: '100%',
        height: 400,
        alignSelf: 'center',

    },
    text_bold: {
        fontWeight: 'bold',
    },
    container_footer_icons: {
        marginTop: 5,
        marginBottom: 5,
        flex: 1,
        flexDirection: 'row',
        paddingLeft: 5
    },
    container_footer_icons_icon: {
        paddingRight: 10,
    },
    container_footer_details: {
        paddingBottom: 5,
    },
    text: {
        paddingLeft: 4,
        paddingRight: 4,
    }

});