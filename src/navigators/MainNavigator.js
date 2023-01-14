import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Search from "../screens/search";
import NewsFeed from "../screens/newsFeed/NewsFeed";


const Tab = createBottomTabNavigator();


export default function MainNavigator() {
    return (
        <Tab.Navigator initialRouteName="ReactNativeApp" screenOptions={{
            tabBarActiveTintColor: '#41A385',
            headerShown: false,

            // tabBarActiveTintColor: '#8A4B2F',
        }}>
            <Tab.Screen
                name="NewsFeed"
                component={NewsFeed}
                options={{
                    tabBarLabel: 'NewsFeed',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="paw" color={color} size={size} />
                    ),
                }}
            />
            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: 'Search',
                    tabBarIcon: ({ color, size }) => (
                        <MaterialCommunityIcons name="dog" color={color} size={size} />
                    ),
                }}
            />


        </Tab.Navigator>
    );
}





// export default function MainNavigator() {
//     return (
//         <Tab.Navigator initialRouteName="ReactNativeApp">
//             <Tab.Screen name="NewsFeed" component={NewsFeed} />
//             <Tab.Screen name="Search" component={Search} />

//         </Tab.Navigator>
//     );
// }
