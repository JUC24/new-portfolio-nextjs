import { Box, Flex, Text } from "@chakra-ui/react";
import InfoCard from "./componets/InfoCard";
import HeroBanner from "./componets/HeroBanner";
import AboutContent from "./componets/AboutContent";
import Taps from "./componets/Tabs";
import Timeline from "./componets/ExpirienceCont";
import AcordionPojects from "./componets/AcordionPojects";

export default function Home() {
  const timelineData = [
    {
      date: "2021-2023",
      title: "CETAV",
      description: "Descripción del trabajo anterior",
    },
  ];

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
            <Timeline data={timelineData} />
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
          <AcordionPojects />
        </Box>
      </Box>
    </>
  );
}
