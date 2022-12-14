import React, { useState } from "react";
import { Alert, Modal, Text, View, Image } from "react-native";
import StyleModal from "../../Css/styleModal";
// import StyleModal from "../../Css/styleSectionHome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ShowModalDetails = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StyleModal.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>

        <View style={StyleModal.centeredView}>
          <View style={StyleModal.contModal}>
            <View style={StyleModal.modalView}>
              <View style={StyleModal.modalInfo}>
                <View style={StyleModal.closeModal}>
                  <View>
                    <Text style={StyleModal.modalText}>Detalle del producto</Text>
                  </View>
                  <View>
                    <FontAwesome name="close" onPress={() => setModalVisible(!modalVisible)} size={30} color="red" />
                  </View>
                </View>


                <View style={StyleModal.ProductsImgModal}>
                  <Image source={{ uri: props.imgProducts }} resizeMode='contain' style={StyleModal.imgProducts} />
                </View>

                <Text style={StyleModal.productsStock}>Items: {props.productsStock}</Text>
                <Text style={StyleModal.productsPrice}>{props.isSold}</Text>
                <Text>{props.selectCurrency}{props.priceNow}</Text>
                <Text>{props.selectCurrency}{props.priceOfert}</Text>

                <View>
                  <Text style={StyleModal.titleProductsDescrip}>Descripcion:</Text>
                  <Text style={StyleModal.productsDescriptions}>{props.productsDescription}</Text>
                  <Text>{props.createAdd}</Text>
                </View>

              </View>
            </View>
          </View>
        </View>
      </Modal>

      <MaterialCommunityIcons name="eye-outline" onPress={() => setModalVisible(true)} size={30} color="black" />

    </View>
  );
};


export default ShowModalDetails;