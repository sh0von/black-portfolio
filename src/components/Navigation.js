import React from "react";
import {
  Box,
  Stack,
  Flex,
  Icon,
  Text,
  Link,
  Button,
  IconButton,
  HStack,
  useColorMode,
  Divider,
  Tooltip,
  Popover,
  PopoverTrigger,
  PopoverContent,
  Circle,
  Badge,
} from "@chakra-ui/react";
import {
  TwitterLogo,
  InstagramLogo,
  GithubLogo,
  LinkedinLogo,
  List,
  Sun,
  Moon,
} from "phosphor-react";
import styles from "@/styles/wrapper.module.css";
import NextLink from "next/link";
import useSound from "use-sound";

const SocialButton = ({ title, icon, link }) => {
  const { colorMode } = useColorMode();
  return (
    <Circle
      as="a"
      href={link}
      data-splitbee-event={title}
      target="_blank"
      size="40px"
      bgColor={
        colorMode === "light" ? "rgba(245, 245, 245, 1)" : "rgba(13, 16, 19, 1)"
      }
      transitionDuration="250ms"
      _hover={{
        borderColor: `${colorMode === "light" ? "black" : "white"}`,
      }}
      borderWidth="0.3px"
    >
      <Icon as={icon} />
    </Circle>
  );
};


const SocialPopover = () => {
  const { colorMode } = useColorMode();
  const [playSound] = useSound("/media/sounds/page-change.mp3");
  return (
    <Popover closeOnBlur={true} returnFocusOnClose={false}>
      <PopoverTrigger
        _focus={{
          outline: "none",
        }}
      >
        <IconButton
          bgColor="indigo.600"
          color="whiteAlpha.900"
          rounded="full"
          borderColor="indigo.400"
          borderWidth="0.3px"
          icon={<List />}
          _hover={{
            border: "1px",
            borderColor: "indigo.600",
            bgColor: "indigo.700",
            // transform: "rotate(90deg)",
          }}
          _focus={{
            outline: "none",
          }}
          onClick={() => {
            playSound();
          }}
        />
      </PopoverTrigger>
      <PopoverContent
        width="50px"
        rounded="full"
        height="auto"
        mb={2}
        bg="none"
        _focus={{
          outline: "none",
        }}
      >
        <Flex
          direction="column"
          justifyContent="space-between"
          alignItems="center"
          rounded="full"
          height={52}
          px={3}
          py={1}
          bgColor={
            colorMode === "light"
              ? "rgba(245, 245, 245, 0.45)"
              : "rgba(13, 16, 19, 0.45)"
          }
          className={styles.navBlur}
        >
          <SocialButton
            title="twitter"
            icon={TwitterLogo}
            link="https://twitter.com/typicalmitul"
          />
          <SocialButton
            title="instagram"
            icon={InstagramLogo}
            link="https://instagram.com/typicalmitul"
          />
          <SocialButton
            title="github"
            icon={GithubLogo}
            link="https://github.com/mitul-s"
          />
          <SocialButton
            title="linkedin"
            icon={LinkedinLogo}
            link="https://linkedin.com/in/heymitul"
          />
        </Flex>
      </PopoverContent>
    </Popover>
  );
}


const ToggleThemeBtn = () => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [playSound] = useSound("/media/sounds/switch-on.mp3");
  return (
    <Tooltip
      label="Change theme"
      fontSize="xs"
      letterSpacing={1}
      placement="top"
      rounded="sm"
    >
      <IconButton
        bgColor={
          colorMode === "light"
            ? "rgb(245, 245, 245, 1)"
            : "rgba(13, 16, 19, 1)"
        }
        color={colorMode === "light" ? "black" : "white"}
        outline="none"
        rounded="full"
        transitionDuration="200ms"
        borderWidth="0.3px"
        onClick={()=> {toggleColorMode(); playSound();}}
        icon={colorMode === "light" ? <Moon /> : <Sun />}
        _hover={{
          borderColor: `${colorMode === "light" ? "black" : "whiteAlpha.800"}`,
          transform: "rotate(45deg)",
          border: "1px solid",
          borderColor: "whiteAlpha.800",
        }}
        _focus={{
          outline: "none",
        }}
        _active={{
          outline: "none",
        }}
      />
    </Tooltip>
  );
}


const NavBtn = React.forwardRef((props, ref) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      as="a"
      bgColor={
        colorMode === "light" ? "rgb(245, 245, 245, 1)" : "rgba(13, 16, 19, 1)"
      }
      color={colorMode === "light" ? "black" : "white"}
      // border="1px solid transparent"
      w={28}
      rounded="3xl"
      borderWidth="0.3px"
      fontSize="md"
      fontWeight="regular"
      letterSpacing={0.5}
      _hover={{
        borderColor: `${colorMode === "light" ? "black" : "whiteAlpha.800"}`,
        cursor: "pointer",
      }}
      sx={{
        fontSmooth: "antialiased",
      }}
      {...props}
    >
      {props.children}
    </Button>
  );
});

const Nav = () => {
  const { colorMode } = useColorMode();
  const [playSound] = useSound("/media/sounds/page_switching.mp3");
  return (
    <Flex
      alignItems="center"
      justifyContent="center"
      position="relative"
      h="100%"
      w="100%"
    >
      <Box
        position="fixed"
        bottom="6"
        width="min(60ch, calc(100% - 64px))"
        rounded="full"
        zIndex="99"
        w="fit-content"
        borderWidth="1px"
      >
        <Box
          w="fit-content"
          m="0 auto"
          py={2}
          px={3}
          rounded="full"
          bgColor={
            colorMode === "light"
              ? "rgba(245, 245, 245, 0.45)"
              : "rgba(13, 16, 19, 0.45)"
          }
          className={styles.navBlur}
        >
          <HStack spacing={1} alignItems="center" justifyContent="center">
            <NextLink href="/">
              <NavBtn
                onClick={() => {
                  playSound();
                }}
              >
                Home
              </NavBtn>
            </NextLink>
            <NextLink href="/about">
              <NavBtn
                onClick={() => {
                  playSound();
                }}
              >
                About
              </NavBtn>
            </NextLink>
            <Box height="25px">
              <Divider colorScheme="blackAlpha" orientation="vertical" />
            </Box>
            <ToggleThemeBtn />
            <SocialPopover />
          </HStack>
        </Box>
      </Box>
    </Flex>
  );
};



export default Nav;