import { Box, Text, Flex } from "@chakra-ui/react";

import React from "react";

const Timeline = ({ data }) => {
  return (
    <Flex direction="column">
      {data.map((event, index) => (
        <Box key={index} position="relative" mb="8">
          <Box
            width="4"
            height="4"
            bg="#BD83B8"
            borderRadius="50%"
            position="absolute"
            left={{ base: "-1.5", lg: "-1.5" }}
            transform="translateY(-50%)"
          />
          <Box
            w={{ base: "90%" }}
            border="1px solid #F5D7DB"
            p="4"
            borderRadius="md"
            ml="4"
            color="#F5D7DB"
          >
            <Text mb="2">{event.date}</Text>
            <Text mb="2" fontWeight="bold">
              {event.title}
            </Text>
            <Text mb="2">{event.description}</Text>
          </Box>
        </Box>
      ))}
    </Flex>
  );
};

export default Timeline;
