
import * as RN from 'react-native'
import StylesAddProducts from '../../Css/styleSectionAddProduts';
import { Feather } from '@expo/vector-icons';

const AddBtnSourceImg = (props) =>{
    return (
        <RN.View style={StylesAddProducts.AddImgContBtn}>
            <RN.TouchableHighlight
                onPress={props.btnImg}
                style={StylesAddProducts.AddImgBtn}
                underlayColor='#787878'>
                <RN.Text style={StylesAddProducts.AddBtnMenuText}>
                    <Feather name="image" size={30} color="white" />
                </RN.Text>
            </RN.TouchableHighlight>
        </RN.View>

    )
}

export default AddBtnSourceImg;