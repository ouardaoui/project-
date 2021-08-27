import React from "react";
import {View ,Button ,Text,StyleSheet} from "react-native";


const BoxScreen = () =>{
    return(
        <View style ={styles.parentstyle}>
            <View style ={styles.viewOnestyle}/>
            <View style ={styles.viewTwostyle}/>
            <View style ={styles.viewThreestyle}/>
        </View>
    )
}
const styles =StyleSheet.create({
    parentstyle : {
        height : 200,
        borderWidth :3,
        flexDirection :"row",
        justifyContent : "space-between"
    },
    viewOnestyle :{
        height : 50, 
        width : 50,
        backgroundColor :"mediumseagreen",
    },
    viewTwostyle :{
        height : 50, 
        width : 50,
        backgroundColor : "lightgray",
        top : 50
    },
    viewThreestyle :{
        height : 50, 
        width : 50,
        backgroundColor :"dodgerblue",
    }
});
export default BoxScreen ;