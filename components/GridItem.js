import React from "react";
import { View, StyleSheet, Platform, Text, TouchableOpacity, TouchableNativeFeedback, SafeAreaView } from "react-native";

const GridItem = props => {

    let TouchableItem = TouchableOpacity;

    if (Platform.OS == 'android' && Platform.Version >= 21) {
        TouchableItem = TouchableNativeFeedback
    }

    return (
        <SafeAreaView style={styles.screen}>
            <View  style={{ flex: 1 }}>
                <TouchableItem style={{ flex: 1 }} onPress={props.onSelect}>

                    <View style={{ ...styles.ItmeContainer, ...{ backgroundColor: props.color, shadowColor: props.color } }} >
                        <Text style={{ fontSize: 16, textAlign: "right", color: 'white' }}>{props.title}</Text>
                    </View>

                </TouchableItem>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    screen: {
        height: 150,
        flex: 1,
        margin: 10,
        borderRadius: 10,
        shadowOpacity: 0.26,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 5,
        overflow: Platform.OS === 'android' && Platform.Version === 21 ? 'hidden' : 'visible'

    },
    ItmeContainer: {
        flex: 1,
        borderRadius: 10,
        padding: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    }

});

export default GridItem;