import { chakra, Flex, Spacer, Button } from "@chakra-ui/react";
import { ReactComponent as TwitterIcon } from "assets/twitter.svg";
import React from "react";

function Footer() {

    return (
        <>
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
    )
}

export default Footer;