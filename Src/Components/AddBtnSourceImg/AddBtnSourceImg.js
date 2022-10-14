
import * as RN from 'react-native'
import stylesAddProducts from '../../Css/styleSectionAddProduts';


function AddBtnSourceImg(props) {
    return (
        <RN.View style={stylesAddProducts.AddImgContBtn}>
            <RN.TouchableHighlight
                onPress={props.btnImg}
                style={stylesAddProducts.AddImgBtn}
                underlayColor='#787878'>
                <RN.Text style={stylesAddProducts.AddBtnMenuText}>IMG</RN.Text>
            </RN.TouchableHighlight>
        </RN.View>

    )
}

export default AddBtnSourceImg;