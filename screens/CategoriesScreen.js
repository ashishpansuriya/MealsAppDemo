import React from "react";
import { FlatList, SafeAreaView } from "react-native";
import GridItem from "../components/GridItem";
import { CATEGORIES } from "../data/dummy-data.js";

const CategoiresScreen = props => {

    const renderGridItem = (itemData) => {
        return <GridItem title={itemData.item.title} color={itemData.item.color} onSelect={() => {
            props.navigation.navigate('CategoryMeals', { catId: itemData.item.id, catTitle: itemData.item.title });
        }} />;
    };


    return (
        <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
    );
};

export default CategoiresScreen;