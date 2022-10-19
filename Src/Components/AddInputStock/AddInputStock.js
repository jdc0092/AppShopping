import * as RN from "react-native"
import stylesAddProducts from "../../Css/styleSectionAddProduts";


function AddInputStock(props){
    return (
        <RN.View style={stylesAddProducts.inputStock}>
            <RN.TextInput
                style={stylesAddProducts.AddTextInput}
                placeholder='0'
                onChangeText={props.upIncrementStock}
            />
        </RN.View>
    )
};

export default AddInputStock;