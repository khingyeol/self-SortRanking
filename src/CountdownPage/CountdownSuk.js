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

function CountdownSuk() {
  var igPost = "2024-08-16T13:20:25.000Z";
  var weversePost = "2024-09-23T11:10:00.000Z";
  var twitterPost = "2024-09-27T15:26:25.000Z";

  let weverseTime = new Date(weversePost);
  let instaTime = new Date(igPost);
  let twitTime = new Date(twitterPost);

  const color_bg = "#292929";
  const color_text = "#f7f7f7";
  const color_red = "#d8403a";
  const color_purple = "#7f7ffc";

  const [ctime, setCtime] = useState("");
  const [itime, setItime] = useState("");
  const [twtime, setTwtime] = useState("");

  const UpdateTime = () => {
    setCtime(FindDiffTime(weverseTime));
    setItime(FindDiffTime(instaTime));
    setTwtime(FindDiffTime(twitTime));
  };

  function TwitterPost() {
    return (
      <>
        <iframe
          loading="lazy"
          //   width="100%"
          height="100%"
          src="https://platform.twitter.com/embed/Tweet.html?frame=false&hideCard=false&hideThread=false&id=1839688050127114427&theme=light"
          style={{ height: "100%" }}
          frameborder="0"
          scrolling="no"
        ></iframe>
      </>
    );
  }

  setInterval(UpdateTime, 100);
  return (
    <>
      <div textAlign="center" style={{ backgroundColor: color_bg }}>
        {/* <Container textAlign="center"> */}
        <Text
          fontSize={{ sm: "4xl", md: "6xl" }}
          color={color_red}
          fontWeight="bold"
          textAlign="center"
        >
          MISSING
        </Text>

        <SimpleGrid
          padding={{ sm: 5, md: 20 }}
          columns={{ sm: 1, md: 2, xl: 3 }}
          spacing={1}
          color={color_text}
          textAlign="center"
        >
          <Box
            alignItems={"start"}
            alignContent={"center"}
            height={{ sm: "600px", md: "620px" }}
            // bgColor={"red"}
          >
            <Text
              fontSize="3xl"
              w={"200em"}
              whiteSpace={"pre-wrap"}
              fontFamily="Afacad Flux"
              fontWeight={700}
            >
              {twtime}
            </Text>
            <Box
              w={"800em"}
              justifyContent={"center"}
            >
                 <Text
              fontSize="2xl"
              color={color_purple}
              fontFamily="Afacad Flux"
              fontWeight={500}
            >{weverseTime.toDateString()}</Text>
              <Image src={postWvs} />
            </Box>
          </Box>

          <Box
            alignContent={"center"}
            height={{ sm: "560px", md: "620px" }}
          >
            <Text
              fontSize="3xl"
              w={"200em"}
              whiteSpace={"pre-wrap"}
              fontFamily="Afacad Flux"
              fontWeight={700}
            >
              {ctime}
            </Text>
            <Box
              w={"800em"}
              justifyContent={"center"}
            >
                <Text
              fontSize="2xl"
              color={color_purple}
              fontFamily="Afacad Flux"
              fontWeight={500}
            >{twitTime.toDateString()}</Text>
              <Image src={postTwt} />
            </Box>
          </Box>
          <Box
            alignContent={"center"}
          >
            <Text
              fontSize="3xl"
              w={"20rem"}
              whiteSpace={"pre-wrap"}
              fontFamily="Afacad Flux"
              fontWeight={700}
            >
              {itime}
            </Text>

            <Box>
            <Text
              fontSize="2xl"
              color={color_purple}
              fontFamily="Afacad Flux"
              fontWeight={500}
            >
                {instaTime.toDateString()}</Text>
                <Image src={postIns} />
            </Box>
          </Box>
        </SimpleGrid>

        {/* </Container> */}
      </div>
    </>
  );
}

export default CountdownSuk;
