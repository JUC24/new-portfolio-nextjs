import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ListItem,
  UnorderedList,
  Box,
  Text,
} from "@chakra-ui/react";
import SkillsIcons from "./SkillsIcons";

const Taps = () => {
  return (
    <Box
      mr="auto"
      ml="auto"
      w={{ base: "80%", xl: "40%" }}
      mt={{ base: "20", xl: "0" }}
    >
      <Text
        as="h2"
        fontSize={{ base: "32.4", md: "54" }}
        fontWeight="bold"
        color="#F1916D"
      >
        Skills...
      </Text>
      <Tabs variant="unstyled" mt="10" color="#F5D7DB">
        <TabList>
          <Tab
            _selected={{ color: "#F5D7DB", bg: "#473E66" }}
            borderRadius="10"
            fontWeight="600"
            fontSize={{ base: "20", md: "26" }}
            p="2"
            w="40"
          >
            Technical
          </Tab>
          <Tab
            _selected={{ color: "#F5D7DB", bg: "#473E66" }}
            borderRadius="10"
            fontWeight="600"
            fontSize={{ base: "20", md: "26" }}
            p="2"
            w="40"
          >
            Soft
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <SkillsIcons />
          </TabPanel>
          <TabPanel color="#F5D7DB">
            <UnorderedList
              mt="10"
              mb="4"
              fontWeight="600"
              fontSize={{ base: "20", md: "28", lg: "22" }}
            >
              <ListItem>Resilience.</ListItem>
              <ListItem mt="2">Attention to detail.</ListItem>
              <ListItem mt="2">Continuous learning.</ListItem>
              <ListItem mt="2">Organization and order.</ListItem>
              <ListItem mt="2">Troubleshooting.</ListItem>
              <ListItem mt="2">Teamwork.</ListItem>
              <ListItem mt="2">Work and personal ethics.</ListItem>
              <ListItem mt="2">Leadership.</ListItem>
              <ListItem mt="2">Design thinking.</ListItem>
              <ListItem mt="2">Adaptability.</ListItem>
              <ListItem mt="2">Creativity.</ListItem>
              <ListItem mt="2">Critical thinking.</ListItem>
            </UnorderedList>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Taps;
