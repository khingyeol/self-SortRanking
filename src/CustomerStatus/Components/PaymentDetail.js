import { CopyIcon } from "@chakra-ui/icons";
import { Stack, Heading, Text, Box, Spacer, Button } from "@chakra-ui/react";
// @ts-ignore
import qrPtp from "assets/mbr/qr_ptp.JPG";
import React from "react";

function PaymentDetail({ date, regis, ems }) {
  return (
    <>
      <Stack
        direction={"column"}
        spacing={3}
        align={"center"}
        alignSelf={"center"}
        position={"relative"}
      >
        {regis != "" && ems != "" && (
          <>
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
                ลงทะเบียน: {regis}
                <br />
                EMS: {ems}
              </Text>
            </Box>
          </>
        )}
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
          {date != "" && (
            <Text color={"red.800"} fontWeight={500}>
              ชำระได้ถึง {date}
            </Text>
          )}
        </Box>
      </Stack>
    </>
  );
}

export default PaymentDetail;
