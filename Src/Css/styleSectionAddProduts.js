
import { StyleSheet } from 'react-native';
const stylesAddProducts = StyleSheet.create({

    AddContContainer: {
        padding: 15,
        backgroundColor: "#fff" 
    },

    AddContProduts: {
        flexDirection: 'column',
        alignItems: 'center',
    },

    AddContInfoHead: {
        marginBottom: 15,
        alignItems: 'center'
    },


    AddProdTitle: {
        fontSize: 30,
        marginBottom: 15,
        fontWeight: 700
    },



    contAddImgProducts: {
        alignItems: 'center'
    },
    
    AddImgProducts: {
        width: 280,
        height: 280,
        borderWidth: 1,
        borderColor: "#ccc",
    },

    AddContBtnMaxMen:{
        flexWrap: 'wrap',
        flexDirection: 'column'
    },

    AddNameProducts: {
        color: '#000',
        fontSize: 20,
        marginBottom: 10,
        textTransform: 'uppercase',
        textAlign: 'center',
    },

    AddPriceProducts: {
        color: '#ff4040',
        fontWeight: 500,
        fontSize: 25,
        textAlign: 'center'
    },



    AddTextInput: {
        borderRadius: 5,
        borderWidth: 2,
        borderColor: "#ccc",
        padding: 10,
        marginBottom: 15
    },

    inputStock:{
        width: 60,
        textAlign: 'center'
    },


    AddBtnMenuText: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 20,
    },


    AddImgContBtn: {
        flex: 1,
        width: 280,
    },



    AddImgBtn: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#CD6565',
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#CD6565',
        marginBottom: 15,

    },

    AddPublishContBtn: {
        flex: 1,
        width: '100%',
    },



    AddPublishBtn: {
        paddingTop: 10,
        paddingBottom: 10,
        backgroundColor: '#607e15',
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1
    },

});

export default stylesAddProducts;