import { Formik } from "formik"
import {
  Button,
  Center,
  Divider,
  FormControl,
  IconButton,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base"
import React, { useState } from "react"
import { Image, SafeAreaView, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"
import * as Yup from "yup"

const LoginScreen = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [visiblePassword, setVisiblePassword] = useState(false)
  const validationSchema = Yup.object({
    username: Yup.string().required(),
    password: Yup.string().required(),
  })

  const onSubmit = async (values: any) => {
    setIsLoading(true)
    await new Promise<void>((resolve) => {
      setTimeout(() => {
        resolve()
        setIsLoading(false)
        // router.replace("/sign-up")
      }, 1000)
    })
  }

  const initialValues = {
    username: "",
    password: "",
  }

  const toggleVisiblePassword = () => setVisiblePassword(!visiblePassword)

  return (
    <SafeAreaView style={styles.container}>
      <Formik
        validationSchema={validationSchema}
        initialValues={initialValues}
        onSubmit={onSubmit}
      >
        {({ handleChange, handleBlur, handleSubmit, values }) => (
          <Center padding={4} bg={"white"} height={"full"}>
            <VStack width={"full"} alignItems={"center"} space={6}>
              <Image
                width={300}
                height={400}
                source={require("@/assets/images/logo.png")}
              />
              <FormControl>
                <VStack space={3} alignItems="center">
                  <Input
                    onChangeText={handleChange("username")}
                    onBlur={handleBlur("username")}
                    value={values.username}
                    placeholderTextColor={"input.placeHolder"}
                    backgroundColor={"input.fill"}
                    color="bodyText.bodyText"
                    borderColor={"input.border"}
                    height={44}
                    w={"full"}
                    mx="3"
                    placeholder="Username"
                  />
                  <Input
                    onChangeText={handleChange("password")}
                    onBlur={handleBlur("password")}
                    value={values.password}
                    placeholderTextColor={"input.placeHolder"}
                    backgroundColor={"input.fill"}
                    color="text.bodyText"
                    borderColor={"input.border"}
                    height={44}
                    w={"full"}
                    mx="3"
                    type={visiblePassword ? "text" : "password"}
                    placeholder="Password"
                    InputRightElement={
                      <IconButton
                        onPress={toggleVisiblePassword}
                        icon={
                          <Icon
                            name={visiblePassword ? "eye-slash" : "eye"}
                            size={12}
                            color="muted.400"
                          />
                        }
                      ></IconButton>
                    }
                  />
                  <Button variant={"link"} style={{ alignSelf: "flex-end" }}>
                    <Text fontWeight={"semibold"} color={"primary.500"}>
                      Forgot password?
                    </Text>
                  </Button>
                </VStack>
              </FormControl>

              <Button
                size={"lg"}
                onPress={() => handleSubmit()}
                isLoading={isLoading}
                width={"full"}
              >
                <Text fontWeight={"semibold"}>Login</Text>
              </Button>

              <Button variant={"link"}>
                <Text fontWeight={"semibold"} color={"primary.500"}>
                  <Icon name="square-facebook" /> Login with Facebook
                </Text>
              </Button>

              <Stack width={"full"} alignItems={"center"} direction={"row"}>
                <Divider
                  style={styles.divider}
                  bg="divider.color"
                  thickness="0.2"
                />
                <Text mx={10} fontWeight={"bold"} color={"text.secondary"}>
                  OR
                </Text>
                <Divider
                  style={styles.divider}
                  bg="divider.color"
                  thickness="0.2"
                />
              </Stack>

              <Text fontWeight={"semibold"} color={"text.secondary"}>
                Don't have account?{" "}
                <Link isUnderlined={false} href={""}>
                  <Text fontWeight={"semibold"} color={"primary.500"}>
                    Sign up.
                  </Text>
                </Link>
              </Text>
            </VStack>
          </Center>
        )}
      </Formik>
    </SafeAreaView>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  divider: {
    flex: 1,
  },
})
