import React , {useReducer}  from "react";
import {View , Button, Text ,StyleSheet} from "react-native";

const reducer = (state,action) => {
    //state = {Counter:num}
    //action = {type = increace || decreace ,payload = +1 || -1}
    switch(action.type){
        case "increase" : 
            return {...state, Counter : state.Counter+action.payload };
        case "decrease" :
            return {...state, Counter : state.Counter-action.payload };
        default :
            return state ;
    }

}

const CounterScreen = () => {
    const [state,dispatch] = useReducer(reducer,{Counter : 0});
    const Counter =state.Counter
    return (
    <View>
        <Button 
            title ="increase" 
            onPress ={() =>{dispatch({type : "increase",payload :1 })}}
        />  

        <Button 
            title ="decrease" 
            onPress ={() =>{dispatch({type  :"decrease",payload : 1})}}
        />
        <Text>Courrent Count : {Counter}</Text>
    </View>
    );
}
 const styles = StyleSheet.create({});

 export default CounterScreen ;