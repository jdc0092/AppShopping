import StylesAddProducts from "../../Css/styleSectionAddProduts";
// import StyleInputDescript from "../../Css/styleInputDesc";
import React, { Text, View } from "react-native";

const AddShowProductsInfo = (props) => {
    return (
        <View>
            <Text style={StylesAddProducts.AddNameProducts}>{props.showNameProduct}</Text>
            <Text style={StylesAddProducts.AddProductsPrice}>{props.currency}{props.showProductsPrice}</Text>
            <Text style={StylesAddProducts.AddNameProducts}>Items: {props.itemsStock}</Text>
            <View>
                <Text style={StylesAddProducts.DesCription}>Descriccion:</Text>
                <Text>{props.showProductsDescription}</Text>
            </View>
        </View>
    )

}

export default AddShowProductsInfo;