import React, { useState } from "react";
import { Modal, Text, View, Button, } from "react-native";
import StyleModal from "../../Css/styleModal";
import { Ionicons } from '@expo/vector-icons';
import stylesCss from "../../Css/styleSectionHome";
import { FontAwesome } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { InputPriceModal, InputPriceOfertModal } from "../AddProductsComponents/AddProductsComponents";
const OptionsProductModal = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

  return (
    <View style={StyleModal.centeredView}>
      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>

        <View style={StyleModal.centeredView}>
          <View style={StyleModal.contModal}>
            <View style={StyleModal.modalView}>
              <View style={StyleModal.modalInfo}>
              <View style={StyleModal.closeModal}>
                  <View>
                    <Text style={StyleModal.modalText}>Optiones para ofertas</Text>
                  </View>
                  <View>
                    <FontAwesome name="close" onPress={() => setModalVisible(!modalVisible)} size={30} color="red" />
                  </View>
                </View>

                <View>
                  <InputPriceModal
                    valuePrice={props.valuePrice}
                    priceModal={props.priceModal}
                  />

                  <InputPriceOfertModal
                  />
                </View>


                {/* <CountDown
                  size={30}
                  until={60 * 120 + 30}
                  onFinish={() => alert('Finished')}
                  digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625' }}
                  digitTxtStyle={{ color: '#1CC625' }}
                  timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                  separatorStyle={{ color: '#1CC625' }}
                  timeToShow={['H', 'M', 'S']}
                  timeLabels={{ m: null, s: null }}
                  showSeparator
                /> */}


              </View>
            </View>
          </View>
        </View>
      </Modal>

      <Ionicons name="md-options-sharp" onPress={() => setModalVisible(true)} size={24} color="#0075ea" />

    </View>
  );
};


export default OptionsProductModal;