import { CheckIcon, CopyIcon } from "@chakra-ui/icons";
import { Stack, Heading, Text,Highlight, Box, Spacer, Button, List, ListIcon, ListItem, useColorModeValue } from "@chakra-ui/react";
import img from "assets/mbr/mbr_collection-c.png";
import React from "react";

function MbrItems() {

    return (
        <>
        <Box
              // maxW={'330px'}
              w={"full"}
              bg={useColorModeValue("white", "gray.800")}
              // boxShadow={'2xl'}
              rounded={"md"}
              overflow={"hidden"}
            >
              <Box bg={useColorModeValue("gray.50", "gray.900")} px={6} py={5}>
                <List spacing={0}>
                  <ListItem>
                    <Text color={"gray.800"} fontWeight={500}>
                      <Highlight
                        query={"1 เมมเบอร์"}
                        styles={{
                          px: "2",
                          py: "1",
                          rounded: "full",
                          bg: "teal.100",
                        }}
                      >
                        1 เมมเบอร์จะได้
                      </Highlight>
                    </Text>
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    PHOTOCARD (ตามเมม) 1 ใบ
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    PASSPORT 1 ใบ
                  </ListItem>
                  <ListItem>
                    <ListIcon as={CheckIcon} color="green.400" />
                    ENTRANCE TICKET 1 ใบ
                  </ListItem>
                </List>
              </Box>
            </Box>
            <img src={img} alt="mbr_collection-c" />
        </>
    )
}

export default MbrItems;