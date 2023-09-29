import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../modules/home/src/views/Home';
import Location from '../modules/location/src/views/Location';
import Chat from '../modules/chat/src/views/Chat';
import Profile from '../modules/profile/src/views/Profile';
import {COLORS} from '../constants/theme';

import IonIcon from 'react-native-vector-icons/Ionicons';

// import Icon from 'react-native-ionicons';

const BottomTabNavigation = () => {
  const Tab = createBottomTabNavigator();

  const tabBarStyle = {
    padding: 20,
    borderRadius: 20,
    height: 80,
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
  };

  return (
    <Tab.Navigator
      initialRouteName="Home"
      activeColor="#EB6A58"
      tabBarHideKeyBoard={true}
      headerShown={false}
      inactiveColor={'#3e2465'}
      barStyle={{paddingBottom: 48}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'apps' : 'apps-outline'}
              size={26}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Location"
        component={Location}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'location' : 'location-outline'}
              size={26}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={
                focused ? 'chatbubble-ellipses' : 'chatbubble-ellipses-outline'
              }
              size={26}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarStyle: tabBarStyle,
          tabBarShowLabel: false,
          headerShown: false,
          tabBarIcon: ({focused}) => (
            <IonIcon
              name={focused ? 'person' : 'person-outline'}
              size={26}
              color={focused ? COLORS.red : COLORS.gray}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default BottomTabNavigation;
