import {Card, Paragraph, Title} from "react-native-paper";
import React from "react";

export default function CountryComponent({country}) {
    return (
        <Card>
            <Card.Content>
                <Title>{country.country}</Title>
                <Paragraph>
                    Confirmed Cases: {country.confirmed} {"\n"}
                    Recovered: {country.recovered} {"\n"}
                    Deaths: {country.deaths}
                </Paragraph>
            </Card.Content>
        </Card>
    );
}