import React ,{useState} from "react";
import {View , Text ,StyleSheet,TextInput} from "react-native";
//should switch Name to password in useState

const TextScreen = () =>{
    const [Name,setName]=useState("");
    return(
        <View>
            <Text>Enter Password :</Text>
            <TextInput style = {styles.input} 
            autoCapitalize ="none" 
            autoCorrect={false} 
            value= {Name}
            onChangeText = {NewValue =>setName(NewValue)}
            />
            { Name.length < 5? <Text>Passward most be longer than 5 character</Text> : null} 
        </View>
    )
}
const styles =StyleSheet.create({
    input :{
        margin : 15 ,
        borderColor : "black" ,
        borderWidth : 1
    }
});
export default TextScreen ; 
