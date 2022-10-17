import * as React from 'react';
import { Button, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { useNavigation } from "@react-navigation/native";
import Home from './Src/View/Home';
import AddProducts from './Src/View/AddProducts';
import Nosotros from './Src/View/Nosotros';

const Drawer = createDrawerNavigator();

export default function App() {

  // const navigation = useNavigation();


  //   // const { user } = useAuthContext()
  //   React.useLayoutEffect(() => {
  //     navigation.setOptions({
  //       title: 'user.name'
  //     })
  //   }, [])
  
  


  return (
    <NavigationContainer>
      <Drawer.Navigator useLegacyImplementation initialRouteName="Home">
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Nosotros" component={Nosotros} />
        <Drawer.Screen name="AddProducts" component={AddProducts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
