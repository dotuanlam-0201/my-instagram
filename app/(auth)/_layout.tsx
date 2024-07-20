import { Stack } from "expo-router"
import { StatusBar } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"

const AuthLayout = () => {
  return (
    <React.Fragment>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="login" />
        <Stack.Screen name="sign-up" />
      </Stack>
      <StatusBar backgroundColor="#3700B3" barStyle="light-content" />
    </React.Fragment>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
