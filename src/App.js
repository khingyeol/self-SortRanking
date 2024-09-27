import logo from "./logo.svg";
import "./App.css";
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
  ChakraProvider,
  Text,
  Heading,
  Stack,
  Spacer,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
import Countdown from "CountdownPage/Countdown";

const router = createBrowserRouter([
  {
    path: "/",
    Component: HomePage,
    children: [
      {
        path: "child",
        Component: () => {
          return <>
          BABY
          </>
        }
        
      }
    ]
  },
  {
    path: "countdown",
    Component: Countdown
  }
])


function HomePage() {
  var img =
    "https://i.pinimg.com/474x/f8/61/b5/f861b56f481b6f416570f27e1ddbe38c.jpg";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  
  let navigate = useNavigate(); 

  const onClickroute = () => {  
    let path = `countdown`; 
    navigate(path);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src={img} className="App-logo" alt="logo" />
          <Stack className="stack">
            <Heading as="h2">Hi, hello</Heading>
            <Text fontSize="2xl">
              I'm still don't know the purpose of this website 55+
            </Text>
            <Spacer />
            <Stack className="stack-btn" spacing="16px">
              <Button size="lg" padding="20px" onClick={onOpen}>
                Click me 👆🏻
              </Button>
              <Divider />
              <Button
                size="lg"
                padding="20px"
                bgColor={"#89CFF0"}
                onClick={onClickroute}
              >
                📅 Doyoung Countdown
              </Button>
              <Outlet />
              {/* <Button size="lg">ss</Button> */}
            </Stack>
          </Stack>
        </header>
      </div>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              โดชเวเป็นแฟนกันป้ะ?
            </AlertDialogHeader>

            {/* <AlertDialogBody>
                Are you sure? You can't undo this action afterwards.
              </AlertDialogBody> */}

            <AlertDialogFooter gap={2}>
              <Button ref={cancelRef} onClick={onClose} flex="1">
                ใช่
              </Button>
              <Button colorScheme="green" onClick={onClose} flex="1">
                ใช่
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}

function App() {
  return (
    <ChakraProvider>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
