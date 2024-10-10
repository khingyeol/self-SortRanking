// @ts-nocheck
import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogContent,
  AlertDialogOverlay,
  AlertDialogCloseButton,
  Box,
  Image,
  Divider,
  Button,
  Text,
  Heading,
  Stack,
  Spacer,
  useDisclosure,
  Center,
  Grid,
  GridItem,
  Container,
  Flex,
  Square,
  SimpleGrid,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Avatar,
  IconButton,
  position,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";

const avatarsData = require("../TruzCustom/charactors.json");

function TruzCustom() {
  const index = "0";
  //   const filePath = "/characters/TRUZ_Chilli.png";
  const decPath = "/decorators/head/dec-head-1.png";

  const baseImgUrl = "http://192.168.1.109:3000";

  const [decoUrl, setDecoUrl] = useState("");
  const [avUrl, setAvUrl] = useState("");

  //   styles
  const outerBoxStyles = {
    // boxSize: '250px',
    p: "10",
    backgroundColor: "grey",
  };

  const pfpDisplayBox = {
    // overflow: "hidden",
    // position: "relative",
    // width: '',
    height: "500px",
  };

  const pfpAvatar = {
    position: "absolute",
    top: "calc(100%*0.09)",
    left: "calc(500px*0.09)",
    width: "calc(100%*0.09)",
    height: "calc(100%*0.09)",
  };

  const pfpDecor = {
    position: "absolute",
    top: "0",
    left: "0",
  };

  return (
    <div>
      <Text fontSize="4xl" fontWeight="bold" textAlign="center">
        TRUZ Decor
      </Text>

      <Grid
        templateColumns={{ md: "repeat(2, 2fr)", sm: "repeat(1, 2fr)" }}
        gap={6}
      >
        <GridItem rowSpan={2} bg="tomato">
          <Box sx={outerBoxStyles}>
            <div key={index}>
              Choose Avatar
              <>
                {avatarsData.map((avatar, index) => {
                  return (
                    <IconButton
                      colorScheme="teal"
                      sx={{
                        backgroundColor: avUrl.includes(avatar.filePath)
                          ? "green"
                          : "",
                        ":hover": {
                          backgroundColor: "gray",
                        },
                      }}
                      className={
                        "select-avatar" + avUrl.includes(avatar.filePath)
                          ? "selected"
                          : "ghost"
                      }
                      variant="outline"
                      border="2px"
                      height={"100px"}
                      icon={
                        <Image src={avatar.filePath} height="90px" alt="abc" />
                      }
                      onClick={(e) => {
                        setAvUrl(baseImgUrl + avatar.filePath);
                      }}
                    ></IconButton>
                  );
                })}
              </>
            </div>
          </Box>
          <Box
            sx={{
              overflow: "hidden",
              position: "relative",
              width: "500px",
              height: "500px",
            }}
          >
            {/* <div className="pfp-display"> */}
            {avUrl === "" ? (
              <>
                <div> CHOOSE TRUZ </div>
              </>
            ) : (
              <>
                <Image
                  id="avatar"
                  src={avUrl}
                  sx={{}}
                  //   className={"pfp-avatar"}
                  draggable={false}
                />
                <Image
                  id="decoration"
                  src={decoUrl}
                  sx={pfpDecor}
                  //   className="pfp-decor"
                  draggable={false}
                />
              </>
            )}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          <Box sx={outerBoxStyles}>
            <div key={index}>
              Choose Decorations
              <button
                key={index}
                type="button"
                data-tooltip-content={"Chilli"}
                className="select-avatar"
                onClick={(e) => {
                  decoUrl == ""
                    ? setDecoUrl(baseImgUrl + decPath)
                    : setDecoUrl("");
                }}
              >
                <Image src={decPath} alt="abc" />
              </button>
            </div>
          </Box>
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          <Box>Slide</Box>
        </GridItem>
        <GridItem rowSpan={2} bg="tomato">
          <Box>Save</Box>
        </GridItem>
      </Grid>
    </div>
  );
}

export default TruzCustom;
