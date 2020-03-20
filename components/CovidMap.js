import MapView from "react-native-maps";
import {View} from "react-native";
import React, {useEffect, useState} from "react";
import {Styles as styles} from "../styles/styles";

function getWeightedLatLng(callback) {
    fetch('https://covidtracker.abstractultra.com/get_country_data')
        .then(response => response.json())
        .then(data => {
            let arr = [];
            for (let [key, value] of Object.entries(data)) {
                if (!value["latitude"] || !value["longitude"]) continue;
                let obj = {
                    latitude: value["latitude"],
                    longitude: value["longitude"],
                    weight: value["confirmed"],
                };
                if (obj["weight"] > 10) obj["weight"] = 10;
                arr.push(obj);
            }
            fetch('https://covidtracker.abstractultra.com/get_provincial_data')
                .then(response => response.json())
                .then(data => {
                    let arr2 = [];
                    for (let [key, value] of Object.entries(data)) {
                        if (!value["latitude"] || !value["longitude"]) continue;
                        let obj2 = {
                            latitude: value["latitude"],
                            longitude: value["longitude"],
                            weight: value["confirmed"],
                        };
                        if (obj2["weight"] > 10) obj2["weight"] = 10;
                        arr2.push(obj2);
                    }
                    arr = arr.concat(arr2);
                    callback(arr);
                });
        });
}

export default function CovidMap() {
    const [data, updateData] = useState([
        {
            latitude: 0,
            longitude: 0,
            weight: 1
        },
    ]);
    useEffect(() => {
        getWeightedLatLng(function(calledback) {
            updateData(calledback);
        });
    }, []);
    return (
        <View style = {styles.center}>
            <MapView
                style={styles.covidMap}
            >
                <MapView.Heatmap
                    points={data}
                    radius={50}
                />
            </MapView>
        </View>
    )
}