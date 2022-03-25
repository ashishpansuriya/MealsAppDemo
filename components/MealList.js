import React from "react";
import { View, StyleSheet, Platform,FlatList } from "react-native";
import MealItem from "./MealItem";

const MealList = props => {
    const CategoiresMealScreen = itemData => {
        return (
            <MealItem
                title={itemData.item.title}
                duration={itemData.item.duration}
                complexity={itemData.item.complexity}
                afforadbility={itemData.item.afforadbility}
                imageUrl={itemData.item.imageUrl}
                onSelectMeal={() => {
                    console.log(itemData.item.id);
                    props.navigation.navigate('MealsDetail', { mealId: itemData.item.id , mealTitle : itemData.item.title });
                }} />
        );
    
    };

    return (
        <View style={styles.list}>
            <FlatList data={props.listData}
                keyExtractor={(item, index) => item.id}
                renderItem={CategoiresMealScreen}
                style={{ width: '95%', margin: 10 }} />
        </View>
    );
};

const styles = StyleSheet.create({
    list: {
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

export default MealList;