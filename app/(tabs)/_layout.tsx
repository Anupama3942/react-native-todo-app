import useTheme from "@/hooks/useTheme"
import { Ionicons } from "@expo/vector-icons"
import { Tabs } from 'expo-router'
import React from 'react'

const TabsLayout = () =>{

  const { colors } = useTheme();  

  return (
    <Tabs screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.textMuted,
        tabBarStyle: {
            backgroundColor: colors.surface,
            borderTopWidth: 3,
            borderTopColor: colors.border,
            height: 80,
            paddingBottom: 40,
            paddingTop: 12,
        },
        tabBarLabelStyle: {
            fontSize: 11,
            fontWeight: "600"
        },
        headerShown: false
    }}>

        <Tabs.Screen 
            name='index'
            options={{
                title: 'Todos',
                tabBarIcon: ({color, size}) => <Ionicons name='layers-outline' size={size} color={color}/>,
            }}/>

        <Tabs.Screen 
            name='settings'
            options={{
                title: 'Settings',
                tabBarIcon: ({color, size}) => <Ionicons name='settings-outline' size={size} color={color} />,
            }}/>

    </Tabs>
  )
}

export default TabsLayout