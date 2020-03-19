import MapView from "react-native-maps";
import React from "react";

export default function CovidMap() {
    let points = [{latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.841776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83646681, longitude: 79.77121907, weight: 1},
        {latitude: 6.82776681, longitude: 79.871319, weight: 1},
        {latitude: 6.82176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83776681, longitude: 79.871319, weight: 1},
        {latitude: 6.83176681, longitude: 79.871319, weight: 1},
        {latitude: 6.83976681, longitude: 79.861319, weight: 1},
        {latitude: 6.83076681, longitude: 79.861319, weight: 1},
        {latitude: 6.82776681, longitude: 79.861319, weight: 1},
        {latitude: 6.82076681, longitude: 79.871319, weight: 1},
        {latitude: 6.82076681, longitude: 79.861319, weight: 1},
        {latitude: 6.81076681, longitude: 79.861319, weight: 1},
        {latitude: 6.83776681, longitude: 79.869319, weight: 1},
        {latitude: 6.83276681, longitude: 79.869319, weight: 1},
        {latitude: 6.81976681, longitude: 79.869319, weight: 1},
        {latitude: 6.83776681, longitude: 79.867319, weight: 1},
        {latitude: 6.83776681, longitude: 79.865319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},
        {latitude: 6.841776681, longitude: 79.869319, weight: 1},
        {latitude: 6.84076681, longitude: 79.871319, weight: 1},

    ];
    return (
        <MapView
            provider={MapView.PROVIDER_GOOGLE}
        >
            <MapView.Heatmap
                points={points}
                opacity={1}
                radius={20}
                maxIntensity={100}
                gradientSmoothing={10}
                heatmapMode={"POINTS_DENSITY"}
            />
        </MapView>
    )
}