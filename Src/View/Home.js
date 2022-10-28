import React from "react";
import StylesCss from "../Css/styleSectionHome";
import { View, Text, SafeAreaView, ScrollView, RefreshControl } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Products from "../Components/HomeProductIntrodution/HomeProductIntrodution";
import { database } from "../Config/Config-Fb";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { Entypo } from '@expo/vector-icons';




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




    React.useEffect(() => {

        const collectionRef = collection(database, 'LisProducts');
        const q = query(collectionRef, orderBy('createAdd', 'desc'));

        const unSuscribe = onSnapshot(q, QuerySnapshot => {
            setlistProducts(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    imgProducts: doc.data().imgProducts,
                    nameProducts: doc.data().nameProducts,
                    priceProducts: doc.data().priceProducts,
                    productsStock: doc.data().productsStock,
                    selectMoneda: doc.data().selectMoneda,
                    isSold: doc.data().isSold,
                    descriptionProducts: doc.data().descriptionProducts,
                    createAdd: doc.data().createAdd
                })
                )
            )
        })
        return unSuscribe;
    }, []);



    // Agregando botton en la parte superior derecha para agregar product
    // React.useLayoutEffect(() => {
    //     navigation.setOptions({
    //         headerRight: () => <AntDesign style={StylesCss.btnAdd} name="plussquare" size={33} color="black" onPress={() => navigation.navigate('AddProducts')} />
    //     })
    // }, [])
    // --------------------------------

    return (
        <View>
            <SafeAreaView>
                <ScrollView
                    refreshControl={
                        <RefreshControl
                            refreshing={refreshing}
                            onRefresh={onRefresh}
                        />
                    }
                >
                    <Text style={StylesCss.TitleLisProducts}>Listado de productos</Text>
                    {listProducts.map(prod => <Products key={prod.id} {...prod} />)}
                </ScrollView>
            </SafeAreaView>
        </View>
    )
}
