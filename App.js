import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Screen01 from './src/screens/screen01';
import Screen02 from './src/screens/screen02';

const Stack = createNativeStackNavigator();

export default function App() {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName='screen_01'>
                <Stack.Screen
                    name='screen_01'
                    component={Screen01}
                    options={{ headerShown: false }}
                />
                <Stack.Screen
                    name='screen_02'
                    component={Screen02}
                    options={{ headerShown: false }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
}
