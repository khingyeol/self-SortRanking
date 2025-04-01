import React, { useState } from "react";
import {
  Image,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  Box,
  Button,
  SimpleGrid,
  IconButton,
} from "@chakra-ui/react";
import { AddIcon, MinusIcon } from "@chakra-ui/icons";

const ModalImage = ({ src, alt }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 800);
  const [isOpen, setIsOpen] = useState(false);
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [lastTouch, setLastTouch] = useState(null);

  const openModal = () => {
    setIsOpen(true);
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };
  const closeModal = () => {
    setIsOpen(false);
    // setScale(1)
  };

  const handleWheel = (e) => {
    e.preventDefault();
    setScale((prevScale) => {
      const newScale = prevScale + (e.deltaY < 0 ? 0.1 : -0.1);
      return newScale < 1 ? 1 : newScale;
    });
  };

  const handleMouseMove = (e) => {
    if (scale === 1) return;
    setPosition((prev) => ({
      x: prev.x + e.movementX,
      y: prev.y + e.movementY,
    }));
  };

  const handleTouchMove = (e) => {
    if (scale === 1 || e.touches.length !== 1) return;
    const touch = e.touches[0];
    if (lastTouch) {
      setPosition((prev) => ({
        x: prev.x + (touch.clientX - lastTouch.clientX),
        y: prev.y + (touch.clientY - lastTouch.clientY),
      }));
    }
    setLastTouch(touch);
  };

  const handleTouchEnd = () => {
    setLastTouch(null);
  };

  return (
    <>
      <Image
        src={src}
        alt={alt}
        cursor="pointer"
        onClick={openModal}
        // maxW="300px"
        borderRadius="md"
        // shadow="md"
      />

      <Modal isOpen={isOpen} onClose={closeModal} size="4xl" isCentered>
        <ModalOverlay />
        <ModalContent bg="transparent" boxShadow="none">
          <ModalCloseButton color="orange" bgColor="white" />
          <ModalBody display="flex" justifyContent="center" alignItems="center">
            <Box
              overflow="hidden"
              cursor={scale > 1 ? "grab" : "default"}
              onWheel={isMobile ? handleWheel : null}
              onMouseMove={isMobile ? handleMouseMove : null}
              onTouchMove={isMobile ? handleTouchMove : null}
              onTouchEnd={isMobile ? handleTouchEnd : null}
            >
              <Image
                src={src}
                alt={alt}
                maxW="90vw"
                maxH="90vh"
                borderRadius="md"
                transform={`scale(${scale}) translate(${position.x}px, ${position.y}px)`}
                transition="transform 0.1s ease-out"
              />
            </Box>
          </ModalBody>
          <SimpleGrid
            columns={2}
            spacing={1}
            display={"flex"}
            // display={{:'flex', xl: 'none'}}
            // display={{sm: 'flex', md: "flex", xl: "none"  }}
            justifyContent="center"
            alignItems="center"
          >
            <IconButton
              display={{ xl: "none" }}
              icon={<AddIcon />}
              aria-label={"AddIcon"}
              borderRadius={"md"}
              onClick={() =>
                setScale((prevScale) => {
                  const newScale = prevScale + 1;
                  return newScale;
                })
              }
            />
            <IconButton
              display={{ xl: "none" }}
              icon={<MinusIcon />}
              aria-label={"MinusIcon"}
              borderRadius={"md"}
              onClick={() =>
                setScale((prevScale) => {
                  const newScale = prevScale - 1;
                  return newScale <= 1 ? 1 : newScale;
                })
              }
            />
          </SimpleGrid>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalImage;
