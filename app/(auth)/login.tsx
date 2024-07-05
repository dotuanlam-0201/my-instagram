import {
  Button,
  Center,
  Divider,
  FormControl,
  Input,
  Link,
  Stack,
  Text,
  VStack,
} from "native-base"
import React from "react"
import { Image, SafeAreaView, StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/FontAwesome6"

const LoginScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
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
                placeholderTextColor={"input.placeHolder"}
                backgroundColor={"input.fill"}
                color="text.bodyText"
                borderColor={"input.border"}
                height={44}
                w={"full"}
                mx="3"
                placeholder="Password"
              />
              <Button variant={"link"} style={{ alignSelf: "flex-end" }}>
                <Text fontWeight={"semibold"} color={"primary.500"}>
                  Forgot password?
                </Text>
              </Button>
            </VStack>
          </FormControl>

          <Button width={"full"}>
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
