import { useMemo } from "react";
import {
    View,
    Image,
    useWindowDimensions,
    TouchableOpacity,
} from "react-native";

export default SearchPhoto = ({ item, navigation }) => {
    const { width } = useWindowDimensions();
    const size = useMemo(() => {
        const imageWidth = width / 3;
        return { width: imageWidth, height: imageWidth };
    }, [width]);

    return (
        <TouchableOpacity onPress={() => navigation.navigate(id)}>
            <View style={{ width: width / 3 }}>
                <Image source={{ uri: item.url }} style={size} />
            </View>
        </TouchableOpacity>
    );
};


