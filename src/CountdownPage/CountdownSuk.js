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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import postWvs from "assets/post_wvs.png";
import postIns from "assets/post_ins.png";
import postTwt from "assets/post_twt.png";

const color_bg = "#292929";
const color_text = "#f7f7f7";
const color_red = "#d8403a";
const color_purple = "#7f7ffc";

const DaysConverter = (num) => {
  if (num < 2) {
    return " Day \n";
  }
  return " Days ";
};

const FindDiffTime = (date) => {
  let newCTime = new Date();
  const diffTime = Math.abs(date - newCTime);
  const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));

  var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
  var hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
  var time = hours + " hours\n" + minutes + " minutes\n" + seconds + " seconds";
  var allText = `${days} ${DaysConverter(days)}\n ${time}`;
  return allText;
};

const ContentPost = (count, date, src) => {
    return (
        <Box textAlign='center' display='flex' flexDirection='row'>
             <Text
              fontSize="3xl"
            //   w={"200em"}
              whiteSpace={"pre-wrap"}
              fontFamily="Afacad Flux"
              fontWeight={700}
            >
              {count}
            </Text>
            <Box
            //   w={"800em"}
            width={{sm: "70%", md: "60%"}}
              justifyContent={"center"}
            >
                 <Text
              fontSize="2xl"
              color={color_purple}
              fontFamily="Afacad Flux"
              fontWeight={500}
            >{date}</Text>
              <Image src={src} />
            </Box>
        </Box>
    )
}

function CountdownSuk() {
  var igPost = "2024-08-16T13:20:25.000Z";
  var weversePost = "2024-09-23T11:10:00.000Z";
  var twitterPost = "2024-09-27T15:26:25.000Z";

  let weverseTime = new Date(weversePost);
  let instaTime = new Date(igPost);
  let twitTime = new Date(twitterPost);

  const [ctime, setCtime] = useState("");
  const [itime, setItime] = useState("");
  const [twtime, setTwtime] = useState("");

  const UpdateTime = () => {
    setCtime(FindDiffTime(weverseTime));
    setItime(FindDiffTime(instaTime));
    setTwtime(FindDiffTime(twitTime));
  };

  setInterval(UpdateTime, 100);
  return (
    <>
      <div textAlign="center" style={{ backgroundColor: color_bg }}>
        {/* <Container textAlign="center"> */}
        <Center>
            <Text
          fontSize={{ sm: "4xl", md: "6xl" }}
          color={color_red}
          fontWeight="bold"
          textAlign="center"
          pl={"50px"}
        >
            
          MISSING
        </Text>
        <Image width={"50px"} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQKyfy7-31Zc5HwxXGRu31_LHhPbf6Igqp0eg&s" />

        </Center>
        

        <SimpleGrid
          padding={{ sm: 5, md: 20 }}
          columns={{ sm: 1, md: 2, xl: 3 }}
          spacing={1}
          color={color_text}
          textAlign="center"
        >
          {ContentPost(twtime, twitTime.toDateString(), postTwt)}

            {ContentPost(ctime, weverseTime.toDateString(), postWvs)}
            {ContentPost(itime, instaTime.toDateString(), postIns)}


         
        </SimpleGrid>

        {/* </Container> */}
      </div>
    </>
  );
}

export default CountdownSuk;
