import React, { useState } from "react";
import { Modal, Text, View, Button, StyleSheet, TouchableOpacity } from "react-native";
import StyleModal from "../../Css/styleModal";
import { Ionicons } from '@expo/vector-icons';
import stylesCss from "../../Css/styleSectionHome";
import { FontAwesome } from '@expo/vector-icons';
import CountDown from 'react-native-countdown-component';
import { InputPriceModal, InputPriceOfertModal } from "../AddProductsComponents/AddProductsComponents";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';


const OptionsProductModal = (props) => {

  const [modalVisible, setModalVisible] = useState(false);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const [timeOup, setTimeOup] = useState('');
  const [numb, setNumb] = useState('');

  // const num = numb;

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    // console.warn("Datos de hora actual: ", moment().format('LTS'));
    hideDatePicker();

    // const dateTm = (moment(date).format('L'));

    setNumb(moment(date).format('L'));


  };

  // console.log("(-->", timeOup)
  // console.log(numb)


  const betaDate = numb.toString(numb);

  // Set the date we're counting down to
  const countDownDate = new Date(betaDate).getTime();

  // Update the count down every 1 second
  const x = setInterval(function () {


    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Output the result in an element with id="demo"
    const dateTime = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";


    // If the count down is over, write some text 
    if (distance < 0) {
      clearInterval(x);
      alert = "Expire"
    }
    // console.log(dateTime)
    setTimeOup(dateTime)
  }, 1000);


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

                <Button title="Show Date Picker" onPress={showDatePicker} />
                <DateTimePickerModal
                  isVisible={isDatePickerVisible}
                  mode="date"
                  locale="en_do" // Use "en_GB" here
                  date={new Date()}
                  onConfirm={handleConfirm}
                  onCancel={hideDatePicker}
                />
                <Text>{timeOup}</Text>

                {/* <CountDown
                  size={30}
                  until={numb}
                  onFinish={() => alert('Finished')}
                  digitStyle={{ backgroundColor: '#FFF', borderWidth: 2, borderColor: '#1CC625' }}
                  digitTxtStyle={{ color: '#1CC625' }}
                  timeLabelStyle={{ color: 'red', fontWeight: 'bold' }}
                  separatorStyle={{ color: '#1CC625' }}
                  timeToShow={['D', 'H', 'M', 'S']}
                  timeLabels={{d: 'Days', h: 'Hours', m: 'Minutes', s: 'Seconds'}}
                  showSeparator
                /> */}

                <View>
                  <InputPriceModal
                    valuePriceModal={props.valuePriceModal}
                    priceModal={props.priceModal}
                  />

                  <InputPriceOfertModal
                    valuePriceOfertModal={props.valuePriceOfertModal}
                    showPriceOfert={props.showPriceOfert}
                  />
                </View>
                <TouchableOpacity onPress={() => setModalVisible(!modalVisible)} style={styleBtn.appButtonContainer}>
                  <Text style={styleBtn.appButtonText}>Aceptar</Text>
                </TouchableOpacity>

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

const styleBtn = StyleSheet.create({

  appButtonContainer: {
    elevation: 8,
    backgroundColor: "#93D500",
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 12
  },
})

