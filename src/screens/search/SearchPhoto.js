import { useMemo } from "react";
import { View, Image, useWindowDimensions } from "react-native";

export default SearchPhoto = ({ item }) => {
    const { width } = useWindowDimensions();
    const size = useMemo(() => {
        const imageWidth = width / 3;
        return { width: imageWidth, height: imageWidth };
    }, [width]);

    return (
        <View style={{ width: width / 3 }}>
            <Image source={{ uri: item.url }} style={size} />
        </View>
    );
};
