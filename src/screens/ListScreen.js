import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const ListScreen = () => {
    const Friends = [
        {name : "friend1" , age : 20},
        {name : "friend2" , age : 21},
        {name : "friend3" , age : 22},
        {name : "friend4" , age : 23},
        {name : "friend5" , age : 24},
        {name : "friend6" , age : 25},
        {name : "friend7" , age : 26},
        {name : "friend8" , age : 27},
        {name : "friend9" , age : 28},
    ];
    return(
        <FlatList
            keyExtractor = { friend => friend.name} 
            data = {Friends}
            renderItem = {({item}) => {
            return<Text style ={styles.TextStyle}>{item.name} - Age  {item.age}</Text>
            }}
        />
    );
};
const styles = StyleSheet.create({
    TextStyle : {
        marginVertical : 50 
    }
});

export default ListScreen;
