import * as RN from "react";
import React, { View, Text, Image } from "react-native";
import stylesCss from "../../Css/styleSectionHome";


export default function Products({

    id,
    imgProduct,
    nameProduct,
    productsStock,
    descriptionProduct,
    price,
    isSold,
    createAdd

}) {

    return (

        <View style={stylesCss.contProduts}>
            {/* <Text style={stylesCss.productsImg}>{id}</Text> */}
            <View style={stylesCss.AddContProductsImg}>
                <Image source={imgProduct} style={stylesCss.imgProducts} />
            </View>
            <Text style={stylesCss.productsName}>{nameProduct}</Text>
            <Text style={stylesCss.productsPrice}>${price}</Text>
            <Text style={stylesCss.productsPrice}>{isSold}</Text>
            <Text style={stylesCss.productsPrice}>{descriptionProduct}</Text>
            <Text style={stylesCss.productsPrice}>Disponible: {productsStock}</Text>
        </View>

    )
}

