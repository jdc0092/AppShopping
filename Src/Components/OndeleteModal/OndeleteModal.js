import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import styleModal from "../../Css/styleModal";
import { AntDesign } from '@expo/vector-icons';
import stylesCss from "../../Css/styleSectionHome";
import { FontAwesome } from '@expo/vector-icons';

const OndeleteModal = (props) => {
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


                <Text style={styleModal.modalText}>Estas seguro que deseas eliminar este artiulo de numero:
                  <Text style={styleModal.idProducts}> {props.idProducts}</Text>
                </Text>

                <View style={styleModal.conBtnModal}>

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