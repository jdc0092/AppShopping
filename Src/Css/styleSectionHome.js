
import { StyleSheet } from 'react-native';

const StylesCss = StyleSheet.create({

    contContainer: {
        padding: 15,
        // alignItems: 'center',
        backgroundColor: '#e5e5e5',
        // height: '100%'
    },

    contProduts: {
        marginBottom: 15,
        width: '100%',
        backgroundColor: '#fff',
        padding: 15
    },



    AddContProductsImg: {
        height: 280,
        borderColor: "#ccc",
        marginBottom: 15,

    },

    AddContProductsInfoImg: {
        // width: '100%',
        // alignItems: 'center',
    },



    btnAdd: {
        textAlign: 'center',
        color: '#4e7be3'
    },

    productsName: {
        color: '#0062bd',
        fontWeight: '700',
        fontSize: 18,
        textTransform: 'capitalize',
        width: 200,

    },

    TitleLisProducts: {
        fontSize: 28,
        textAlign: 'center',
        fontWeight: '700',
        marginBottom: 15,
        marginTop: 15
    },


    imgProducts: {
        width: '100%',
        height: '100%',
    },

    btnClickIsSold: {
        backgroundColor: "#54AEFF",
        padding: 15,
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 25
    },

    productsPrice: {
        color: '#4C555E',
        fontWeight: '400',
        fontSize: 25,
        marginBottom: 5,
      
      },

    btnClickIsSoldGray: {
        backgroundColor: "#ccc",
        padding: 15,
        width: '100%',
        textAlign: 'center',
        color: '#fff',
        marginBottom: 25
    },

    contNameTop: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15
    },

    conOndelete: {
        width: "100%",
    },


    onDelete: {
        fontSize: 25,
        color: '#3c3c3c'
    }



});

export default StylesCss;