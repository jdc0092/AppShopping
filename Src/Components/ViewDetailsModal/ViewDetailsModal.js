import React, { useState } from "react";
import { Alert, Modal, Text, View, Image } from "react-native";
import StyleModal from "../../Css/styleModal";
import StylesCss from "../../Css/styleSectionHome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ViewDetailsModal = (props) => {
  
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
                  <FontAwesome name="close" onPress={() => setModalVisible(!modalVisible)} size={30} color="red" />
                </View>

                <Text style={StyleModal.modalText}>Detalle del producto</Text>

                <View style={StylesCss.ProductsImgModal}>
                  <Image source={props.imgProducts} style={StylesCss.imgProducts} />
                </View>

                <Text style={StylesCss.productsStock}>Disponible: {props.productsStock}</Text>
                <Text style={StylesCss.productsPrice}>{props.isSold}</Text>

                <View>
                  <Text style={StylesCss.titleProductsDescrip}>Descripcion:</Text>
                  <Text style={StylesCss.productsDescriptions}>{props.descriptionProducts}</Text>
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


export default ViewDetailsModal;