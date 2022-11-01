
import { StyleSheet } from 'react-native';

const StylesAddProducts = StyleSheet.create({

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
        fontSize: 28,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: '700'
    },

    AddContPriceMoned:{
        // flexDirection: 'row',
        // zIndex: 9,
    },
    
    OptionsModal:{
        alignItems: 'flex-end',
        marginBottom: 15,
    },

    contAddImgProducts: {
        borderColor: "#ccc",
        alignItems: 'center',
        borderWidth: 1,
    },
    
    AddImgProducts: {
        width: 280,
        height: 280,
    },

    AddContBtnMaxMen:{
        flexWrap: 'wrap',
        flexDirection: 'column'
    },

    AddNameProducts: {
        color: '#000',
        fontSize: 20,
        marginBottom: 15,
        textTransform: 'capitalize',
        textAlign: 'center',
    },

    AddProductsPrice: {
        color: '#ff4040',
        fontWeight: '500',
        fontSize: 25,
        textAlign: 'center',
        marginBottom: 15
    },

    AddSelectInput:{
        marginBottom: 15
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


    DesCription:{
        marginBottom: 15,
        fontWeight: '700',
        textAlign: "center",
        fontSize: 18
    },

    AddImgBtn: {
        paddingTop: 5,
        paddingBottom: 5,
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




    contBtns:{
        flsexDirection: "row"
        
      },
    
      ButtonMax: {
        color: "red",
        marginBottom: 15,
        alignItems: "center"
      },
      
      ButtonMenos:{
        backgroundColor: '#ccc',
        marginBottom: 15,
        backgroundColor: 'orange',
        alignItems: "center",
        display: "flex"
      },




    dropdown: {
        margin: 16,
        height: 50,
        borderBottomColor: 'gray',
        borderBottomWidth: 0.5,
      },
      icon: {
        marginRight: 5,
      },
      placeholderStyle: {
        fontSize: 16,
      },
      selectedTextStyle: {
        fontSize: 16,
      },
      iconStyle: {
        width: 20,
        height: 20,
      },
      inputSearchStyle: {
        height: 40,
        fontSize: 16,
      },

});

export default StylesAddProducts;