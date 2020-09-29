import 'react-native-gesture-handler';
import React, { useEffect } from 'react'
import NavigationService from 'App/Services/NavigationService'
import AppNavigator from 'App/Navigators/AppNavigator'
import { View } from 'react-native'
import StartupActions from 'App/Stores/Startup/Actions'
import { Helpers } from 'App/Theme'
import { useDispatch } from 'react-redux'
import BottomNavBar from '../../Components/nav/bottomNavBar';


const RootScreen = () => {
  // Deep linking prefix
  const prefix = 'boilerplate://';

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(StartupActions.startup())
  }, [])

  return (
      <View style={Helpers.fill}>
        <AppNavigator
          // Initialize the NavigationService (see https://reactnavigation.org/docs/en/navigating-without-navigation-prop.html)
          ref={(navigatorRef) => {
            NavigationService.setTopLevelNavigator(navigatorRef)
          }}
          uriPrefix={prefix}
        />
        <BottomNavBar />
      </View>
  )
}

export default RootScreen
