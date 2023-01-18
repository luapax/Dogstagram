import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesome5, MaterialCommunityIcons } from "@expo/vector-icons";


import Search from "../screens/search";
import NewsFeed from "../screens/newsFeed/NewsFeed";


const Tab = createBottomTabNavigator();


export default function MainNavigator() {
    return (
        <Tab.Navigator initialRouteName="ReactNativeApp" screenOptions={{
            tabBarActiveTintColor: '#41A385',
            headerShown: false,

        }}>
            <Tab.Screen
                name="NewsFeed"
                component={NewsFeed}
                options={{
                    tabBarLabel: 'NewsFeed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="home" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <FontAwesome5 name="dog" color={color} size={size} />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}
