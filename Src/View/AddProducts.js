import React, { useState } from "react";
import { Text, View, Image, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import * as ImagePicker from 'expo-image-picker';
import StylesAddProducts from "../Css/styleSectionAddProduts";
import { database } from "../Config/Config-Fb";
import { collection, addDoc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native"
import AddShowProductsInfo from "../Components/AddShowProductsInfo/AddShowProductsInfo";
import moment from 'moment';
import {
    // ShowItems,
    ItemsMax,
    ItemsLess,
    InputName,
    InputPrice,
    BtnPublish,
    SelectCurrency,
    InputDescriptions,
    AddBtnSourceImg,
    InputPriceModal,

} from "../Components/AddProductsComponents/AddProductsComponents";
import OptionsProductModal from "../Components/AddOptionProductsModal/AddOpionsProductsModal";


export default function AddProducts() {

    // Uso de la navegacion para volver atra.
    const nativeGoBack = useNavigation();
    // --------------------------------




    // Auto incrementar las cantidad de items.
    const [itemsStock, setItemsStock] = useState(0);

    const itemsMaxSend = () => {
        setItemsStock(itemsStock + 1)
    }
    const ItemsLessSend = () => {
        if (itemsStock >= 1) {
            setItemsStock(itemsStock - 1)
        }
    }
    // --------------------------------


    // useState para cargar las imagenes y devolverla a la database.
    const [image, setImage] = useState('IMG');
    // --------------------------------


    const initialState = {
        imgProducts: "IMG",
        productsName: "Name Products",
        productsPrice: '',
        productsStock: 0,
        productsDescription: '',
        selectCurrency: '',
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
                ...newItem, imgProducts: result.uri,
                createAdd: (moment().format('DD-MM-YYYY hh:mm:ss a')),
                productsStock: itemsStock
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

                        <AddShowProductsInfo
                            showNameProduct={newItem.productsName}
                            showProductsPrice={newItem.productsPrice}
                            currency={newItem.selectCurrency.value}
                            itemsStock={itemsStock}
                            showProductsDescription={newItem.productsDescription}
                        />
                    </View>


                    <View style={StylesAddProducts.OptionsModal}>
                        <OptionsProductModal
                            valuePrice={newItem.productsPrice}
                            priceModal={(textPrice) => setNewItem({ ...newItem, productsPrice: textPrice })}
                        />
                        
                    </View>

                    <View>
                        <InputName
                            inputNameProduct={(text) => setNewItem({ ...newItem, productsName: text })}
                        />
                    </View>

                    <View>
                        <InputPrice
                            valuePriceModal={newItem.productsPrice}
                            inputPriceProduct={(textPrice) => setNewItem({ ...newItem, productsPrice: textPrice })}
                        />
                    </View>

                    <View style={StylesAddProducts.AddContPriceMoned}>
                        <SelectCurrency
                            selectOptions={(moned) => setNewItem({ ...newItem, selectCurrency: moned })}
                        />
                    </View>
                    <View>
                        <View>
                            <ItemsMax
                                bntItemsMax={itemsMaxSend}
                            />
                        </View>
                        <View>
                            <ItemsLess
                                bntItemsLess={ItemsLessSend}
                            />
                        </View>
                    </View>

                    {/* <InputStock
                        upIncrementStock={(stockText) => setNewItem({ ...newItem, productsStock: stockText })}
                    /> */}

                    <InputDescriptions
                        descript={(textDescritp) => setNewItem({ ...newItem, productsDescription: textDescritp })}
                    />

                    <BtnPublish
                        btnPublish={onSend}
                    />
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
