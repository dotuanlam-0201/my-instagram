import { useFonts } from "expo-font"
import { SplashScreen, Stack } from "expo-router"
import { NativeBaseProvider, extendTheme } from "native-base"
import React, { useEffect } from "react"

SplashScreen.preventAutoHideAsync()

const RootLayout = () => {
  const [fontsLoaded, error] = useFonts({
    HelveticaNeueBlack: require("../assets/fonts/helvetica-neue-5/HelveticaNeueBlack.otf"),
    HelveticaNeueBlackItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueBlackItalic.otf"),
    HelveticaNeueBold: require("../assets/fonts/helvetica-neue-5/HelveticaNeueBold.otf"),
    HelveticaNeueBoldItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueBoldItalic.otf"),
    HelveticaNeueHeavy: require("../assets/fonts/helvetica-neue-5/HelveticaNeueHeavy.otf"),
    HelveticaNeueHeavyItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueHeavyItalic.otf"),
    HelveticaNeueLight: require("../assets/fonts/helvetica-neue-5/HelveticaNeueLight.otf"),
    HelveticaNeueLightItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueLightItalic.otf"),
    HelveticaNeueMedium: require("../assets/fonts/helvetica-neue-5/HelveticaNeueMedium.otf"),
    HelveticaNeueMediumItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueMediumItalic.otf"),
    HelveticaNeueRoman: require("../assets/fonts/helvetica-neue-5/HelveticaNeueRoman.otf"),
    HelveticaNeueThin: require("../assets/fonts/helvetica-neue-5/HelveticaNeueThin.otf"),
    HelveticaNeueThinItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueThinItalic.otf"),
    HelveticaNeueUltraLight: require("../assets/fonts/helvetica-neue-5/HelveticaNeueUltraLight.otf"),
    HelveticaNeueUltraLightItalic: require("../assets/fonts/helvetica-neue-5/HelveticaNeueUltraLightItalic.otf"),
  })

  useEffect(() => {
    if (error) throw error

    if (fontsLoaded) {
      SplashScreen.hideAsync()
    }
  }, [fontsLoaded, error])

  if (!fontsLoaded) {
    return null
  }

  if (!fontsLoaded && !error) {
    return null
  }

  const theme = extendTheme({
    colors: {
      // Add new color
      primary: {
        50: "#eff6ff",
        100: "#dbeafe",
        200: "#bfdbfe",
        300: "#93c5fd",
        400: "#60a5fa",
        500: "#3b82f6",
        600: "#2563eb",
        700: "#1d4ed8",
        800: "#1e40af",
        900: "#1e3a8a",
      },
      text: {
        bodyText: "#262626",
        secondary: "rgba(0, 0, 0, 0.4)",
      },
      // Redefining only one shade, rest of the color will remain same.
      amber: {
        400: "#d97706",
      },
      input: {
        border: "rgba(0, 0, 0, 0.1)",
        placeHolder: "rgba(0, 0, 0, 0.2)",
        fill: "#FAFAFA",
      },
      divider: {
        color: "rgba(0, 0, 0, 0.2)",
      },
    },
    config: {
      // Changing initialColorMode to 'dark'
      initialColorMode: "dark",
    },
  })

  return (
    <NativeBaseProvider theme={theme}>
      <Stack
        screenOptions={{
          headerShown: false,
        }}
      >
        <Stack.Screen name="index" />
      </Stack>
    </NativeBaseProvider>
  )
}

export default RootLayout
