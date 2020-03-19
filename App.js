import React from 'react';
import {Provider as PaperProvider, Appbar} from 'react-native-paper';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import {Styles as styles} from  "./styles/styles.js";
import {NavigationContainer} from "@react-navigation/native";
import CountryData from "./components/CountryPage";
import ProvinceData from "./components/ProvincePage";
import {MaterialCommunityIcons} from "react-native-vector-icons";

const Tab = createMaterialBottomTabNavigator();

export default function App() {
    return (
        <PaperProvider>
            <NavigationContainer>
                <Appbar style={styles.topBar}>
                    <Appbar.Content title="CovidTracker"/>
                    <Appbar.Action icon="share" onPress={() => console.log("User clicked share")}/>
                    <Appbar.Action icon="dots-vertical" onPress={() => console.log("User clicked menu")}/>
                </Appbar>
                <Tab.Navigator
                    barStyle={{ backgroundColor: '#66f' }}
                    initialRouteName="Countries"
                    labelStyle={{ fontSize: 12 }}
                >
                    <Tab.Screen
                        name="Countries"
                        component={CountryData}
                        options={{
                            tabBarLabel: 'Countries',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="flag-variant" color={color} size={26} />
                            ),
                        }}
                    />
                    <Tab.Screen
                        name="Provinces"
                        component={ProvinceData}
                        options={{
                            tabBarLabel: 'Provinces',
                            tabBarIcon: ({ color }) => (
                                <MaterialCommunityIcons name="image-filter-hdr" color={color} size={26} />
                            ),
                        }}
                    />
            </Tab.Navigator>
            </NavigationContainer>
        </PaperProvider>
    );
}