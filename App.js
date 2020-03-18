import React, {useState, useEffect} from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import {
    Provider as PaperProvider,
    Appbar,
    Snackbar,
    Card,
    Title,
    Paragraph,
    BottomNavigation
} from 'react-native-paper';

let countryData = [];

function getAllCountryData(callback) {
    fetch('https://covidtracker.abstractultra.com/get_country_data')
        .then(response => response.json())
        .then(data => {
            let obj = [];
            for (let [key, value] of Object.entries(data)) {
                let data = {
                    title: key,
                    confirmed: value["confirmed"],
                    recovered: value["recovered"],
                    deaths: value["deaths"],
                };
                obj.push(data);
            }
            countryData = obj;
            callback((new Date()).getTime());
        });
}

function CountryComponent({country}) {
    if (countryData) {
        return (
            <Card>
                <Card.Content>
                    <Title>{country.title}</Title>
                    <Paragraph>
                        Confirmed Cases: {country.confirmed} {"\n"}
                        Recovered: {country.recovered} {"\n"}
                        Deaths: {country.deaths}
                    </Paragraph>
                </Card.Content>
            </Card>
        );
    } else {
        return (
            <Text/>
        )
    }
}

export default function App() {
    const [lastUpdate, updateData] = useState(0);
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
            <FlatList
                data = {countryData}
                renderItem = {({item})=><CountryComponent country={item}/>}
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