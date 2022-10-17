import * as RN from "react";
import React, { View, Text, Image } from "react-native";
import stylesCss from "../../Css/styleSectionHome";
// import styleDescriptions from "../../Css/styleDescriptions";


export default function Products({

    id,
    imgProducts,
    nameProducts,
    priceProducts,
    productsStock,
    descriptionProducts,
    isSold,
    createAdd

}) {

    return (

        <View style={stylesCss.contProduts}>
            {/* <Text style={stylesCss.productsImg}>{id}</Text> */}
            <View style={stylesCss.AddContProductsImg}>
                <Image source={imgProducts} style={stylesCss.imgProducts} />
            </View>
            <View>
                <Text style={stylesCss.productsName}>{nameProducts}</Text>
                <Text style={stylesCss.productsPrice}>${priceProducts}</Text>
                <Text style={stylesCss.productsPrice}>{isSold}</Text>
                <Text style={stylesCss.productsStock}>Disponible: {productsStock}</Text>
            </View>
            <View>
                <Text style={stylesCss.titleProductsDescrip}>Descriccion</Text>
                <Text style={stylesCss.productsDescriptions}>{descriptionProducts}</Text>
            </View>
        </View>

    )
}

