
import * as RN from 'react-native'
import stylesAddProducts from '../../Css/styleSectionAddProduts';


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
}

export default BtnPublish;