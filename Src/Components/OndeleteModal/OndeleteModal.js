import React, { useState } from "react";
import { Alert, Modal, Text, View, Button, } from "react-native";
import StyleModal from "../../Css/styleModal";
import { AntDesign } from '@expo/vector-icons';
import stylesCss from "../../Css/styleSectionHome";
import { FontAwesome } from '@expo/vector-icons';

const OndeleteModal = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StyleModal.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          // Alert.alert("Modal has been closed.");
          setModalVisible(!modalVisible);
        }}>

        <View style={StyleModal.centeredView}>
          <View style={StyleModal.contModal}>
            <View style={StyleModal.modalView}>
              <View style={StyleModal.modalInfo}>
                <View style={StyleModal.closeModal}>
                  <FontAwesome name="close" onPress={() => setModalVisible(!modalVisible)} size={30} color="red" />
                </View>


                <Text style={StyleModal.modalText}>Estas seguro que deseas eliminar este artiulo de numero:
                  <Text style={StyleModal.idProducts}> {props.idProducts}</Text>
                </Text>

                <View style={StyleModal.conBtnModal}>
                  <Button onPress={() => setModalVisible(!modalVisible)} title='Cancelar' />
                  <Button onPress={props.onDeleteProducts} title='Eliminar' />
                </View>


              </View>
            </View>
          </View>
        </View>
      </Modal>

      <AntDesign name="delete" style={stylesCss.onDelete} onPress={() => setModalVisible(true)} />

    </View>
  );
};


export default OndeleteModal;