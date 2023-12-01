import {
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  ListItem,
  UnorderedList,
  Image,
  Box,
  Text,
} from "@chakra-ui/react";

const Taps = () => {
  return (
    <Box mt="20" mr="auto" ml="auto" w={{ base: "80%", xl: "40%" }}>
      <Text as="h2" fontSize="36" fontWeight="bold" color="#F1916D">
        Skills...
      </Text>
      <Tabs variant="unstyled" mt="10" color="#F5D7DB">
        <TabList>
          <Tab
            _selected={{ color: "#F5D7DB", bg: "#473E66" }}
            borderRadius="10"
            fontWeight="600"
            fontSize="18"
            p="2"
            w="40"
          >
            Technical
          </Tab>
          <Tab
            _selected={{ color: "#F5D7DB", bg: "#473E66" }}
            borderRadius="10"
            fontWeight="600"
            fontSize="18"
            p="2"
            w="40"
          >
            Soft
          </Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <UnorderedList display="flex" flexWrap="wrap" gap="12">
              <ListItem>
                <Image src="/images/html.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/css-logo.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/sass.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image
                  src="/images/js.png"
                  alt=""
                  height="50"
                  borderRadius="10"
                />
              </ListItem>
              <ListItem>
                <Image src="/images/nodejs.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/react.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/nextjs.webp" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/mongo-logo.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/sql.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/drupal.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image src="/images/figma.png" alt="" height="50" />
              </ListItem>
              <ListItem>
                <Image
                  src="/images/chakra-ui.jpg"
                  alt=""
                  height="50"
                  borderRadius="10"
                />
              </ListItem>
            </UnorderedList>
          </TabPanel>
          <TabPanel color="#F5D7DB">
            <UnorderedList mt="10" mb="4" fontWeight="600" fontSize="20">
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
