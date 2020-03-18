import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList, ActivityIndicator} from 'react-native';
import {Provider as PaperProvider, Appbar, Snackbar, Card, Title, Paragraph,} from 'react-native-paper';
import CountryComponent from "./components/CountryComponent";

function getAllCountryData(callback) {
    fetch('https://covidtracker.abstractultra.com/get_country_data')
        .then(response => response.json())
        .then(data => {
            let obj = [];
            for (let [key, value] of Object.entries(data)) {
                let data = {
                    country: key,
                    confirmed: value["confirmed"],
                    recovered: value["recovered"],
                    deaths: value["deaths"],
                };
                obj.push(data);
            }
            callback(obj);
        });
}

export default function App() {
    const [countryData, updateData] = useState([]);
    const [refreshConfirmation, confirmRefresh] = useState(false);
    function refreshData(firstOpen) {
        getAllCountryData(function(dataVariable) {
            updateData(dataVariable);
            console.log("Data refreshed");
            if (firstOpen === false) confirmRefresh(true);
        });
    }
    useEffect(() => {
        refreshData(true);
    }, []);
    return (
        <PaperProvider>
            <Appbar style={styles.top}>
                <Appbar.Content title="CovidTracker"/>
                <Appbar.Action icon="refresh" onPress={() => refreshData(false)}/>
                <Appbar.Action icon="share" onPress={() => getAllCountryData()}/>
                <Appbar.Action icon="dots-vertical" onPress={() => console.log("User clicked menu")}/>
            </Appbar>
            <ActivityIndicator style={styles.center} size="large" color="#0000ff" />
            <FlatList
                data = {countryData}
                renderItem = {({item})=><CountryComponent country={item}/>}
                keyExtractor={item => item.country}
            />
            <Snackbar
                visible = {refreshConfirmation}
                onDismiss = {() => confirmRefresh(false)}
                action={{
                    label: 'Dismiss',
                    onPress: () => {
                        confirmRefresh(false);
                    },
                }}>
                Data updated!
            </Snackbar>
        </PaperProvider>
    );
}

const styles = StyleSheet.create({
    top: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#66f',
    },
    scrollview: {
        padding: 25,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    }
});