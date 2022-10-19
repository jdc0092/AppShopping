import * as RN from "react";
import React, { View, Text, Image, TouchableOpacity } from "react-native";
import stylesCss from "../../Css/styleSectionHome";
import stylesAddProducts from "../../Css/styleSectionAddProduts";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../Config/Config-Fb";
import { ButtonsOnclickMax } from "../HomeBtnProductStock/HomeBtnProductStock";
import { ButtonsOnclickMenos } from "../HomeBtnProductStock/HomeBtnProductStock";
import { ShowStock } from "../HomeBtnProductStock/HomeBtnProductStock";
import OndeleteModal from "../OndeleteModal/OndeleteModal";
import ViewDetailsModal from "../ViewDetailsModal/ViewDetailsModal";

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

    // Function para marcar como vendido los productos.
    const onEdit = () => {
        const docRef = doc(database, 'LisProducts', id)
        updateDoc(docRef, {
            isSold: true
        })
    }

    // Function para eleminar articulos destacado.
    const onDelete = () => {
        const docRef = doc(database, 'LisProducts', id)
        deleteDoc(docRef)
    }

    return (

        <View style={stylesCss.contProduts}>
            <View style={stylesCss.conOndelete}>
                <OndeleteModal
                    idProducts={id}
                    onDeleteProducts={onDelete}
                />
            </View>

            <View style={stylesCss.AddContProductsImg}>
                <Image source={imgProducts} style={stylesCss.imgProducts} />
            </View>
            <View>

                <ViewDetailsModal
                    viewDetailsProducts={()=> viewDitails}
                />
            </View>

            {/* <RN.View style={stylesAddProducts.AddContBtnMaxMen}>
                <RN.View>
                    <ButtonsOnclickMax
                        buttonMax={upIncrement}
                    />
                </RN.View>
                <RN.View>
                    <ShowStock
                        showProdStock={prodStock}
                    />
                </RN.View>
                <RN.View>
                    <ButtonsOnclickMenos
                        buttonMenos={outIncrement}
                    />
                </RN.View>
            </RN.View> */}

            <View>
                <Text style={stylesCss.productsName}>{nameProducts}</Text>
                <Text style={stylesCss.productsPrice}>${priceProducts}</Text>
                <Text style={stylesCss.productsPrice}>{isSold}</Text>
                <Text style={stylesCss.productsStock}>Disponible: {productsStock}</Text>
            </View>

            {isSold ? (
                <TouchableOpacity style={stylesCss.btnClickIsSoldGray}>
                    <Text>Click</Text>
                </TouchableOpacity>

            ) : (
                <TouchableOpacity style={stylesCss.btnClickIsSold}
                    onPress={onEdit}
                >
                    <Text>Click</Text>
                </TouchableOpacity>
            )}

            <View>
                <Text style={stylesCss.titleProductsDescrip}>Descripcion:</Text>
                <Text style={stylesCss.productsDescriptions}>{descriptionProducts}</Text>
            </View>
        </View>

    )
}
