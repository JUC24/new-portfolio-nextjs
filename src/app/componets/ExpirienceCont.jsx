import { Box, Text, Flex } from "@chakra-ui/react";

import React from "react";

const ExpirienceTimeline = ({ data }) => {
  return (
    <Flex direction="column">
      {data.map((job, index) => (
        <Box key={index} position="relative" mb="10">
          <Box
            width="4"
            height="4"
            bg="#BD83B8"
            borderRadius="50%"
            position="absolute"
            left="-2"
            transform="translateY(-50%)"
          />
          <Box
            w="90%"
            borderTop="1px solid #F5D7DB"
            borderBottom="1px solid #F5D7DB"
            pl={{ base: "2", md: "5", lg: "8" }}
            pr="2"
            pt="8"
            pb="8"
            borderRadius="md"
            ml="4"
            color="#F5D7DB"
          >
            <Text mb="4" fontSize={{ base: "18", md: "26", lg: "20" }}>
              {job.date}
            </Text>
            <Text
              mb="4"
              fontWeight="bold"
              fontSize={{ base: "22", md: "30", lg: "26" }}
            >
              {job.title}
            </Text>
            <Text mb="4" fontSize={{ base: "18", md: "24", lg: "18" }}>
              {job.description}
            </Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default ExpirienceTimeline;
