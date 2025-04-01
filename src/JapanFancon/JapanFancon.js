import React, { useEffect, useState } from "react";
import {
  Box,
  Container,
  Heading,
  Stack,
  Text,
  Image,
  SimpleGrid,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Button,
  Spacer,
} from "@chakra-ui/react";
import ModalImage from "./Components/ModalImage";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";

function JapanFancon() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => setIsOpen(true);
  const closeModal = () => setIsOpen(false);

  const EmbeddedWebsite = () => {
    return (
      <Box w="100%" h="80vh" overflow="hidden">
        <iframe
          src="https://ygex.jp/treasure/goods/items.php?id=1002477"
          width="100%"
          height="100%"
          style={{ border: "none" }}
          title="Treasure Goods"
        />
      </Box>
    );
  };

  return (
    <>
      <Container maxW={"3xl"}>
        <Stack
          as={Box}
          textAlign={"center"}
          spacing={{ base: 8, md: 14 }}
          pt={{ base: 20, md: 36 }}
          py={10}
        >
          <Heading
            fontWeight={600}
            fontSize={{ base: "2xl", sm: "4xl", md: "4xl" }}
          >
            หิ้ว แฟนมีตญี่ปุ่น🇯🇵
            <br />
            FAN CONCERT [SPECIAL MOMENT] IN JAPAN
            <br />
            <Text color={"purtaple.500"} fontSize="3xl">
              🍠 รอบฟุกุโอกะ 5-6 May
              <br />
            </Text>
            <Text color={"gray.500"} fontSize="2xl">
              ✈️ถึงไทย 9-12 April
            </Text>
            <Text color={"#bfbfbf"} fontWeight={400} fontSize="xl">
              퍼플ꕀ😼🍠 | @purtaple
            </Text>
          </Heading>

          <div>
            <SimpleGrid columns={2} spacing={1}>
              <ModalImage
                src="https://pbs.twimg.com/media/Gm95QLLaEAA_mVh?format=jpg&name=large"
                alt={"goods-1"}
              />
              <ModalImage
                src="https://pbs.twimg.com/media/Gm95QLKbYAAOgG2?format=jpg&name=large"
                alt={"goods-2"}
              />
            </SimpleGrid>
            <Text color={"gray.500"} fontWeight={400} fontSize="md">
              คลิกที่รูปเพื่อดูภาพเต็ม
            </Text>
          </div>
          <Text color={"gray.600"} fontSize="2xl">
            🛍️ซื้อครบ 6000 เยน รับ Photo Sticker 1 ชิ้น (สุ่ม)
          </Text>
          <Box display="flex" justifyContent="center" alignItems="center">
          สนใจทัก dm &ensp;
          <Button
          width={'120px'}
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
          </Box>
          
        </Stack>
        
        <Text color={"gray.500"} fontSize="2xl" textAlign="center">
          🛍️ภาพสินค้าเพิ่มเติม
        </Text>
        <EmbeddedWebsite />
      </Container>
    </>
  );
}

export default JapanFancon;
