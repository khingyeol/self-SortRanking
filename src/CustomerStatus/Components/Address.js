import { chakra, Flex, Text, Spacer, Button, Stack } from "@chakra-ui/react";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import React from "react";

function Address({displayData}) {

    return (
        <>
         <Text
                  fontWeight={800}
                  as={"span"}
                  position={"relative"}
                  _after={{
                    content: "''",
                    width: "90px",
                    height: "30%",
                    position: "absolute",
                    bottom: 1,
                    left: 0,
                    bg: "blue.100",
                    zIndex: -1,
                  }}
                >
                  📦ที่อยู่จัดส่ง
                </Text>
                {displayData.map((row, index) =>
                  row.address ? (
                    <div key={index}>
                      <Text fontSize={"14px"} color="gray.800">
                        จัดส่ง {row.shipping}
                      </Text>
                      <Stack direction={"row"} align={"center"}>
                        <Text fontSize={"14px"} fontWeight={800}>
                          {row.name}
                        </Text>
                        <Text fontSize={"12px"} color="gray.500">
                          ({row.phone})
                        </Text>
                      </Stack>
                      <Text fontSize={"14px"}>{row.address}</Text>
                    </div>
                  ) : (
                    <Text fontSize={"14px"}>-</Text>
                  )
                )}
        </>
    )
}

export default Address;