import React, { useState } from "react";
import * as RN from "react-native";
import * as ImagePicker from 'expo-image-picker';
import stylesAddProducts from "../Css/styleSectionAddProduts";
import { database } from "../Config/Config-Fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"
import { ButtonsOnclickMax } from "../Components/AddBtnProductStock/AddBtnProductStock";
import { ButtonsOnclickMenos } from "../Components/AddBtnProductStock/AddBtnProductStock";
import { InputDescriptions } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import { InputName } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import { InputPrice } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import { ShowStock } from "../Components/AddBtnProductStock/AddBtnProductStock";
import AddBtnSourceImg from "../Components/AddBtnSourceImg/AddBtnSourceImg";
import BtnPublish from "../Components/AddBtnPublish/AddBtnPublish";
import ShowInfoProducts from "../Components/AddShowInfoProducts/AddShowInfoProducts";


export default function AddProducts() {

    // Uso de la navegacion para volver atra.
    const nativeGoBack = useNavigation();
    // --------------------------------

    // useState para cargar las imagenes y devolverla a la database.
    const [image, setImage] = useState('IMG');
    // --------------------------------


    // Aqui tenemos nuestro objeto useState
    const [newItem, setNewItem] = useState({
        imgProducts: "IMG",
        nameProducts: "Name Products",
        priceProducts: 0,
        productsStock: 0,
        descriptionProducts: '',
        inSold: false,
        createAdd: new Date(),
    });
    // --------------------------------


    // Aumento de los estock en los articulos
    const [prodStock, setProdStock] = useState(0)

    const upIncrement = () => {
        setProdStock(prodStock + 1)

        setNewItem({
            ...newItem, productsStock: prodStock,

        })
    }

    const outIncrement = () => {
        setProdStock(prodStock - 1)

        setNewItem({
            ...newItem, productsStock: prodStock,

        })
    }
    // --------------------------------


    // Introdicion de informacion a la database.
    const onSend = async () => {
        await addDoc(collection(database, 'LisProducts'), newItem);
        nativeGoBack.goBack()
    }
    // --------------------------------


    // Fucntions para agragar imagen de la galerria
    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            setImage(result.uri);

            setNewItem({
                ...newItem, imgProducts: result.uri,
            })
        }
    };
    // --------------------------------


    return (
        <RN.View style={stylesAddProducts.AddContContainer}>
            <RN.View style={stylesAddProducts.AddContInfoHead}>
                <RN.Text style={stylesAddProducts.AddProdTitle}>Add Products</RN.Text>

                <RN.Text style={stylesAddProducts.contAddImgProducts} onPress={() => pickImage()}>
                    {image && <RN.Image source={{ uri: image }} style={stylesAddProducts.AddImgProducts} />}
                </RN.Text>

                <AddBtnSourceImg
                    btnImg={pickImage}
                />

                <RN.View style={stylesAddProducts.AddContBtnMaxMen}>
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
                </RN.View>

                <ShowInfoProducts
                    showNameProduct={newItem.nameProducts}
                    showPriceProducts={newItem.priceProducts}
                    showDescriptProduct={newItem.descriptionProducts}
                />
            </RN.View>

            <InputName
                inputNameProduct={(text) => setNewItem({ ...newItem, nameProducts: text })}
            />

            <InputPrice
                inputPriceProduct={(textPrice) => setNewItem({ ...newItem, priceProducts: textPrice })}
            />

            <InputDescriptions
                descript={(textDescritp) => setNewItem({ ...newItem, descriptionProducts: textDescritp })}
            />

            <BtnPublish
                btnPublish={onSend}
            />

        </RN.View>
    )
}
