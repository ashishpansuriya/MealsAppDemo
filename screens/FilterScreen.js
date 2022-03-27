import React, { useState, useEffect ,useCallback } from "react";
import { View, StyleSheet, Switch, Text } from "react-native";
import Colors from "../cosntants/Colors";
import { useDispatch } from "react-redux";
import { setFilters } from "../store/actions/meals";

const FilterScreen = props => {

    const {navigation} = props;

    const [isGlutenFree, setIsGlutenFree] = useState(false);
    const [isLactoseFree, setIsLactoseFree] = useState(false);
    const [isVegan, setIsVegan] = useState(false);
    const [isVegetarian, setIsVegetarian] = useState(false);

    const dispatch = useDispatch();

    const saveFilter = useCallback(() => {
        const appliedFilter = {
            glutenFree: isGlutenFree,
            loctoseFree: isLactoseFree,
            vegan: isVegan,
            vegetarian: isVegetarian
        };
        console.log(appliedFilter);
        dispatch(setFilters(appliedFilter));
    }, [isGlutenFree, isLactoseFree, isVegan, isVegetarian, dispatch]);

    useEffect(() => {
        navigation.setParams({save : saveFilter});
    },[saveFilter]);

    return (
        <View style={styles.screen}>
            <Text style={styles.title} > Available Filters</Text>

            <FilterSwitch label='Gluten-Free' state={isGlutenFree} onChange={newValue => setIsGlutenFree(newValue)} />

            <FilterSwitch label='Lactose-Free' state={isLactoseFree} onChange={newValue => setIsLactoseFree(newValue)} />

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