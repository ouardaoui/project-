import React from "react";
import { View , StyleSheet , Text } from "react-native";
import ImageDetail from "../Componenets/ImageDetail";

const ImageScreen = ()=>{   
    return(
        <View>
            <ImageDetail 
            score = {6}
            title ="forest" 
            imagesource ={require("../../assets/forest.jpg")} 
            />
            <ImageDetail
            score = {9} 
            title = "beach" 
            imagesource ={require("../../assets/beach.jpg")} 
            />
            <ImageDetail
            score = {8} 
            title = "mountain" 
            imagesource ={require("../../assets/mountain.jpg")}
            />
        </View>
    );
};
const Styles =StyleSheet.create({});
export default ImageScreen ;