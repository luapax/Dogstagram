import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Search from "../screens/search";
import NewsFeed from "../screens/newsFeed/NewsFeed";


const Tab = createBottomTabNavigator();


export default function MainNavigator() {
    return (
        <Tab.Navigator initialRouteName="ReactNativeApp">
            <Tab.Screen name="NewsFeed" component={NewsFeed} />
            <Tab.Screen name="Search" component={Search} />

        </Tab.Navigator>
    );
}
