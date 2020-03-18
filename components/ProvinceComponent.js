import {Card, Paragraph, Title} from "react-native-paper";
import React from "react";

export default function ProvinceComponent({province}) {
    return (
        <Card>
            <Card.Content>
                <Title>{province.province}</Title>
                <Paragraph>
                    Country: {province.country} {"\n"}
                    Confirmed Cases: {province.confirmed} {"\n"}
                    Recovered: {province.recovered} {"\n"}
                    Deaths: {province.deaths}
                </Paragraph>
            </Card.Content>
        </Card>
    );
}