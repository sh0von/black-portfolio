import Project from "@/components/Projects";
import Current from "@/components/Current";
import Item from "@/components/Item";
import Shell from "@/components/Shell";
import Section from "@/components/Section";
import Photos from "@/components/Photos";
import {
  PaperPlaneTilt,
  PaperPlane,
  Code,
  TwitterLogo,
  InstagramLogo,
  Aperture,
  Circle,
} from "phosphor-react";
import {
  Flex,
  Heading,
  Text,
  Stack,
  HStack,
  Button,
  Link,
  Box,
  ListItem,
  ListIcon,
  List,
  useToast,
  useColorMode,
} from "@chakra-ui/react";

import PortfolioImages from "@/components/Images";

import NextLink from "next/link";

import { useClipboard } from "use-clipboard-copy";
import ActionButton from "@/components/core/ActionButton";

const SecondaryBtn = ({ children, icon, ...rest }) => {
  const { colorMode } = useColorMode();
  return (
    <Button
      variant="link"
      color="trueGray.500"
      fontWeight="regular"
      leftIcon={icon}
      _hover={{
        color: colorMode === "light" ? "blueGray.900" : "blueGray.50",
      }}
      {...rest}
    >
      {children}
    </Button>
  );
};

export default function Home() {
  const toast = useToast();
  const clipboard = useClipboard({
    onSuccess() {
      toast({
        description: "Copied username to clipboard 🙂",
        status: "success",
        duration: "1500",
      });
    },

    onError() {
      toast({
        description: "Hm, couldn't copy the username..",
        status: "error",
        isClosable: true,
      });
    },
  });

  return (
    <>
      <Shell>
        <Flex
          // py={[0, null, 24]}
          // h={["90vh", null, "50vh"]}
          mt={24}
          mb={8}
          justifyContent="flex-end"
          flexDirection="column"
        >
          <Heading mb={4}>Hi, my name is Shovon</Heading>
          <Box lineHeight={9}>
            <Text  fontSize={["lg", null, "xl"]} mb={4}>
            Welcome to my virtual garden, where I share what I'm learning about delivering amazing products, becoming a better coder, and advancing my career in technology.If you have any query about me, {" "}
              <Link
                href="mailto:minar@duck.com"
                borderBottom="1px solid"
                pb="3px"
                _hover={{ color: "cyan.600" }}
              >
                I&apos;d love to chat 👋
              </Link>
              .
            </Text>
          </Box>
          <NextLink href="/about">
            <ActionButton mt={3}>More about me →</ActionButton>
          </NextLink>
        </Flex>
        <Current />
        <Section header="Education">

        <Stack spacing={8}>
        <Item
              role="Water Resources & Eng."
              company="CUET"
              date="Sep 2022 - Present"
              link="https://www.cuet.ac.bd/"
              description="Started my graduation life on CUET as a WRE student."
            />
        <Item
              role="HSC-21"
              company="Chittagong College"
              date="July 2019 - Dec 2021"
              link="https://ctgcollege.gov.bd/"
              description="I've passed my college life there"
            />
        <Item
              role="Kg to Class-10"
              company="CCPC"
              date="July 2019 - Dec 2021"
              link="https://ccpc.edu.bd/"
              description="Passed one of the best memory in this institution"
            /></Stack>
        </Section>
        <Section header="Experience">
          <Stack spacing={8}>
            <Item
              role="Founder & President"
              company="Ongko. Org"
              date="Dec 2019 - Dec 2020"
              description="Build a Sciend and Math olympiad practice and learning environment so that students fear to math & science could be removed"
            />
            <Item
              role="Founder"
              company="Solver Hero"
              date="Mar 2020 - Jul 2020"
              description="Another Math plattform so that student can judge him by different type of course and test."
            />
          </Stack>
        </Section>
        <Section header="Projects">
          <Stack spacing={8}>
            <Project
              title="Wolfram Alpha Messenger Bot"
              description="A JavaScript-built Facebook/Messenger bot that uses the Wolfram Alpha API can assist students and parents in finding mathematical solutions quickly and easily. "
              repo=""
              view=""
              demo={false}
              code={false}
            />
            <Project
              title="Juno"
              description="A daily tracker web app that allows you to write down your instant recollection and create a timeline of your daily activity.It is written in React JS and employs Mongo Db as its database. "
              repo=""
              view=""
              demo={false}
              code={false}
            />
            <Project
              title="CF Solution"
              description="All Codeforces problems that I've solved are set down on one page with comments to help beginners understand the code perfectly. All of the solutions are written in Python."
              repo=""
              view=""
              demo={false}
              code={false}
            />
            <Project
              title="Minimal Blog Starter"
              description="Next.JS is used to create a simple blog starter. Very basic design and responsive Ui that allows you to easily publish your blog. This beginning makes use of MDX as the blog file. "
              repo=""
              view=""
              demo={false}
              code={false}
            />
          </Stack>
        </Section>
        {/*<Section header="Photography">
          <Stack spacing={5}>
            <Text>
              Over the past few years, I’ve been building my craft as a
              photographer. I managed to turn a hobby into a business, which
              allowed me to achieve goals I never thought I could. This included
              photographing the Uber CEO, being paid to travel and working with
              brands I love.
            </Text>
            <Box>
              <List spacing={1}>
                <Text fontWeight="bold">
                  Some notable accomplishments I&apos;m proud to share
                </Text>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  Every Google Pixel has one of my photos as a default wallpaper
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  <Text>
                    Featured in Toronto&apos;s{" "}
                    <Link
                      href="https://drive.google.com/file/d/0B-wYLuK2QlRwb1FmOThmUmYwekU/view?usp=sharing"
                      textDecoration="underline"
                      isExternal
                    >
                      Metro News newspaper
                    </Link>{" "}
                    as an artist
                  </Text>
                </ListItem>
                <ListItem display="flex" alignItems="center">
                  <ListIcon
                    as={Circle}
                    fontSize="xs"
                    mb="-1px"
                    color="trueGray.400"
                  />
                  Earned 20K within six months of 2019 – this was beyond my
                  wildest dreams
                </ListItem>
              </List>
            </Box>
            <Text>
              Today, I’m more focused on improving my drone skills and becoming
              a better artist rather than growing my online presence. You can
              learn a little more by visiting my photography portfolio below.
            </Text>
            <Link
              href="https://typicalmitul.com/?ref=crywolf.me"
              isExternal
              _hover={{ textDecoration: "none" }}
            >
              <ActionButton>Visit my portfolio →</ActionButton>
            </Link>
            <HStack>
              <Link
                href="https://instagram.com/typicalmitul"
                variant="ghost-sm"
                marginLeft={-1.5}
                isExternal
              >
                <Flex alignItems="center" justifyContent="center" fontSize="md">
                  <Text marginRight={1}>Instagram</Text>
                  <InstagramLogo />
                </Flex>
              </Link>
              <Link
                href="https://500px.com/typicalmitul"
                variant="ghost-sm"
                marginLeft={-1.5}
                isExternal
              >
                <Flex alignItems="center" justifyContent="center" fontSize="md">
                  <Text marginRight={1}>500px</Text>
                  <Aperture />
                </Flex>
              </Link>
            </HStack>
          </Stack>
        </Section>
  */}
     {/* <Photos images={PortfolioImages} mt={-8} mb={8} />*/}

        <Section header="Contact">
          <Stack spacing={4} mb={7}>
            <Text>
            I enjoy meeting new individuals to learn from and am always happy to answer any questions you may have.
            </Text>
            <Text>
            Additionally, I like to talk about programming, abandoned side projects, and more math. 
            </Text>
          </Stack>
          <Stack align="flex-start" spacing={3}>
            <Link
              href="mailto:dzk1whep@duck.com"
              mb="-4px"
              _hover={{ textDecoration: "none" }}
            >
              <SecondaryBtn icon={<PaperPlaneTilt />}>
                Send an email
              </SecondaryBtn>
            </Link>
            <SecondaryBtn
              icon={<PaperPlane />}
              onClick={() => clipboard.copy("@minar_svn")}
            >
              Chat on Telegram – @minar_svn
            </SecondaryBtn>
          </Stack>
        </Section>
      </Shell>
    </>
  );
}
