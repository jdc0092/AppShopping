import { StyleSheet } from "react-native";

const StyleModal = StyleSheet.create({
  centeredView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    padding: 20,
    alignItems: "center",
    shadowColor: "#000",
    justifyContent: "center",
    width: '100%',
    height: '100%',
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  },
  contModal: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0,0,0,0.67)',

  },

  conBtnModal: {
    flexDirection: "row",
    justifyContent: "flex-end"
  },

  closeModal: {
    alignItems: "flex-end",
    // marginTop:5,
    marginBottom: 15,
  },

  idProducts: {
    fontWeight: '700'
  },

  modalInfo: {
    backgroundColor: '#fff',
    width: '100%',
    padding: 15
  },

  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },

  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center"
  },
  modalText: {
    marginBottom: 15,
    textAlign: "center"
  },

  BtnModalText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
  },

  ContBtnModal: {
    flex: 1,
    width: '100%',
  },

  BtnModal: {
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: '#607e15',
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1
  },


});

export default StyleModal;