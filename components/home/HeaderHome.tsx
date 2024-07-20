import { Box, Flex, Text } from "native-base"
import React from "react"
import { StyleSheet } from "react-native"
import Icon from "react-native-vector-icons/Feather"

const HeaderHome = () => {
  return (
    <Box padding={4}>
      <Flex
        alignItems={"center"}
        direction="row"
        justifyContent={"space-between"}
      >
        <Text>Instagram</Text>
        <Box flex={1} />
        <Icon style={{ marginRight: 10 }} size={24} name="heart" />
        <Icon size={24} name="message-circle" />
      </Flex>
    </Box>
  )
}

export default HeaderHome

const styles = StyleSheet.create({})
