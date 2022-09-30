import {
  Box,
  Center,
  Text,
  HStack,
  Icon,
  Stack,
  Button,
  Link,
  Skeleton,
} from "@chakra-ui/react";
import { MusicNotesSimple, Monitor, Bookmarks } from "phosphor-react";
import Section from "@/components/Section";
import useSWR from "swr";
import fetcher from "@/lib/fetcher";

const CurrentItem = ({ icon, title, caption, link }) => {
  return (
    <HStack spacing={4}>
      <Icon fontSize="xl" as={icon} />
      <Box>
        <Link href={link} _hover={{ color: "cyan.600" }} isExternal>
          <Text
            fontWeight="regular"
            maxW={["320px", null, "150px"]}
            minW="120px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {title}
          </Text>
          <Text fontSize="sm" color="trueGray.500">
            {caption}
          </Text>
        </Link>
      </Box>
    </HStack>
  );
};

const CurrentItemSkeleton = ({ icon }) => (
  <HStack>
    <Icon fontSize="xl" as={icon} mr={2} />
    <Center flexDirection="column" minWidth="120px">
      <Skeleton size="sm" h={6} mb={1} minWidth="120px" />
      <Skeleton size="sm" h={3} minWidth="120px" />
    </Center>
  </HStack>
);

const Current = () => {
  const { data: song } = useSWR("/api/now-playing", fetcher);
  const { data: book } = useSWR("/api/books", fetcher);

  return (
    <Section header="Currently">
      <Stack
        spacing={8}
        direction={["column", null, "row"]}
        justifyContent="space-between"
        // flexShrink="0"
        flex="1"
      >
        
        <CurrentItem
          link=""
          icon={Monitor}
          title={"A Startup"}
          caption={"Thinking about"}
        />
        <CurrentItem
          link=""
          icon={Monitor}
          title={"Portfolio"}
          caption={"Current Project"}
        />
        <CurrentItem
          link=""
          icon={Monitor}
          title={"Python"}
          caption={"Practicing"}
        />
      </Stack>
    </Section>
  );
};

export default Current;
