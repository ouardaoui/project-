import React from "react";
import { View , StyleSheet , Text ,Image } from "react-native";


const ImageDetail = ({imagesource , title ,score}) =>{   
    return(
        <View>
            <Image
            style={Styles.imagesize}
            source ={imagesource}/>
            <Text>{title}</Text>
            <Text>image score -{score}</Text>
        </View>
    );    
};
const Styles =StyleSheet.create({
    imagesize :{
        width :100,
        height : 100
    }
});
export default ImageDetail ;   
