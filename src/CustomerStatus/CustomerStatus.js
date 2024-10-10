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
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import randomVideo from "assets/mbr/mbr_random.mp4";
import img from "assets/mbr/mbr_collection-c.png";
import qrPtp from "assets/mbr/qr_ptp.JPG";
import {
  CheckIcon,
  ChevronDownIcon,
  CopyIcon,
  DeleteIcon,
  InfoOutlineIcon,
  ViewIcon,
} from "@chakra-ui/icons";

// @ts-ignore
function parseCSV(csvText) {
  const rows = csvText.toString().split(/\r?\n/); // Split CSV text into rows, handling '\r' characters
  const headers = rows[0].toString().split(","); // Extract headers (assumes the first row is the header row)
  const data = []; // Initialize an array to store parsed data
  for (let i = 1; i < rows.length; i++) {
    const rowData = rows[i].split(","); // Split the row, handling '\r' characters
    const rowObject = {};
    for (let j = 0; j < headers.length; j++) {
      rowObject[headers[j]] = rowData[j];
    }
    data.push(rowObject);
  }
  return data;
}

function CustomerStatus() {
  const csvUrl =
    "https://docs.google.com/spreadsheets/d/e/2PACX-1vQsxvZoGNsNyRBm4HxuDGs-F2xtOsB_JRL4OuqB16kDTfjW09LyddmAOi7MfphZ5SZUXN2I6u70rbtI/pub?output=csv";
  const [cusdata, setCusdata] = useState([]);
  const [displayData, setDisplayData] = useState([]);
  const [inputStr, setInputStr] = useState("");
  const [togglePanel, setTogglePanel] = useState(false);
  const [errorPanel, setErrorPanel] = useState(false);

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
        const ab = await response.text();
        console.log(parseCSV(ab));
        const text = `,twitter,member,random,price,shipping,status,address
,@purtaple,ฮยอนซอก,,800,,ยังไม่ชำระ,
,@purtaple,โดยอง,,,,,
,@_hyunyo,แจฮยอก,poster no.4,800,,ยังไม่ชำระ,
,@_hyunyo,อาซาฮิ,,,,,
,@pngprmxx,จองอู,,800,,ชำระแล้ว,
,@pngprmxx,โยชิ,group pc no.1,,,,
,@kstwrp,จีฮุน,poster no.3,400,,ชำระแล้ว,
,@julyjul_pp,จุนกยู,,400,,ยังไม่ชำระ,
,@sojungsocool,ฮารุโตะ,group pc no.2,800,,ยังไม่ชำระ,
,@sojungsocool,จองฮวาน,,,,,`
        setCusdata(parseCSV(text));
      })
      .catch((error) => {
        console.error("Error fetching CSV data:", error);
      });
  };

  const handleInput = (e) => {
    const newValue = e.target.value;
    setInputStr(newValue);
  };

  const onClickSearch = () => {
    if (cusdata.find((e) => e.twitter === inputStr.toLowerCase())) {
      const filtered = cusdata.filter((arr) => {
        if (arr.twitter.includes(inputStr)) {
          return arr;
        }
        console.log("arr");
        // arr.twitter.includes(inputStr)
      });
      console.log("filtered", filtered);
      setDisplayData(filtered);
      console.log("displayData", displayData);
      setTogglePanel(true);
      setErrorPanel(false);
    } else {
      setTogglePanel(false);
      setErrorPanel(true);
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
                ไม่พบชื่อผู้ใช้นี้
              </Text>
            </Box>
          )}

          <Stack
            align={"center"}
            alignSelf={"center"}
            display={togglePanel ? "contents" : "none"}
          >
            <Text color={"purtaple.500"} fontSize="3xl" fontWeight={600}>
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
                        <Td>{row.price}</Td>
                        <Td>{row.status}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Box>

            <Accordion allowMultiple width="100%" rounded="lg">
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
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

                  {/* <Text fontSize="md">What is Chakra UI?</Text>
              <ChevronDownIcon fontSize="24px" /> */}
                </AccordionButton>
                <AccordionPanel pb={4}>
                  <video controls>
                    <source src={randomVideo} type="video/mp4" />
                  </video>
                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <AccordionButton
                  display="flex"
                  alignItems="center"
                  justifyContent="space-between"
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
                  <Stack
                    direction={"column"}
                    spacing={3}
                    align={"center"}
                    alignSelf={"center"}
                    position={"relative"}
                  >
                    <Heading fontSize={{ sm: "xl", lg: "2xl" }}>
                      <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                          content: "''",
                          width: "full",
                          height: "30%",
                          position: "absolute",
                          bottom: 1,
                          left: 0,
                          bg: "blue.100",
                          zIndex: -1,
                        }}
                      >
                        📮ค่าส่งไปรษณีย์ไทย
                      </Text>
                    </Heading>

                    <Box
                      borderColor="blue.100"
                      borderWidth="2px"
                      px={5}
                      py={2}
                      borderRadius={"10px"}
                    >
                      <Text color={"purtaple.950"} fontWeight={500}>
                        ลงทะเบียน: 30฿
                        <br />
                        EMS: 50฿
                      </Text>
                    </Box>
                    <Spacer />
                    <Heading fontSize={{ sm: "xl", lg: "2xl" }}>
                      <Text
                        as={"span"}
                        position={"relative"}
                        _after={{
                          content: "''",
                          width: "full",
                          height: "30%",
                          position: "absolute",
                          bottom: 1,
                          left: 0,
                          bg: "purtaple.300",
                          zIndex: -1,
                        }}
                      >
                        💸เลขบัญชี
                      </Text>
                    </Heading>

                    <Box bg="purtaple.100" px={3} py={1} borderRadius={"10px"}>
                      <Stack direction={"row"} align={"center"}>
                        <Text color={"purtaple.950"} fontWeight={500}>
                          พร้อมเพย์ 098-274-3171
                        </Text>
                        <Button
                          colorScheme="purtaple"
                          variant="ghost"
                          rightIcon={<CopyIcon />}
                          onClick={() => {
                            navigator.clipboard.writeText("0982743171");
                          }}
                        >
                          คัดลอก
                        </Button>
                      </Stack>
                    </Box>
                    <img src={qrPtp} width="400px" alt="qrPtp" />

                    <Text color={"purtaple.950"} fontWeight={500}>
                      ชำระแล้วให้แจ้งสลิป + ชื่อที่อยู่ใน dm ได้เลยค่า
                    </Text>
                    <Box
                      backgroundColor="red.50"
                      px={4}
                      py={2}
                      width="100%"
                      borderRadius={"10px"}
                    >
                      <Text color={"red.800"} fontWeight={500}>
                        ชำระได้ถึง ~24 ต.ค.
                      </Text>
                    </Box>
                  </Stack>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

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
                    {/* <ListIcon as={CheckIcon} color="green.400" /> */}
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
          </Stack>
        </Stack>
      </Container>

      <chakra.footer>
        <Flex
          direction="row"
          gap={2}
          pos="fixed"
          bottom={0}
          w="full"
          px={6}
          py={4}
          align="center"
          bg="white"
        >
          <Spacer />
          <Button
            borderRadius={"20px"}
            leftIcon={<TwitterIcon width={"20px"} />}
            colorScheme="purtaple"
            variant="outline"
            onClick={() => {
              window.open("https://x.com/purtaple", "_blank").focus();
            }}
          >
            purtaple
          </Button>
          <Button
            borderRadius={"20px"}
            colorScheme="purtaple"
            variant="ghost"
            onClick={() => {
              window
                .open(
                  "https://x.com/intent/tweet?text=%23rv_purtaple%20",
                  "_blank"
                )
                .focus();
            }}
          >
            เขียนรีวิว #rv_purtaple
          </Button>

          <Spacer />
        </Flex>
      </chakra.footer>
    </>
  );
}
export default CustomerStatus;
