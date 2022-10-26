import React from 'react';
import StylesProdStock from '../../Css/styleProdStock';
import { View, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons';


const ShowStock = (props) => {
  return (
    <View>{props.showProdStock}</View>
  )
}


const ButtonsOnclickMax = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.buttonMax} style={StylesProdStock.ButtonMax}>
        <AntDesign name="plus" size={24} color="#000" />
      </TouchableOpacity>
    </View>
  )
}

const ButtonsOnclickMenos = (props) => {
  return (
    <View>
      <TouchableOpacity onPress={props.buttonMenos} style={StylesProdStock.ButtonMax}>
        <AntDesign name="minus" size={24} color="#000" />
      </TouchableOpacity>
    </View>

  )
}


export { ButtonsOnclickMax, ButtonsOnclickMenos, ShowStock }