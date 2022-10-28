import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import StylesAddProducts from "../Css/styleSectionAddProduts";
import { database } from "../Config/Config-Fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"
import { InputDescriptions } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputName } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputPrice } from "../Components/AddProductsComponents/AddProductsComponents";
import { BtnPublish } from "../Components/AddProductsComponents/AddProductsComponents";
import { SelectMoneda } from "../Components/AddProductsComponents/AddProductsComponents";
import { InputStock } from "../Components/AddProductsComponents/AddProductsComponents";
import { AddBtnSourceImg } from "../Components/AddProductsComponents/AddProductsComponents";
import ShowInfoProducts from "../Components/AddShowInfoProducts/AddShowInfoProducts";
import moment from 'moment';


export default function AddProducts() {

    // Uso de la navegacion para volver atra.
    const nativeGoBack = useNavigation();
    // --------------------------------

    // useState para cargar las imagenes y devolverla a la database.
    const [image, setImage] = useState('IMG');
    // --------------------------------

    
    const initialState = {
        imgProducts: "IMG",
        nameProducts: "Name Products",
        priceProducts: 0,
        productsStock: 0,
        descriptionProducts: '',
        selectMoneda: '',
        inSold: false,
        createAdd: '',
    }

    // Aqui tenemos nuestro objeto useState
    const [newItem, setNewItem] = useState(initialState);
    
    // --------------------------------



    // Introdicion de informacion a la database.
    const onSend = async () => {
        await addDoc(collection(database, 'LisProducts'), newItem);

        // setNewItem(initialState)
        
        nativeGoBack.goBack();


        console.log(newItem.createAdd)
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
                ...newItem, imgProducts: result.uri, createAdd: (moment().format('DD-MM-YYYY hh:mm:ss a'))
            });

        }
    };
    // --------------------------------


    // Para refrescar el home de la app.
    const wait = (timeout) => {
        return new Promise(resolve => setTimeout(resolve, timeout));
    }

    const [refreshing, setRefreshing] = React.useState(false);

    const onRefresh = React.useCallback(() => {
        setRefreshing(true);
        wait(2000).then(() => setRefreshing(false));

    }, []);
    // -------------------------------------


    return (
        <View style={StylesAddProducts.AddContContainer}>
            <SafeAreaView>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <View style={StylesAddProducts.AddContInfoHead}>
                        <Text style={StylesAddProducts.AddProdTitle}>Add Products</Text>

                        <View style={StylesAddProducts.contAddImgProducts}>
                            {image && <Image source={{ uri: image }} style={StylesAddProducts.AddImgProducts} />}
                            {/* <Image source={{ uri: image }} style={StylesAddProducts.AddImgProducts} /> */}
                        </View>

                        <AddBtnSourceImg
                            btnImg={pickImage}
                        />

                        <ShowInfoProducts
                            showNameProduct={newItem.nameProducts}
                            showPriceProducts={newItem.priceProducts}
                            moneda={newItem.selectMoneda.value}
                            itemsStock={newItem.productsStock}
                            showDescriptProduct={newItem.descriptionProducts}
                        />
                    </View>



                    <View>
                        <InputName
                            inputNameProduct={(text) => setNewItem({ ...newItem, nameProducts: text })}
                        />
                    </View>

                    <View style={StylesAddProducts.AddContPriceMoned}>
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
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
