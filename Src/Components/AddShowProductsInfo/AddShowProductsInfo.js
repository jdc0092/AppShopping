import StylesAddProducts from "../../Css/styleSectionAddProduts";
// import StyleInputDescript from "../../Css/styleInputDesc";
import React, { Text, View, StyleSheet } from "react-native";

const AddShowProductsInfo = (props) => {

    const valOferts = props.showPriceOfert;
    const divisas = props.showPriceOfert

    return (
        <View>
            <Text style={StylesAddProducts.AddNameProducts}>{props.showNameProduct}</Text>
            {/* <Text style={StylesAddProducts.AddNameProducts}>{props.timeOup}</Text> */}
            <Text style={valOferts ? StylesAddProducts.linerThrough : StylesAddProducts.AddProductsPrice}>
                {props.currency}{props.showProductsPrice}
            </Text>
            
            <Text style={StylesAddProducts.AddProductsPrice}>
                <Text style={divisas ? StylesAddProducts.displaiNone : StylesAddProducts.displaiBlock}>
                    {props.currency}
                </Text>
                {props.showPriceOfert}
            </Text>
            <Text style={StylesAddProducts.AddNameProducts}>Items: {props.itemsShowStock}</Text>
            <View>
                <Text style={StylesAddProducts.DesCription}>Descriccion:</Text>
                <Text>{props.showProductsDescription}</Text>
            </View>
        </View>
    )

}

export default AddShowProductsInfo;


// const styleOfert = StyleSheet.create({

//     linerThrough: {
//         textDecorationLine: "line-through",
//         color: "#ccc",
//         fontSize: 18
//     },

// });