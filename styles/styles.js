import {StyleSheet, Dimensions} from "react-native";

export {styles as Styles};

const styles = StyleSheet.create({
    topBar: {
        position: 'relative',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#66f',
    },
    loadingWheel: {
        padding: 25,
    },
    center: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'flex-start',
    },
    covidMap: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});