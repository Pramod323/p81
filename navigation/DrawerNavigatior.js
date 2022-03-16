import * as React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
import Profile from '../screens/Profile';

const Drawer = createDrawerNavigator()

const DrawerNavigatior = () => {
    <Drawer.Navigator>
        <Drawer.Screen name="Home" component={TabNavigator} />
        <Drawer.Screen name="Profile" component={Profile}/>
    </Drawer.Navigator>
}

export default DrawerNavigatior;