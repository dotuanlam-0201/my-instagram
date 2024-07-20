import { Stack } from "expo-router"
import { StatusBar } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"

const HomeLayout = () => {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="index" />
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    </Stack>
  )
}

export default HomeLayout

const styles = StyleSheet.create({})
