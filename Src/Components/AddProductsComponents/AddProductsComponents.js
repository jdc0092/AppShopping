import React, { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight, TouchableOpacity, Button, Alert, } from 'react-native'
import StylesAddProducts from "../../Css/styleSectionAddProduts";
import StyleInputDescript from '../../Css/styleInputDesc';
import { Dropdown } from 'react-native-element-dropdown';
import { Feather } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import DateTimePickerModal from "react-native-modal-datetime-picker";
import moment from 'moment';
import AccordionListItem from '../AccordionListItem/AccordionListItem';
import { map } from '@firebase/util';




const TimeOupOfert = (props) => {

  // const [modalVisible, setModalVisible] = useState(false);

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
    <>
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
    </>

  )


};


const AddBtnSourceImg = (props) => {
  return (
    <View style={StylesAddProducts.AddImgContBtn}>
      <TouchableHighlight
        onPress={props.btnImg}
        style={StylesAddProducts.AddImgBtn}
        underlayColor='#787878'>
        <Text style={StylesAddProducts.AddBtnMenuText}>
          <Feather name="image" size={30} color="white" />
        </Text>
      </TouchableHighlight>
    </View>

  )
};


const InputName = (props) => {
  return (
    <View>
      <TextInput
        style={StylesAddProducts.AddTextInput}
        placeholder='Name Products'
        onChangeText={props.inputNameProduct}
      />
    </View>
  )
};

const InputPrice = (props) => {
  return (
    <View>
      <TextInput
        style={StylesAddProducts.AddTextInput}
        placeholder='Price'
        value={props.valuePriceModal}
        onChangeText={props.inputPriceProduct}
        keyboardType={'number-pad'}
      />
    </View>
  )
};

const InputOfertPrice = (props) => {
  return (
    <View>
      <TextInput
        style={StylesAddProducts.AddTextInput}
        placeholder='Price Ant'
        value={props.valuePriceOfertModal}
        onChangeText={props.inputPriceOfert}
        keyboardType={'number-pad'}
      />
    </View>
  )
};

// -----------Beta
const InputPriceModal = (props) => {
  return (
    <View>
      <TextInput
        style={StylesAddProducts.AddTextInput}
        placeholder='Price Ant'
        value={props.valuePriceModal}
        onChangeText={props.priceModal}
        keyboardType={'number-pad'}
      />
    </View>
  )
};

const InputPriceOfertModal = (props) => {
  return (
    <View>
      <TextInput
        style={StylesAddProducts.AddTextInput}
        placeholder='Price Oferts!'
        value={props.valuePriceOfertModal}
        onChangeText={props.showPriceOfert}
        keyboardType={'number-pad'}
      />
    </View>
  )
};
// -----------Beta


// const InputStock = (props) => {
//     return (
//         <View>
//             <TextInput
//                 style={StylesAddProducts.AddTextInput}
//                 placeholder='0'
//                 onChangeText={props.upIncrementStock}
//                 keyboardType={'number-pad'}
//                 maxLength={2}

//             />
//         </View>
//     )
// };

const ShowItems = (props) => {
  return (
    <View>{props.showProdStock}</View>
  )
};


const ItemsMax = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.bntItemsMax} style={StylesAddProducts.ButtonMax}>
        <AntDesign name="plus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  )
};

const ItemsLess = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.bntItemsLess} style={StylesAddProducts.ButtonLess}>
        <AntDesign name="minus" size={24} color="#000" />
      </TouchableOpacity>
    </View>

  )
};

const SelectCurrency = (props) => {

  const [current, setCurrent] = useState('Moneda');

  const currency = [
    {
      divisa: 'RD$',
    },
    {
      divisa: 'US$'
    }

  ]

  return (
    <View style={StylesAddProducts.containers}>
      <AccordionListItem title={current}>
        {
          currency.map((item) => {
            return (
              <TouchableOpacity
                key={item.divisa}
                onPress={(() => setCurrent(`${item.divisa}`) || props.selectOptions(`${item.divisa}`))}
              >
                <Text>{item.divisa}</Text>
              </TouchableOpacity>
            );
          }
          )}
      </AccordionListItem>
    </View>
  )
}

// const SelectCurrency = (props) => {

//     const [valueOpt, setValueOpt] = useState(null);

//     const valOptions = [
//         { value: 'RD$', label: 'RD$' },
//         { value: 'US$', label: 'US$' }
//     ];

//     return (
//         <View style={StylesAddProducts.AddSelectInput}>

//             {/* <Text>Tipos de Drivisas:</Text> */}
//             <Dropdown
//                 style={StylesAddProducts.dropdown}
//                 placeholderStyle={StylesAddProducts.placeholderStyle}
//                 selectedTextStyle={StylesAddProducts.selectedTextStyle}
//                 inputSearchStyle={StylesAddProducts.inputSearchStyle}
//                 iconStyle={StylesAddProducts.iconStyle}
//                 data={valOptions}
//                 search
//                 maxHeight={300}
//                 labelField="label"
//                 valueField="value"
//                 placeholder="Tipos de Drivisas:"
//                 searchPlaceholder="Search..."
//                 value={valueOpt}
//                 onChange={props.selectOptions}
//                 onChangeText={item => {
//                     setValueOpt(item.value);

//                 }}
//             // renderLeftIcon={() => (
//             //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
//             // )}
//             />

//         </View>
//     )
// };

const InputDescriptions = (props) => {
  return (
    <View>
      <TextInput
        maxLength={300}
        style={StyleInputDescript.InputDesc}
        placeholder='Description'
        onChangeText={props.descript}
      />
    </View>
  )
};


const BtnPublish = (props) => {
  return (
    <View style={StylesAddProducts.AddPublishContBtn}>
      <TouchableHighlight
        onPress={props.btnPublish}
        style={StylesAddProducts.AddPublishBtn}
        underlayColor='#787878'>
        <Text style={StylesAddProducts.AddBtnMenuText}>Add Products</Text>
      </TouchableHighlight>
    </View>

  )
};



export {
  AddBtnSourceImg,
  InputName,
  InputPrice,
  InputOfertPrice,
  InputDescriptions,
  BtnPublish,
  SelectCurrency,
  ShowItems,
  ItemsMax,
  ItemsLess,
  InputPriceModal,
  InputPriceOfertModal,
  TimeOupOfert,
  // InputStock,
};