import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Flex,
  Text,
} from "@chakra-ui/react";
import ProjectModal from "./ProjectModal";

const AcordionPojects = () => {
  return (
    <Accordion allowToggle mt="10">
      <AccordionItem
        borderTopColor="#F5D7DB"
        borderBottomColor="#F5D7DB"
        borderRadius="10"
      >
        <h2>
          <AccordionButton
            _expanded={{ bg: "#473E66", color: "#F5D7DB" }}
            borderTopColor="#F5D7DB"
            borderRadius="10"
          >
            <Box
              as="span"
              flex="1"
              pt="2"
              pb="2"
              color="#F5D7DB"
              textAlign="center"
              fontWeight="bold"
              fontSize="20"
            >
              CETAV Website
            </Box>
            <AccordionIcon color="#F5D7DB" />
          </AccordionButton>
        </h2>
        <AccordionPanel>
          <Flex w="90%" m="auto" justify="space-around" align="center">
            <ProjectModal />
            <Box w="55%" color="#F5D7DB">
              <Text mt="4" fontWeight="600" fontSize="18">
                Oct - Nov 2023
              </Text>
              <Text mt="4" fontWeight="600" fontSize="18">
                CETAV
              </Text>
              <Text mt="4" fontWeight="600" fontSize="18">
                Final graduate project
              </Text>
            </Box>
          </Flex>
        </AccordionPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AcordionPojects;
