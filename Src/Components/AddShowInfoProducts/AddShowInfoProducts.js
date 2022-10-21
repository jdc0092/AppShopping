import stylesAddProducts from "../../Css/styleSectionAddProduts";
import styleInputDescript from "../../Css/styleInputDesc";
import React, {Text, View, TextInput} from "react-native";


function ShowInfoProducts(props) {
    return (
        <View>
            <Text style={stylesAddProducts.AddNameProducts}>{props.showNameProduct}</Text>
            <Text style={stylesAddProducts.AddPriceProducts}>{props.moneda}{props.showPriceProducts}</Text>
            <Text style={styleInputDescript.desCription}>{props.showDescriptProduct}</Text>
        </View>
    )

}

export default ShowInfoProducts;