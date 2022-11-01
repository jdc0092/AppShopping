import React, { useEffect, useLayoutEffect } from "react";
import StylesCss from "../Css/styleSectionHome";
import { View, Text, SafeAreaView, ScrollView, RefreshControl, TextInput } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Products from "../Components/HomeProductIntrodution/HomeProductIntrodution";
import { database } from "../Config/Config-Fb";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';




export default function Home() {

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

    const navigation = useNavigation();

    const [listProducts, setlistProducts] = React.useState([]);


    useEffect(() => {

        const collectionRef = collection(database, 'LisProducts');
        const q = query(collectionRef, orderBy('createAdd', 'desc'));

        const unSuscribe = onSnapshot(q, QuerySnapshot => {
            setlistProducts(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    imgProducts: doc.data().imgProducts,
                    productsName: doc.data().productsName,
                    productsPrice: doc.data().productsPrice,
                    productsStock: doc.data().productsStock,
                    selectCurrency: doc.data().selectCurrency,
                    isSold: doc.data().isSold,
                    productsDescription: doc.data().productsDescription,
                    createAdd: doc.data().createAdd
                })
                )
            )
        })
        return unSuscribe;
    }, []);

    // console.log(listProducts)

    // Agregando botton en la parte superior derecha para agregar product
    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () =>
                <AntDesign
                    style={StylesCss.btnAdd}
                    name="plussquare"
                    size={33}
                    color="black"
                    onPress={() => navigation.navigate('AddProducts')}
                />
        })
    }, []);
    // --------------------------------



    return (
        <View>
            {/* <TextInput placeholder="Search"
                onChangeText={(events) => searchEvents(events)}
            /> */}
            <SafeAreaView>
                <ScrollView refreshControl={
                    <RefreshControl
                        refreshing={refreshing}
                        onRefresh={onRefresh}
                    />
                }>

                    <Text style={StylesCss.TitleLisProducts}>Listado de productos</Text>
                    {listProducts.map(prod => <Products key={prod.id} {...prod} />)}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
