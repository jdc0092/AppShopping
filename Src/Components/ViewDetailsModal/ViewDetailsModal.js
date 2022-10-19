import React, { useState } from "react";
import { Alert, Modal, StyleSheet, Text, Pressable, View, Button } from "react-native";
import styleModal from "../../Css/styleModal";
import { MaterialCommunityIcons } from '@expo/vector-icons';

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
          <View style={styleModal.modalView}>

            <Text style={styleModal.modalText}>Detalle del producto</Text>

            <Button onPress={() => setModalVisible(!modalVisible)} title='Cancelar'/>

          </View>
        </View>
      </Modal>

      <MaterialCommunityIcons name="eye-outline" onPress={() => setModalVisible(true)} size={30} color="black" />
      
    </View>
  );
};


export default ViewDetailsModal;