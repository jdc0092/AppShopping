import stylesCss from "../Css/styleSectionHome";
import React from "react";
import * as RN from "react-native";
// import { useNavigation } from "@react-navigation/native";
import Products from "../Components/AddProductIntrodution/AddProductIntrodution";
import { database } from "../Config/Config-Fb";
import { collection, onSnapshot, orderBy, query, QuerySnapshot } from "firebase/firestore";

export default function Home() {

    // const Nav = useNavigation();
    const [products, setProduts] = React.useState([]);


    React.useEffect(() => {

        const collectionRef = collection(database, 'LisProducts');
        const q = query(collectionRef, orderBy('createAdd', 'desc'));

        const unSuscribe = onSnapshot(q, QuerySnapshot => {

            setProduts(
                QuerySnapshot.docs.map(doc => ({
                    id: doc.id,
                    imgProduct: doc.data().imgProduct,
                    nameProduct: doc.data().nameProduct,
                    price: doc.data().price,
                    isSold: doc.data().isSold,
                    descriptionProduct: doc.data().descriptionProduct,
                    createAdd: doc.data().createAdd
                })
                )
            )
        })
        return unSuscribe;
    }, []);


    return (
        <RN.View style={stylesCss.contContainer}>
            {products.map(prod => <Products key={prod.id} {...prod} />)}
        </RN.View>
    )
}

