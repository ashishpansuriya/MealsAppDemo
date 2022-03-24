import React from "react";
import { View, StyleSheet, Text, TouchableOpacity, ImageBackground } from "react-native";
import { color } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";

const MealItem = props => {

    return (
        <View style={styles.screen}>
            <TouchableOpacity onPress={props.onSelectMeal}>
                <View style={{ borderRadius: 20, overflow: "hidden" }}>
                    <ImageBackground source={{ uri: props.imageUrl }} style={styles.BGImage} >

                        <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
                            <Text style={{ ...styles.title }}>
                                {props.title}
                            </Text>
                        </View>

                        <View style={{ ...styles.mealRow, ...styles.ShowTemp }}>

                        </View>

                        <View style={{ ...styles.mealRow, ...styles.mealDetails }}>
                            <Text style={{ color: "#fff" }}> {props.duration} Min</Text>
                            <Text style={{ color: "#fff" }}> {props.complexity.toUpperCase()}</Text>
                            <Text style={{ color: "#fff" }}> {props.afforadbility.toUpperCase()}</Text>
                        </View>
                    </ImageBackground>

                </View>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: 200,
        width: '100%',
        backgroundColor: '#ccc',
        borderRadius: 20,
        marginVertical: 10,
    },

    mealRow: {
        flexDirection: 'row',

    },

    mealHeader: {
        height: '15%',

    },

    ShowTemp: { height: '75%' },
    mealDetails: {
        paddingHorizontal: 10,
        justifyContent: 'space-between',
        backgroundColor: 'rgba(0,0,0,0.5)',
    },

    BGImage: {
        width: '100%',
        height: '100%',
    },

    title: { 
        fontSize: 18,
        width: '100%',
        color: '#fff', 
        flex: 1,
        textAlign :'center',
        alignContent:'space-around',
        backgroundColor: 'rgba(0,0,0,0.3)',
        padding: 5
    },

});

export default MealItem;