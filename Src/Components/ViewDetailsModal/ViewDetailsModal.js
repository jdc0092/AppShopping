import React, { useState } from "react";
import { Alert, Modal, Text, View, Image } from "react-native";
import styleModal from "../../Css/styleModal";
import stylesCss from "../../Css/styleSectionHome";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const ViewDetailsModal = (props) => {
  
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styleModal.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>

        <View style={styleModal.centeredView}>
          <View style={styleModal.contModal}>
            <View style={styleModal.modalView}>
              <View style={styleModal.modalInfo}>
                <View style={styleModal.closeModal}>
                  <FontAwesome name="close" onPress={() => setModalVisible(!modalVisible)} size={30} color="red" />
                </View>

                <Text style={styleModal.modalText}>Detalle del producto</Text>

                <View style={stylesCss.ProductsImgModal}>
                  <Image source={props.imgProducts} style={stylesCss.imgProducts} />
                </View>

                <Text style={stylesCss.productsStock}>Disponible: {props.productsStock}</Text>
                <Text style={stylesCss.productsPrice}>{props.isSold}</Text>

                <View>
                  <Text style={stylesCss.titleProductsDescrip}>Descripcion:</Text>
                  <Text style={stylesCss.productsDescriptions}>{props.descriptionProducts}</Text>
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