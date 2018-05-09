import React, {Component} from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';


import HomeTab from './AppTabNavigator/HomeTab'
import SearchTab from './AppTabNavigator/SearchTab'
import AddMediaTab from './AppTabNavigator/AddMediaTab'
import LikesTab from './AppTabNavigator/LikesTab'
import ProfileTab from './AppTabNavigator/ProfileTab'

import { TabNavigator, StackNavigator } from 'react-navigation'
import { Icon } from 'native-base'

class MainScreen extends Component {

  static navigationOptions = {
      header: null
  }

  render() {
    return (
      <AppTabNavigator />
    );
  }
}

export default MainScreen;

const AppTabNavigator = TabNavigator({
  HomeTab: {
    screen:HomeTab,
    navigationOptions: {
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-home" style={{color:tintColor}}/>
        )
      }
  },
  SearchTab: {
    screen:SearchTab,
    navigationOptions: {
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-search" style={{color:tintColor}}/>
      )
    }
  },
  AddMediaTab: {
    screen:AddMediaTab,
    navigationOptions: {
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-add-circle" style={{color:tintColor}}/>
        )
      }
  },
  LikesTab: {
    screen:LikesTab,
    navigationOptions: {
        tabBarIcon: ({tintColor})=>(
          <Icon name="ios-heart" style={{color:tintColor}}/>
        )
      }
  },
  ProfileTab: {
    screen:ProfileTab,
    navigationOptions: {
      tabBarIcon: ({tintColor})=>(
        <Icon name="ios-person" style={{color:tintColor}}/>
      )
    }
  }

},{
  animationEnabled:true,
  swipeEnabled:true,
  tabBarPosition:"bottom",
  tabBarOptions:{
    style:{
      ...Platform.select({
        android:{
          backgroundColor:'white'
        }
      })
    },
    activeTintColor:'#000',
    inactiveTintColor:'#d1cece',
    showLabel:false,
    showIcon:true,
  }
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
