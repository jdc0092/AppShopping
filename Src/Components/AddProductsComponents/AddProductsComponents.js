import React, { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import StylesAddProducts from "../../Css/styleSectionAddProduts";
import StyleInputDescript from '../../Css/styleInputDesc';
import { Dropdown } from 'react-native-element-dropdown';
import { Feather } from '@expo/vector-icons';


const AddBtnSourceImg = (props) =>{
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
                onChangeText={props.inputPriceProduct}
                keyboardType={'number-pad'}
            />
        </View>
    )
};

const InputStock = (props) => {
    return (
        <View>
            <TextInput
                style={StylesAddProducts.AddTextInput}
                placeholder='0'
                onChangeText={props.upIncrementStock}
                keyboardType={'number-pad'}
                maxLength={2}

            />
        </View>
    )
};

const SelectMoneda = (props) => {
 
    const [valueOpt, setValueOpt] = useState(null);

    const valOptions = [
        { value: 'RD$', label: 'RD$' },
        { value: 'US$', label: 'US$' }
    ];

    return (
        <View style={StylesAddProducts.AddSelectInput}>

            {/* <Text>Tipos de Drivisas:</Text> */}
            <Dropdown
                style={StylesAddProducts.dropdown}
                placeholderStyle={StylesAddProducts.placeholderStyle}
                selectedTextStyle={StylesAddProducts.selectedTextStyle}
                inputSearchStyle={StylesAddProducts.inputSearchStyle}
                iconStyle={StylesAddProducts.iconStyle}
                data={valOptions}
                search
                maxHeight={300}
                labelField="label"
                valueField="value"
                placeholder="Tipos de Drivisas:"
                searchPlaceholder="Search..."
                value={valueOpt}
                onChange={props.selectOptions}
                onChangeText={item => {
                    setValueOpt(item.value);

                }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />

        </View>
    )
};

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
                <Text style={StylesAddProducts.AddBtnMenuText}>Add Products"</Text>
            </TouchableHighlight>
        </View>

    )
};



export {
    AddBtnSourceImg,
    InputName,
    InputPrice,
    InputDescriptions,
    BtnPublish,
    SelectMoneda,
    InputStock,
};