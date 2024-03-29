import React, { useEffect, useState } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen.js';
import OnboardingScreen from '../screens/OnboardingScreen.js';
import { getItem } from '../utils/asyncStorage.js';
const Stack = createNativeStackNavigator();
export default function AppNavigation() {

  const [showOnboarding, setShowOnboarding] = useState(null);
  useEffect(()=>{
    checkIfAlreadyOnboarded();
  },[])

  const checkIfAlreadyOnboarded = async () => {
    let onboarded = await getItem('onboarded');
    if(onboarded == 1){
        setShowOnboarding(false);
    }else{
        setShowOnboarding(true);
    }
  }
  if(showOnboarding == null){
    return null;
  }

  if(showOnboarding == true){
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Onboarding'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  else{
    return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'>
          <Stack.Screen name="Home" options={{headerShown: false}} component={HomeScreen} />
          <Stack.Screen name="Onboarding" options={{headerShown: false}} component={OnboardingScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  }
  }


