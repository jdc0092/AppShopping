import React, { useState } from "react";
import * as RN from "react-native";
import * as ImagePicker from 'expo-image-picker';
import stylesAddProducts from "../Css/styleSectionAddProduts";
import styleInputDescript from "../Css/styleInputDesc";
import { database } from "../Config/Config-Fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"
import { ButtonsOnclickMax } from "../Components/AddBtnProductStock/AddBtnProductStock";
import { ButtonsOnclickMenos } from "../Components/AddBtnProductStock/AddBtnProductStock";
import { InputDescriptions } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import { InputName } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import { InputPrice } from "../Components/AddInputsPrice&Name&Descript/AddInputsPrice&Name&Descript";
import AddBtnSourceImg from "../Components/AddBtnSourceImg/AddBtnSourceImg";
import BtnPublish from "../Components/AddBtnPublish/AddBtnPublish";


export default function AddProducts() {

    // Uso de la navegacion para volver atra.
    const nativeGoBack = useNavigation();

    // useState para cargar las imagenes y devolverla a la database.
    const [image, setImage] = useState('IMG');

    const [prodStock, setProdStock] = useState(0)

    // Aqui tenemos nuestro objeto useState
    const [newItem, setNewItem] = useState({
        imgProduct: "IMG",
        productsStok: 0,
        nameProduct: "Name Products",
        price: 0,
        descriptionProduct: '',
        inSold: false,
        createAdd: new Date(),
    });


    // Introdicion de informacion a la database.
    const onSend = async () => {
        await addDoc(collection(database, 'LisProducts'), newItem);
        nativeGoBack.goBack()
    }




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
                ...newItem, imgProduct: result.uri,
            })
        }
    };



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
                        <ButtonsOnclickMax />
                    </RN.View>
                    <RN.View>
                        <ButtonsOnclickMenos />
                    </RN.View>
                </RN.View>

                <RN.Text style={stylesAddProducts.AddNameProducts}>{newItem.nameProduct}</RN.Text>
                <RN.Text style={stylesAddProducts.AddPriceProducts}>${newItem.price}</RN.Text>
                <RN.Text style={styleInputDescript.desCription}>{newItem.descriptionProduct}</RN.Text>
                {/* <RN.Text>${newItem.createAdd}</RN.Text> */}
            </RN.View>

            <InputName
                inputNameProduct={(text) => setNewItem({ ...newItem, nameProduct: text })}
            />

            <InputPrice
                inputPriceProduct={(textPrice) => setNewItem({ ...newItem, price: textPrice })}
            />

            <InputDescriptions
                descript={(textDescritp) => setNewItem({ ...newItem, descriptionProduct: textDescritp })}
            />

            <BtnPublish
                btnPublish={onSend}
            />

        </RN.View>
    )
}
