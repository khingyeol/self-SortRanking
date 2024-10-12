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
  AccordionIcon,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
// @ts-ignore
import randomVideo from "assets/mbr/mbr_random.mp4";
import crocs_img from "assets/crocs_img.jpg";
import crocs_all from "assets/crocs_all.jpeg";
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  InfoOutlineIcon,
  StarIcon,
  ViewIcon,
} from "@chakra-ui/icons";
import PaymentDetail from "./Components/PaymentDetail";
import MbrItems from "./Components/MbrItems";
import Footer from "./Components/Footer";
import Address from "./Components/Address";

function CustomerStatus() {
  const csvUrl =
    "https://script.googleusercontent.com/macros/echo?user_content_key=x4MJk4HV3d5SliDHujbryjCcCKVZxIOLumqMvdynF9dti7YNr0O5aDAygYwyqZGeryonJbyi7gYrfQzZwmjq60FTyyOmFaz3m5_BxDlH2jW0nuo2oDemN9CCS2h10ox_1xSncGQajx_ryfhECjZEnBu3upqJUjaRu7_0LDKP20p4snDiVZdRN3tPLF4tGGBERP_5eoiPKusF5kwXkIxLkmaeLnkyXxDitTcw1CcojaElWreZ2z63Yg&lib=MVX27MvgmEuJ0aIAFVClAKwZwCnP0CvWQ";
  const [cusdata, setCusdata] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [togglePanel, setTogglePanel] = useState(false);
  const [errorPanel, setErrorPanel] = useState(false);
  const [pwPanel, setPwPanel] = useState(false);
  const [onLoad, setOnLoad] = useState(true);

  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);

  useEffect(() => {
    (async () => {
      fetchCSVData();
    })();
  }, []);

  const fetchCSVData = async () => {
    const options = {
      method: "GET",
    };

    fetch(csvUrl, options)
      .then(async (response) => {
        const ab = await response.json();
        setCusdata(ab);
        setOnLoad(false);
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
        setOnLoad(false);
      });
  };

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputStr(newValue);
  };

  const onClickSearch = () => {
    // const twitterAcc = e.twitter.toLowerCase()
    const inputAcc = inputStr.toLowerCase()
    if (cusdata.find((e) => e.twitter.toLowerCase() === inputAcc)) {
      const filtered = cusdata.filter((arr) => {
        if (arr.twitter.toLowerCase().includes(inputAcc)) {
          return arr;
        }
      });
      setDisplayData(filtered);
      console.log('filtered',filtered)
      if (filtered[0].phone) {
        setPwPanel(true);
        setErrorPanel(false);
        setTogglePanel(false);
      } else {
        setTogglePanel(true);
        setErrorPanel(false);
      }
    } else {
      setTogglePanel(false);
      setErrorPanel(true);
    }
  };

  const statusMapped = (status) => {
    switch (status) {
      case "ชำระแล้ว":
        return <Tag bgColor="teal.100">{status}</Tag>;
      case "ยังไม่ชำระ":
        return <Tag bgColor="red.100">{status}</Tag>;
      default:
        return <></>;
    }
  };

  const productTypeMapped = (type) => {
    switch (type) {
      case "mbr":
        return "เมืองโบราณ set C";
      case "crocs":
        return "หารการ์ด crocs";
      default:
        return "";
    }
  };

  const accordianPanelDisplay = (type) => {
    switch (type) {
      case "mbr":
        return (
          <>
            <Stack textAlign={"left"} gap={1} py={5} px={2}>
              <Address displayData={displayData} />
            </Stack>

            <Alert
              status="info"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                สถานะสินค้า
              </AlertTitle>
              <AlertDescription maxWidth="sm">
                รอกดของ 10:00 | 26 ตุลาคม
              </AlertDescription>
            </Alert>

            <Accordion
              pt={2}
              allowMultiple
              width="100%"
              rounded="lg"
            >
              <AccordionItem border="none" my={2}>
                <AccordionButton
                  // display={'none'}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bgColor={"white"}
                  borderRadius={"lg"}
                  p={2}
                >
                  <Text color={"gray.700"} fontWeight={500}>
                    หลักฐานการสุ่มการ์ด,โปสเตอร์
                  </Text>
                  <IconButton
                    icon={<ViewIcon />}
                    aria-label={"ViewIcon"}
                    borderRadius={"20px"}
                  />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <video controls>
                    <source src={randomVideo} type="video/mp4" />
                  </video>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none" my={2}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bgColor={"white"}
                  borderRadius={"lg"}
                  p={2}
                >
                  <Text color={"gray.700"} fontWeight={500}>
                    ช่องทางการโอนเงิน
                  </Text>
                  <Text color={"gray.500"} fontWeight={500}>
                    ชำระได้ถึง ~24 ต.ค.
                  </Text>
                  <IconButton
                    icon={<InfoOutlineIcon />}
                    aria-label={"InfoOutlineIcon"}
                    borderRadius={"20px"}
                  />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {/* - ช่องทางการโอนเงิน - */}
                  <PaymentDetail date="24 ต.ค." regis={"30฿"} ems={"50฿"} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <MbrItems />
          </>
        );
      case "crocs":
        return <>
                    <Stack textAlign={"left"} gap={1} py={5} px={2}>
              <Address displayData={displayData} />
            </Stack>

            <Alert
              status="info"
              variant="subtle"
              flexDirection="column"
              alignItems="center"
              justifyContent="center"
              textAlign="center"
              borderRadius={'lg'}
            // bgColor={'#B7E0FF'}
            >
              <AlertIcon boxSize="40px" mr={0} />
              <AlertTitle mt={4} mb={1} fontSize="lg">
                สถานะสินค้า
              </AlertTitle>
              <AlertDescription maxWidth="sm">
              ✅หิ้วแล้ว✅ รอส่งกลับ<br />
              <br />
              <b>เมมเบอร์ที่ยังว่าง:</b> ฮยอนซอก, จีฮุน,​โดยอง จองฮวาน
              </AlertDescription>
            </Alert>
            <Accordion
              pt={2}
              allowMultiple
              width="100%"
              rounded="lg"
            >
              <AccordionItem border="none" my={2}>
                <AccordionButton
                  // display={'none'}
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bgColor={"white"}
                  borderRadius={"lg"}
                  p={2}
                >
                  <Text color={"gray.700"} fontWeight={500}>
                    หลักฐานการหิ้ว
                  </Text>
                  <IconButton
                    icon={<ViewIcon />}
                    aria-label={"ViewIcon"}
                    borderRadius={"20px"}
                  />
                </AccordionButton>
                <AccordionPanel pb={4}>
                <img src={crocs_img} width="400px" alt="crocs_img" />
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem border="none" my={2}>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
                  bgColor={"white"}
                  borderRadius={"lg"}
                  p={2}
                >
                  <Text color={"gray.700"} fontWeight={500}>
                    ช่องทางการโอนเงิน
                  </Text>
                  {/* <Text color={"gray.500"} fontWeight={500}>
                    ชำระได้ถึง ~24 ต.ค.
                  </Text> */}
                  <IconButton
                    icon={<InfoOutlineIcon />}
                    aria-label={"InfoOutlineIcon"}
                    borderRadius={"20px"}
                  />
                </AccordionButton>
                <AccordionPanel pb={4}>
                  {/* - ช่องทางการโอนเงิน - */}
                  <PaymentDetail date="ไม่มีกำหนด" regis={"30฿"} ems={"50฿"} />
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
            <img src={crocs_all} alt="crocs_all" />
        </>;
      default:
        return <></>;
    }
  };

  const onCompletePin = (value) => {
    const pw = displayData[0].phone;
    if (value.length > 3) {
      if (pw.includes(value)) {
        setPwPanel(false);
        setTogglePanel(true);
        setErrorPanel(false);
      } else {
        setPwPanel(false);
        setErrorPanel(true);
      }
    }
  };
  return (
    <>
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

          {/* TODO: INPUT  */}
          <Stack>
            <Input
              width={"100%"}
              placeholder="กรอก Account Twitter มี @ เช่น @purtaple"
              onChange={(e) => handleInput(e)}
            />
            <Stack
              direction={"column"}
              spacing={3}
              align={"center"}
              alignSelf={"center"}
              position={"relative"}
            >
              <Button
                isLoading={onLoad}
                onClick={onClickSearch}
                colorScheme="purtaple"
                rounded={"full"}
                px={6}
              >
                ค้นหา
              </Button>
            </Stack>
          </Stack>
          {errorPanel && (
            <Box backgroundColor="red.50" py={4} borderRadius={"10px"}>
              <Text color={"red.800"} fontWeight={500}>
                ไม่พบชื่อผู้ใช้นี้ หรือใส่เบอร์โทรผิด
              </Text>
            </Box>
          )}
          <Modal
            initialFocusRef={initialRef}
            finalFocusRef={finalRef}
            isOpen={pwPanel}
            onClose={() => setPwPanel(false)}
            isCentered
          >
            <ModalOverlay />
            <ModalContent alignItems={"center"}>
              <ModalHeader>กรอกเลขท้ายเบอร์โทร 4 หลัก</ModalHeader>
              <ModalCloseButton />
              <ModalBody pb={8}>
                <HStack>
                  <PinInput
                    onChange={(e) => onCompletePin(e)}
                    onComplete={(e) => onCompletePin(e)}
                  >
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                    <PinInputField />
                  </PinInput>
                </HStack>
              </ModalBody>
            </ModalContent>
          </Modal>

          <Stack
            align={"center"}
            alignSelf={"center"}
            display={togglePanel ? "contents" : "none"}
          >
            {/* display NONE */}
            <Text color={"purtaple.500"} fontSize="3xl" fontWeight={600} display={'none'}>
              <Highlight
                query={"[หาร]"}
                styles={{
                  px: "3",
                  py: "2",
                  rounded: "full",
                  bg: "purtaple.200",
                }}
              >
                [หาร] เมืองโบราณ set C
              </Highlight>
            </Text>

            <Box>
              <Accordion allowToggle width="100%">
                {displayData.map((row, index) => (
                  <AccordionItem key={`acc-${index}`} border="none">
                    <AccordionButton
                      _expanded={{ bg: "" }}
                      display="flex"
                      justifyContent="space-between"
                      p={2}
                    >
                      <Card variant={"outline"} width="100%" bg={"transparent"}>
                        <CardHeader pb={0}>
                          <Box display={"flex"}>
                            <StarIcon color="blue.200" />
                            <Heading size="sm" textAlign={"left"}>
                              {productTypeMapped(row.type)}
                            </Heading>
                            <AccordionIcon ml={"auto"} />
                          </Box>
                        </CardHeader>
                        <CardBody>
                          <Grid templateColumns="repeat(4, 1fr)" gap={1}>
                            <Text>{row.member}</Text>
                            <Text>{row.random}</Text>
                            <Text>
                              <b>฿ {row.price}</b>
                            </Text>
                            <Text>{statusMapped(row.status)}</Text>
                          </Grid>
                        </CardBody>
                      </Card>
                    </AccordionButton>
                    <AccordionPanel bgColor={"purtaple.50"} borderRadius={"lg"}>
                      {accordianPanelDisplay(row.type)}
                    </AccordionPanel>
                  </AccordionItem>
                ))}
              </Accordion>
            </Box>

            <Box display={"none"}>
              <TableContainer>
                <Table size="sm">
                  <Thead>
                    <Tr>
                      {/* <Th>Twitter</Th> */}
                      <Th>เมมเบอร์</Th>
                      <Th>ของจากการสุ่ม</Th>
                      <Th>ราคา</Th>
                      <Th>สถานะ</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {displayData.map((row, index) => (
                      <Tr key={index}>
                        {/* <Td>{row.twitter}</Td> */}
                        <Td>{row.member}</Td>
                        <Td>{row.random}</Td>
                        <Td>
                          <b>{row.price}</b>
                        </Td>
                        <Td>{statusMapped(row.status)}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
              <Spacer />
            </Box>

            {/* <MbrItems /> */}
          </Stack>
        </Stack>
      </Container>
      {/* - FOOTER - */}
      <Footer />
    </>
  );
}
export default CustomerStatus;
