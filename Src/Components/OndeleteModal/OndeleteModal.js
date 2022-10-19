import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import styleModal from "../../Css/styleModal";
import { AntDesign } from '@expo/vector-icons';
import stylesCss from "../../Css/styleSectionHome";

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
          <View style={styleModal.modalView}>

            <Text style={styleModal.modalText}>Esta seguro que dedesas Eliminar el artiulo de numero {props.idProducts}</Text>

            <Button onPress={props.onDeleteProducts} title='Eliminar' />

            <Button onPress={() => setModalVisible(!modalVisible)} title='Cancelar'/>

          </View>
        </View>
      </Modal>

      <AntDesign name="delete" style={stylesCss.onDelete} onPress={() => setModalVisible(true)} />
      
    </View>
  );
};


export default OndeleteModal;