import StylesAddProducts from "../../Css/styleSectionAddProduts";
import StyleInputDescript from "../../Css/styleInputDesc";
import React, { Text, View } from "react-native";

const ShowInfoProducts = (props) => {
    return (
        <View>
            <Text style={StylesAddProducts.AddNameProducts}>{props.showNameProduct}</Text>
            <Text style={StylesAddProducts.AddPriceProducts}>{props.moneda}{props.showPriceProducts}</Text>
            <View style={StyleInputDescript.desCription}>
                <Text>{props.showDescriptProduct}</Text>
            </View>
        </View>
    )

}

export default ShowInfoProducts;