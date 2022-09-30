import {
  Box,
  Link,
  Icon,
  Flex,
  HStack,
  Heading,
  Text,
  Stack,
} from "@chakra-ui/react";
import Photos from "@/components/Photos";
import { PersonalImages } from "@/components/Images";
import { ArrowRight } from "phosphor-react";
import Section from "@/components/Section";

const AboutText = () => (
  <>
    <Stack
      spacing={8}
      fontSize={["lg", null, "xl"]}
      mb={4}
      lineHeight={7}
      letterSpacing="-0.04px"
    >
      <Text mt={3}>
      I'm still finding out how my life will be here, but I'm delighted to say that I'm an inquisitive learner of everything for the time being. 
      </Text>
      <Box>
        <Text fontWeight="bold" mb={2}>
        I prefer to live my life by these two main catchphrases: 
        </Text>
        <Stack spacing={2}>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Do the most challenging tasks because they are the most rewarding. </Text>
          </HStack>
          <HStack>
            <Icon as={ArrowRight} />
            <Text>Do anything your heart desires. </Text>
          </HStack>
        </Stack>
      </Box>
      <Text>
        Throughout my professional life, I had the pleasure of joining Soapbox,
        a B2B SaaS, where I helped convert users from free to paid through
        growth experiments. While in school, I had several internships
        specifically including product roles in banking and operations at Uber.
      </Text>

      <Text>
        In my free time, I’m usually editing or taking photos, binge-watching
        vlogs by Casey Neistat, playing video games, starting a side project
        (with hopes to not abandon it), or learning about investment psychology.
      </Text>
    </Stack>
  </>
);

const About = () => {
  return (
    <>
      <Photos images={PersonalImages} mt={24} mb={8} />
      <Flex justifyContent="flex-end" flexDirection="column">
        <Stack spacing={4}>
          <Section header="About">
            <Heading mb={4}>Shovon</Heading>
            <AboutText />
          </Section>
        </Stack>
      </Flex>
    </>
  );
};

export default About;
