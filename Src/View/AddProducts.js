import React, { useState } from "react";
import {Text, View, Image} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import stylesAddProducts from "../Css/styleSectionAddProduts";
import { database } from "../Config/Config-Fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"
import { InputDescriptions } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputName } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputPrice } from "../Components/AddProductsComponents/AddProductsComponents";
import { BtnPublish } from "../Components/AddProductsComponents/AddProductsComponents";
import { SelectMoneda } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputStock } from "../Components/AddProductsComponents/AddProductsComponents";
import AddBtnSourceImg from "../Components/AddBtnSourceImg/AddBtnSourceImg";
import ShowInfoProducts from "../Components/AddShowInfoProducts/AddShowInfoProducts";
// import { View } from "react-native";
// import AddInputStock from "../Components/AddInputStock/AddInputStock";


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
        selectMoneda: '',
        inSold: false,
        createAdd: new Date(),
    });
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
        <View style={stylesAddProducts.AddContContainer}>
            <View style={stylesAddProducts.AddContInfoHead}>
                <Text style={stylesAddProducts.AddProdTitle}>Add Products</Text>

                <Text style={stylesAddProducts.contAddImgProducts} onPress={() => pickImage()}>
                    {image && <Image source={{ uri: image }} style={stylesAddProducts.AddImgProducts} />}
                </Text>


                <AddBtnSourceImg
                    btnImg={pickImage}
                />
                <ShowInfoProducts
                    showNameProduct={newItem.nameProducts}
                    showPriceProducts={newItem.priceProducts}
                    moneda={newItem.selectMoneda.value}
                    showDescriptProduct={newItem.descriptionProducts}
                />
            </View>



            <InputName
                inputNameProduct={(text) => setNewItem({ ...newItem, nameProducts: text })}
            />

            <View style={stylesAddProducts.AddContPriceMoned}>
                <SelectMoneda
                    selectOptions={(moned) => setNewItem({ ...newItem, selectMoneda: moned })}
                />
            </View>
            
            <View>
                <InputPrice
                    inputPriceProduct={(textPrice) => setNewItem({ ...newItem, priceProducts: textPrice })}
                />
            </View>

            <InputStock
                upIncrementStock={(stockText) => setNewItem({ ...newItem, productsStock: stockText })}
            />

            <InputDescriptions
                descript={(textDescritp) => setNewItem({ ...newItem, descriptionProducts: textDescritp })}
            />

            <BtnPublish
                btnPublish={onSend}
            />

        </View>
    )
}
