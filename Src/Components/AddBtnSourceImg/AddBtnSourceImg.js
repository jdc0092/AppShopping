
import * as RN from 'react-native'
import stylesAddProducts from '../../Css/styleSectionAddProduts';
import { Feather } from '@expo/vector-icons';

function AddBtnSourceImg(props) {
    return (
        <RN.View style={stylesAddProducts.AddImgContBtn}>
            <RN.TouchableHighlight
                onPress={props.btnImg}
                style={stylesAddProducts.AddImgBtn}
                underlayColor='#787878'>
                <RN.Text style={stylesAddProducts.AddBtnMenuText}>
                    <Feather name="image" size={30} color="white" />
                </RN.Text>
            </RN.TouchableHighlight>
        </RN.View>

    )
}

export default AddBtnSourceImg;