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


const Timer = () => {
    const [time, setTime] = useState(25 * 60); // 25 minutes in seconds
  
    useEffect(() => {
      let interval = null;
  
      if (time > 0) {
        interval = setInterval(() => {
          setTime((prevTime) => prevTime - 1);
        }, 1000);
      }
  
      return () => {
        clearInterval(interval);
      };
    }, [time]);
  
    const formatTime = (seconds) => {
      const minutes = Math.floor(seconds / 60);
      const remainingSeconds = seconds % 60;
  
      return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
    };
  
    return (
      
        formatTime(time)
      
    );
  };
  

function showTime() {

//   document.getElementById("MyClockDisplay").innerText = returnText(weversePost);
//   document.getElementById("MyClockDisplay").textContent =
//     returnText(weversePost);

//   document.getElementById("MyClockDisplay2").innerText = returnText(latestPost);
//   document.getElementById("MyClockDisplay2").textContent =
//     returnText(latestPost);

  setTimeout(showTime, 1000);
}

const DaysConverter = (num) => {
    if (num < 2) {
        return " Day \n"
    }
    return " Days "
}

const FindDiffTime = (date) => {
    let newCTime = new Date();
    const diffTime = Math.abs(date - newCTime);
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24)); 

    var days = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    var hours = Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((diffTime % (1000 * 60)) / 1000);
    var time = hours + " hours\n" + minutes + " minutes\n" + seconds + " seconds";
    var allText = `${days} ${DaysConverter(days)}\n ${time}`
    return allText
}

function Countdown() {
    var igPost = "2024-09-25T03:41:53.000Z";
    var weversePost = "2024-09-24T05:42:25.934Z";
  
    let weverseTime = new Date(weversePost);
    let instaTime = new Date(igPost);

    const color_bg = '#292929'
    const color_text = "#f7f7f7"
    const color_red = "#d8403a"
    const color_purple = "#7f7ffc"
    
    const [ctime, setCtime] = useState('');
    const [itime, setItime] = useState('');
  
    const UpdateTime = () => {
    const diffIfTime = Math.abs()

      setCtime(FindDiffTime(weverseTime));
      setItime(FindDiffTime(instaTime))
    };
  
      setInterval(UpdateTime, 100);
  return (
    <>
      <div textAlign="center" style={{backgroundColor: color_bg}}>
        {/* <Container textAlign="center"> */}
          <Text fontSize="6xl" color={color_red} fontWeight='bold' textAlign='center'>MISSING</Text>
          <SimpleGrid columns={2} spacing={10}>
            <Box textAlign='center' display='flex' flexDirection='column'>
            <Text color={color_text} fontSize="3xl" whiteSpace={'pre-wrap'} fontFamily='Orbitron'>{ctime}</Text>
            {/* <Text fontSize="3xl" fontFamily='Orbitron'>{ctime}</Text> */}
              <Text fontSize="xl">since Doyoung latest post on Weverse.. </Text>
              {/* <Tag size="lg" colorScheme="#00d6ae" borderRadius="full">
                <Avatar
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS7AgoQfUw6aChMRVDnIdO49RVR_cErzUkH1A&s"
                  size="xs"
                //   name="Segun Adebayo"
                  ml={-1}
                  mr={2}
                />
                <TagLabel>Weverse</TagLabel>
              </Tag> */}
              <Image src="https://i.imgur.com/jLm7M6g.png" />
            </Box>
            <Box textAlign='center' display='flex' flexDirection='column'>
            <Text color={color_text} fontSize="3xl" whiteSpace={'pre-wrap'} fontFamily='Orbitron'>{itime}</Text>

              <Text fontSize="xl">
                since Doyoung latest post on Instagram..{" "}
              </Text>
              <iframe
                src="https://www.instagram.com/p/DAU06kSPRg2/embed"
                width="calc(100% - 2px)"
                height="480"
              ></iframe>
            </Box>
          </SimpleGrid>
        {/* </Container> */}
      </div>
    </>
  );
}

export default Countdown;
