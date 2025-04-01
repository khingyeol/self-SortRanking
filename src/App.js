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
  extendTheme,
} from "@chakra-ui/react";
import React from "react";
import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider, useNavigate, Outlet } from "react-router-dom";
import Countdown from "CountdownPage/Countdown";
import TruzCustom from "TruzCustom/TruzCustom";
import CustomerStatus from "CustomerStatus/CustomerStatus";
import CountdownSuk from "CountdownPage/CountdownSuk";
import JapanFancon from "JapanFancon/JapanFancon";

const theme = extendTheme({
  colors: {
    purtaple: {
      '50': '#f8f7fb',
      '100': '#f3f0f7',
      '200': '#e7e4f0',
      '300': '#d5cfe3',
      '400': '#beb3d2',
      '500': '#8f76ab',
      '600': '#8f76ab',
      '700': '#80679a',
      '800': '#6b5681',
      '900': '#59486a',
      '950': '#3a2e47',
  },
  },
})

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
  // {
  //   path: "countdown-dy",
  //   Component: Countdown
  // },
  // {
  //   path: "countdown-suk",
  //   Component: CountdownSuk
  // },
  // {
  //   path: "truz-custom",
  //   Component: TruzCustom
  // },
  {
    path: "customer-status",
    Component: CustomerStatus
  },
  {
    path: "2025-japan-fancon",
    Component: JapanFancon
  },
  {
    path: "*",
    Component: HomePage
  }
])


function HomePage() {
  var img =
    "https://i.pinimg.com/474x/f8/61/b5/f861b56f481b6f416570f27e1ddbe38c.jpg";
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  
  let navigate = useNavigate(); 

  const onClickroute = (pathName) => {  
    navigate(pathName);
  }

  return (
    <>
      <div className="App">
        <header className="App-header">
          {/* <img src={img} className="App-logo" alt="logo" /> */}
          <Stack className="stack">
            <Heading as="h2">퍼플ꕀ😼🍠</Heading>
            <Text fontSize="2xl">
              {/* I'm still don't know the purpose of this website 55+ */}
            </Text>
            <Spacer />
            <Stack display='none' className="stack-btn" spacing="16px">
              {/* <Button size="lg" padding="20px" onClick={onOpen}>
                Click me 👆🏻
              </Button> */}
              <Divider />
              <Button
                size="lg"
                padding="20px"
                bgColor={"#FFEE8C"}
                onClick={() => onClickroute('countdown-dy')}
              >
                📅 Doyoung Countdown
              </Button>
              <Divider />
              <Button
                size="lg"
                padding="20px"
                bgColor={"#7f7ffc"}
                color={'white'}
                onClick={() => onClickroute('countdown-suk')}
              >
                📅  Hyunsuk Countdown
              </Button>
              <Divider />
              <Button
                size="lg"
                padding="20px"
                bgColor={"#89CFF0"}
                onClick={() => onClickroute('customer-status')}
              >
                📦 Customer Status
              </Button>
              {/* <Divider /> */}
              {/* <Button
                size="lg"
                padding="20px"
                bgColor={"#FFEE8C"}
                onClick={() => onClickroute('truz-custom')}
              >
                TRUZ Customize
              </Button> */}

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
    <ChakraProvider theme={theme}>
      <RouterProvider router={router}></RouterProvider>
    </ChakraProvider>
  );
}

export default App;
