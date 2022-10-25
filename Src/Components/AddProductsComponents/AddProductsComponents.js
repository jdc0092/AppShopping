import * as RN from 'react-native'
import stylesAddProducts from "../../Css/styleSectionAddProduts";
import styleInputDescript from '../../Css/styleInputDesc'
import Select from 'react-select'

function InputName(props) {
    return (
        <RN.View>
            <RN.TextInput
                style={stylesAddProducts.AddTextInput}
                placeholder='Name Products'
                onChangeText={props.inputNameProduct}
            />
        </RN.View>
    )
};

function InputPrice(props) {
    return (
        <RN.View>
            <RN.TextInput
                style={stylesAddProducts.AddTextInput}
                placeholder='Price'
                onChangeText={props.inputPriceProduct}
            />
        </RN.View>
    )
};

function InputDescriptions(props) {
    return (
        <RN.View>
            <RN.TextInput
                maxLength={300}
                style={styleInputDescript.InputDesc}
                placeholder='Description'
                onChangeText={props.descript}
            />
        </RN.View>
    )
};

function InputStock(props) {
    return (
        <RN.View>
            <RN.TextInput
                style={stylesAddProducts.AddTextInput}
                placeholder='0'
                onChangeText={props.upIncrementStock}
            />
        </RN.View>
    )
};

function SelectMoneda(props) {

    const valOptions = [
        { value: 'RD$', label: 'RD$' },
        { value: 'US$', label: 'US$' }
    ];


    return (
        <RN.View style={stylesAddProducts.AddSelectInput}>
            <RN.Text>Tipos de Drivisas:</RN.Text>
            <Select options={valOptions} onChange={props.selectOptions} />
        </RN.View>
    )
};


function BtnPublish(props) {
    return (
        <RN.View style={stylesAddProducts.AddPublishContBtn}>
            <RN.TouchableHighlight
                onPress={props.btnPublish}
                style={stylesAddProducts.AddPublishBtn}
                underlayColor='#787878'>
                <RN.Text style={stylesAddProducts.AddBtnMenuText}>Add Products"</RN.Text>
            </RN.TouchableHighlight>
        </RN.View>

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