import { Stack } from "expo-router"
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
    </React.Fragment>
  )
}

export default AuthLayout

const styles = StyleSheet.create({})
