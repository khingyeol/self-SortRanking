import {
  chakra,
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
  Highlight,
  Square,
  SimpleGrid,
  HStack,
  Tag,
  TagLabel,
  TagLeftIcon,
  Avatar,
  Input,
  Icon,
  IconButton,
  CardFooter,
  List,
  ListIcon,
  ListItem,
  useColorModeValue,
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  useSafeLayoutEffect,
  Card,
  CardBody,
  CardHeader,
  StackDivider,
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  FormControl,
  FormLabel,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  PinInput,
  PinInputField,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
// @ts-ignore
import randomVideo from "assets/mbr/mbr_random.mp4";
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  InfoOutlineIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import PaymentDetail from "./Components/PaymentDetail";
import MbrItems from "./Components/MbrItems";

function ProductDetail() {
  return (
    <Container maxW={"3xl"}>
      <Stack
        as={Box}
        textAlign={"center"}
        spacing={{ base: 8, md: 14 }}
        py={{ base: 20, md: 36 }}
      >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          >
            ตรวจสอบสถานะ <br />
            <Text color={"purtaple.400"} fontSize="3xl">
              퍼플ꕀ😼🍠
            </Text>
            <Text color={"#bfbfbf"} fontWeight={400} fontSize="xl">
              @purtaple
            </Text>
          </Heading>

          <Stack
            align={"center"}
            alignSelf={"center"}
            // display={togglePanel ? "contents" : "none"}
          >

</Stack>

      </Stack>
    </Container>
  );
}
