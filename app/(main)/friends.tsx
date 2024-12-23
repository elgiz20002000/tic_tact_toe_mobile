import { FriendsScreen } from '@/screens/Friends'
import React from 'react'
import { GestureHandlerRootView } from "react-native-gesture-handler";

const Friends = () => {
  return (
        <GestureHandlerRootView style={{ flex: 1 }}>
          <FriendsScreen/>
       </GestureHandlerRootView> 
  )
}

export default Friends