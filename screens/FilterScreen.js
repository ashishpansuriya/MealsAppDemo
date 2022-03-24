import React, { useState, useEffect ,useCallback } from "react";
import { View, StyleSheet, Platform, Switch, Text } from "react-native";
import Colors from "../cosntants/Colors";

const FilterScreen = props => {

    const {navigation} = props;

    const [isGluentFree, setIsGluentFree] = useState(false);
    const [isLoctoseFree, setIsLoctoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const saveFilter = useCallback(() => {
        const appliedFilter = {

            glutentFree: isGluentFree,
            loctorFree: isLoctoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };

        console.log(appliedFilter);
    },[isGluentFree,isLoctoseFree,isVegan,isVegetarian]);

    useEffect(() => {
        navigation.setParams({save : saveFilter});
    },[saveFilter]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title} > Available Filters</Text>

            <FilterSwitch label='Gluten-Free' state={isGluentFree} onChange={newValue => setIsGluentFree(newValue)} />

            <FilterSwitch label='Loctose-Free' state={isLoctoseFree} onChange={newValue => setIsLoctoseFree(newValue)} />

            <FilterSwitch label='Vegan' state={isVegan} onChange={newValue => setIsVegan(newValue)} />

            <FilterSwitch label='Vegetarian' state={isVegetarian} onChange={newValue => setIsVegetarian(newValue)} />

        </View>
    );
};


const FilterSwitch = props => {

    return (
        <View style={styles.filterContainer}>
            <Text>{props.label}</Text>
            <Switch trackColor={{ true: Colors.Pink }} value={props.state} onValueChange={props.onChange} />
        </View>
    );
}
const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center'
    },

    title: {
        fontSize: 22,
        margin: 20,
        textAlign: 'center',
    },
    filterContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginVertical: 10,
        width: '90%',
    },

});

export default FilterScreen;