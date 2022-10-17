
import { StyleSheet } from 'react-native';
const stylesCss = StyleSheet.create({

    contContainer: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#e5e5e5',
    },

    contProduts: {
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30,
    },

    AddContProductsImg: {
        width: 280,
        height: 280,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
        marginRight: 15,
        marginLeft: 15

    },

    imgProducts: {
        width: '100%',
        height: '100%',
    },

    productsName: {
        color: '#000',
        fontWeight: 700,
        fontSize: 23,
        marginBottom: 10,
        textAlign: 'center',
        textTransform: 'uppercase'

    },
    
    TitleLisProducts: {
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 15
    },


    productsPrice: {
        color: '#ff0e0e',
        fontWeight: 800,
        fontSize: 25,
        marginBottom: 5,
        textAlign: 'center'

    },

    productsStock: {
        fontSize: 18,
        marginBottom: 15
    },

    titleProductsDescrip:{
        fontWeight:'700',
        fontSize: 15,
        marginBottom: 5
    },

    productsDescriptions:{
        textAlign: "center",
    }
    

});

export default stylesCss;