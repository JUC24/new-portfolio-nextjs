import { Box, Flex, Text } from "@chakra-ui/react";
import InfoCard from "./componets/InfoCard";
import HeroBanner from "./componets/HeroBanner";
import AboutContent from "./componets/AboutmeContent";
import Taps from "./componets/Tabs";
import ExpirienceTimeline from "./componets/ExpirienceCont";
import timeLineExpirienceData from "./config/expirienceData";
import ProjectsData from "./config/projectsData";
import Projects from "./componets/ProjectsCont";

export default function Home() {
  return (
    <>
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: "4" }}
      >
        <InfoCard />
        <HeroBanner />
      </Flex>
      <Flex
        justifyContent="space-around"
        flexDirection={{ base: "column", xl: "row" }}
        gap={{ base: "4" }}
        mt="40"
      >
        <AboutContent />
        <Taps />
      </Flex>
      <Box mt="40">
        <Box mt="40" width={{ base: "90%", xl: "100%" }} mr="auto" ml="auto">
          <Text
            as="h2"
            fontSize={{ base: "32.4", md: "54" }}
            fontWeight="bold"
            color="#F1916D"
            w={{ base: "90%", lg: "100%" }}
            m={{ base: "auto" }}
          >
            Expirience...
          </Text>
          <Box w="90%" m="auto">
            <Box borderLeft="3px solid #BD83B8" mt="10">
              <ExpirienceTimeline data={timeLineExpirienceData} />
            </Box>
          </Box>
        </Box>
        <Box mt="40" width={{ base: "90%", xl: "100%" }} mr="auto" ml="auto">
          <Text
            as="h2"
            fontSize={{ base: "32.4", md: "54" }}
            fontWeight="bold"
            color="#F1916D"
            w={{ base: "90%", lg: "100%" }}
            m={{ base: "auto" }}
          >
            Projects...
          </Text>
          <Projects data={ProjectsData} />
        </Box>
        <Box mt="40" width={{ base: "90%", xl: "100%" }} mr="auto" ml="auto">
          <Text
            as="h2"
            fontSize={{ base: "32.4", md: "54" }}
            fontWeight="bold"
            color="#F1916D"
            w={{ base: "90%", lg: "100%" }}
            m={{ base: "auto" }}
          >
            Contact...
          </Text>
        </Box>
      </Box>
    </>
  );
}
