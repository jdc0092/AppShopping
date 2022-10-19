import stylesCss from "../Css/styleSectionHome";
import React from "react";
import * as RN from "react-native";
import { useNavigation } from "@react-navigation/native";
import Products from "../Components/HomeProductIntrodution/HomeProductIntrodution";
import { database } from "../Config/Config-Fb";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";
import { AntDesign } from '@expo/vector-icons';

export default function Home() {

    const navigation = useNavigation();

    const [products, setProduts] = React.useState([]);

    
    
    React.useEffect(() => {
        
        const collectionRef = collection(database, 'LisProducts');
        const q = query(collectionRef, orderBy('createAdd', 'desc'));
        
        const unSuscribe = onSnapshot(q, QuerySnapshot => {
            setProduts(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    imgProducts: doc.data().imgProducts,
                    nameProducts: doc.data().nameProducts,
                    priceProducts: doc.data().priceProducts,
                    productsStock: doc.data().productsStock,
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
        React.useLayoutEffect(() => {
            navigation.setOptions({
                headerRight: () => <AntDesign style={stylesCss.btnAdd} name="plussquare" size={33} color="black" onPress={() => navigation.navigate('AddProducts')} />
            })
        }, [])
        // --------------------------------
        
        return (
        <RN.View style={stylesCss.contContainer}>
            <RN.Text style={stylesCss.TitleLisProducts}>Listado de productos</RN.Text>
            {products.map(prod => <Products key={prod.id} {...prod} />)}
        </RN.View>
    )
}
