import React, {useEffect, useState} from "react";
import {ActivityIndicator, FlatList, View} from "react-native";
import {Styles as styles} from "../styles/styles";
import CountryComponent from "./CountryComponent";
import {Snackbar} from "react-native-paper";

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

export default function CountryData() {
    const [countryData, updateData] = useState([]);
    const [refreshConfirmation, confirmRefresh] = useState(false);
    function refreshData(firstOpen) {
        getAllCountryData(function(dataVariable) {
            dataVariable.sort(function(obj1, obj2) {
                let a = obj1.country, b = obj2.country;
                if (a > b) return 1;
                else if (a < b) return -1;
                else return 0;
            });
            updateData(dataVariable);
            console.log("Data refreshed");
            if (firstOpen === false) confirmRefresh(true);
        });
    }
    useEffect(() => {
        refreshData(true);
    }, []);
    const loadWheel = (
        <ActivityIndicator
            animating={countryData.length === 0}
            size="large"
            color="#66f"
            style={styles.loadingWheel}
        />
    );
    return (
        <View>
            {countryData.length === 0 ? loadWheel : null}
            <FlatList
                data = {countryData}
                renderItem = {({item})=><CountryComponent country={item}/>}
                keyExtractor={item => item.country}
                initialNumToRender={25}
                onRefresh={()=>refreshData(false)}
                refreshing={false}
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
        </View>
    )
}