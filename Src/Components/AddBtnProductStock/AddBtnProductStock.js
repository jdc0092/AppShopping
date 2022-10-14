import React from 'react';
import stylesProdStock from '../../Css/styleProdStock';
import {
  View,
  Button
} from 'react-native';


const ButtonsOnclickMax = (props) =>{
    return(
      <Button
      style={stylesProdStock.ButtonMax}
      onPress={props.onPress}
      title="+1"
      color="green"
      accessibilityLabel="Learn more about this purple button"
    />
    )
}

const ButtonsOnclickMenos = (props) =>{
  return(
    <View>
      <Button
      style={stylesProdStock.ButtonMenos}
      onPress={props.onMenos}
      title="-1"
      color="orange"
      accessibilityLabel="Learn more about this purple button"
      />
    </View>
  
  )
}

const ButtonsOnclear = (props) =>{
  return(
    <Button
    style={{ flex: 1, backgroundColor: '#ccc' }}
    onPress={props.onClear}
    title="Clear"
    color="#000"
    accessibilityLabel="Learn more about this purple button"
  />
  )
}

export {ButtonsOnclickMax, ButtonsOnclickMenos, ButtonsOnclear}