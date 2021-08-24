import React , {useState}  from "react";
import {View , Button, Text ,StyleSheet} from "react-native";

const CounterScreen = () => {
    const [Counter,setCounter]=useState(0)
    return(
    <View>
        <Button 
            title ="increase" 
            onPress ={() =>{
                setCounter(Counter+1);
            }}
        />
        <Button 
            title ="decrease" 
            onPress ={() =>{
                setCounter(Counter-1);
            }}
        />
        <Text>Courrent Count : {Counter}</Text>
    </View>
    );
}
 const styles = StyleSheet.create({});

 export default CounterScreen ;