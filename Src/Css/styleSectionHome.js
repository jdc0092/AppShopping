
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
        paddingLeft: 30,
        paddingRight: 30,
        paddingBottom: 30
    },

    ProductsImgModal:{
        width: 250,
        height: 250,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,
    },

    AddContProductsImg: {
        width: 280,
        height: 280,
        borderWidth: 1,
        borderColor: "#ccc",
        marginBottom: 15,

    },
    
    btnAdd: {
        marginRight: 15,
        color: '#4e7be3'
    },

    imgProducts: {
        width: '100%',
        height: '100%',
    },

    productsName: {
        color: '#000',
        fontWeight: 700,
        fontSize: 23,
        marginBottom: 5,
        textAlign: 'center',
        textTransform: 'uppercase'

    },
    
    TitleLisProducts: {
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 15
    },


    productsPrice: {
        color: '#912929',
        fontWeight: 800,
        fontSize: 25,
        marginBottom: 5,
        textAlign: 'center'

    },

    productsStock: {
        fontSize: 18,
        marginBottom: 15,
        textAlign: 'center'

    },

    titleProductsDescrip:{
        fontWeight:'700',
        fontSize: 20,
        marginBottom: 3,
        textAlign: 'center'
    },

    productsDescriptions:{
        textAlign: "center",
        color: '#181818'
    },

    btnClickIsSold:{
        backgroundColor: "#54AEFF",
        padding: 15,
        width: '40%',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 25
    },

    btnClickIsSoldGray:{
        backgroundColor: "#ccc",
        padding: 15,
        width: '40%',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 25
    },


    conOndelete:{
        width: "100%",
        alignItems: 'flex-end',
        marginBottom: 15,
        marginTop: 15,
    },


    onDelete: {
        fontSize: 25,
        marginRight: -10,
        color: '#ff3513'
    }

    

});

export default stylesCss;