import React from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Styles as styles} from  "./styles/styles.js";
import {NavigationContainer} from "@react-navigation/native";
import CountryData from "./components/CountryPage";
import ProvinceData from "./components/ProvincePage";

export default function App() {
    const Tab = createMaterialBottomTabNavigator();
    return (
        <PaperProvider>
            <NavigationContainer>
                <Appbar style={styles.topBar}>
                    <Appbar.Content title="CovidTracker"/>
                    <Appbar.Action icon="refresh" onPress={() => console.log("User clicked refresh")}/>
                    <Appbar.Action icon="share" onPress={() => console.log("User clicked share")}/>
                    <Appbar.Action icon="dots-vertical" onPress={() => console.log("User clicked menu")}/>
                </Appbar>
                <Tab.Navigator
                    barStyle={{ backgroundColor: '#66f' }}
                >
                    <Tab.Screen name="Countries" component={CountryData} />
                    <Tab.Screen name="Provinces" component={ProvinceData} />
            </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}