import * as RN from 'react-native'
import stylesAddProducts from "../../Css/styleSectionAddProduts";
import styleInputDescript from '../../Css/styleInputDesc'

function InputName (props){
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

function InputPrice (props){
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

function InputDescriptions (props) {
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
}

export {InputName, InputPrice, InputDescriptions};