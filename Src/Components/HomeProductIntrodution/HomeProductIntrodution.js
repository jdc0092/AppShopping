import * as RN from "react";
import React, { View, Text, Image, TouchableOpacity } from "react-native";
import StylesCss from "../../Css/styleSectionHome";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../Config/Config-Fb";
// import { ButtonsOnclickMax } from "../HomeBtnProductStock/HomeBtnProductStock";
// import { ButtonsOnclickMenos } from "../HomeBtnProductStock/HomeBtnProductStock";
// import { ShowStock } from "../HomeBtnProductStock/HomeBtnProductStock";
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
    selectMoneda,
    isSold,
    createAdd

}) {

    // console.log({uri: imgProducts})

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

        <View style={StylesCss.contProduts}>
            <View style={StylesCss.conOndelete}>
                <OndeleteModal
                    idProducts={id}
                    onDeleteProducts={onDelete}
                />
            </View>

            <View>
                <Text style={StylesCss.productsName}>{nameProducts}</Text>
            </View>

            <View style={StylesCss.AddContProductsImg}>
                {/* <View style={StylesCss.AddContProductsInfoImg}> */}
                    <Image source={{ uri: imgProducts }} resizeMode='contain' style={StylesCss.imgProducts} />
                {/* </View> */}
            </View>

            <View>
                <ViewDetailsModal
                    imgProducts={imgProducts}
                    viewDetailsProducts={() => viewDitails}
                    productsStock={productsStock}
                    descriptionProducts={descriptionProducts}
                    createAdd={createAdd}
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
                <Text style={StylesCss.productsPrice}>{selectMoneda.value}{priceProducts}</Text>
                {/* <Text style={StylesCss.productsPrice}>{isSold}</Text> */}

            </View>

            {isSold ? (
                <TouchableOpacity style={StylesCss.btnClickIsSoldGray}>
                    <Text>Click</Text>
                </TouchableOpacity>

            ) : (
                <TouchableOpacity style={StylesCss.btnClickIsSold}
                    onPress={onEdit}
                >
                    <Text>Click</Text>
                </TouchableOpacity>
            )}


        </View>

    )
}

