import stylesAddProducts from "../../Css/styleSectionAddProduts";
import styleInputDescript from "../../Css/styleInputDesc";
import React, {Text, View} from "react-native";


function ShowInfoProducts(props) {
    return (
        <View>
            <Text style={stylesAddProducts.AddNameProducts}>{props.showNameProduct}</Text>
            <Text style={stylesAddProducts.AddPriceProducts}>${props.showPriceProducts}</Text>
            <Text style={styleInputDescript.desCription}>{props.showDescriptProduct}</Text>
        </View>
    )

}

export default ShowInfoProducts;