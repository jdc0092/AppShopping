
import { StyleSheet } from 'react-native';
const stylesCss = StyleSheet.create({

    contContainer: {
        padding: 15,
        alignItems: 'center',
        backgroundColor: '#dfcad1',
    },

    contProduts: {
        alignItems: 'center',
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        padding: 30,
    },

    AddContProductsImg:{
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

    productsPrice: {
        color: '#858585',
        fontWeight: 500,
        fontSize: 25

    }


});

export default stylesCss;