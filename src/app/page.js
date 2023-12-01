import { Flex } from "@chakra-ui/react";
import InfoCard from "./componets/InfoCard";
import HeroBanner from "./componets/HeroBanner";
import AboutContent from "./componets/AboutContent";
import Taps from "./componets/Tabs";

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
      >
        <AboutContent />
        <Taps />
      </Flex>
    </>
  );
}
