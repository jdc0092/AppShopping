import React, { useState } from 'react';
import { Text, View, TextInput, TouchableHighlight } from 'react-native'
import StylesAddProducts from "../../Css/styleSectionAddProduts";
import StyleInputDescript from '../../Css/styleInputDesc';
// import SelectDropdown from 'react-native-select-dropdown'
// import SelectList from 'react-native-dropdown-select-list'
import { Dropdown } from 'react-native-element-dropdown';


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
    // const countries = ["RD$", "US$"]

    // const [selected, setSelected] = useState("");
    // const data = [
    //     {value: 'RD$', name: 'RD$'},
    //     {value: 'US$', name: 'US$'}
    // ];

    // console.log(data)

    // const data = [
    //     { label: 'RD$', value: 'RD$' },
    //     { label: 'US$', value: 'US$' },

    // ];

    const [value, setValue] = useState(null);

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
                value={value}
                onChangeText={props.selectOptions}
                onChange={item => {
                    setValue(item.value);

                }}
            // renderLeftIcon={() => (
            //   <AntDesign style={styles.icon} color="black" name="Safety" size={20} />
            // )}
            />

            {/* <TextInput
            value={value}
                onChangeText={props.selectOptions}
                placeholder='sss'
            /> */}


            {/* <Select options={valOptions} onChange={props.selectOptions} /> */}


            {/* <SelectList
                setSelected={setSelected}
                data={data}
                onSelect={() => alert(selected)}
            /> */}
            {/* <SelectDropdown
                data={countries}
                onChange={props.selectOptions}
                onSelect={(selectedItem) => {
                    console.log(selectedItem)
                }}

                buttonTextAfterSelection={(selectedItem) => {
                    return selectedItem
                }}

                rowTextForSelection={(item) => {
                    return item
                }}
            /> */}
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
    InputName,
    InputPrice,
    InputDescriptions,
    BtnPublish,
    SelectMoneda,
    InputStock,
};