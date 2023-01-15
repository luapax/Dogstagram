import { View, Text, Button } from "react-native";
import FeedHeader from "./FeedHeader";
import PhotoList from "./PhotoList";

export default function NewsFeed() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <FeedHeader />
            <PhotoList />
            <Text>Feed!</Text>
        </View>
    );
}
