import * as RN from "react";
import React, { View, Text, Image, TouchableOpacity } from "react-native";
import StylesCss from "../../Css/styleSectionHome";
import { deleteDoc, doc, updateDoc } from "firebase/firestore";
import { database } from "../../Config/Config-Fb";
// import { ButtonsOnclickMax } from "../HomeBtnProductStock/HomeBtnProductStock";
// import { ButtonsOnclickMenos } from "../HomeBtnProductStock/HomeBtnProductStock";
// import { ShowStock } from "../HomeBtnProductStock/HomeBtnProductStock";
import OndeleteModal from "../OndeleteModal/OndeleteModal";
import ShowModalDetails from "../ShowModalDetails/ShowModalDetails";
import { SelectCurrency } from "../AddProductsComponents/AddProductsComponents";

// import styleDescriptions from "../../Css/styleDescriptions";


export default function Products({

    id,
    imgProducts,
    productsName,
    productsPrice,
    productsStock,
    productsDescription,
    selectCurrency,
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


        <View style={StylesCss.contContainer}>
            {/* <Entypo style={StylesCss.btnAdd} name="circle-with-plus" size={50} color="black" onPress={() => navigation.navigate('AddProducts')} /> */}

            <View style={StylesCss.contProduts}>

                <View style={StylesCss.contNameTop}>
                    <View>
                        <Text style={StylesCss.productsName}>{productsName}</Text>
                    </View>

                    <OndeleteModal
                        idProducts={id}
                        onDeleteProducts={onDelete}
                    />
                </View>

                <View style={StylesCss.AddContProductsImg}>
                    <Image source={{ uri: imgProducts }} resizeMode='contain' style={StylesCss.imgProducts} />
                </View>

                <View>
                    <Text style={StylesCss.productsPrice}>{selectCurrency.value}{productsPrice}</Text>
                </View>

                <View>
                    <ShowModalDetails
                        imgProducts={imgProducts}
                        // viewDetailsProducts={() => viewDitails}
                        productsStock={productsStock}
                        productsDescription={productsDescription}
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
        </View>

    )
}

