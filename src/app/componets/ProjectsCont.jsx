import { Box, Text, Flex, Image, Link } from "@chakra-ui/react";

const Projects = ({ data }) => {
  return (
    <Flex
      direction="column"
      borderLeft="3px solid #BD83B8"
      w="90%"
      ml="auto"
      mr="auto"
      mt="10"
    >
      {data.map((project, index) => (
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
          <Flex
            justify="space-evenly"
            align="center"
            w="90%"
            borderTop="1px solid #F5D7DB"
            borderBottom="1px solid #F5D7DB"
            pt="8"
            pb="8"
            borderRadius="md"
            ml="4"
            color="#F5D7DB"
            direction={{ base: "column", lg: "row" }}
          >
            <Box w="60" h="40">
              <Image
                src={project.img}
                alt=""
                w="100%"
                h="100%"
                borderRadius="10"
                overflow="hidden"
              />
            </Box>
            <Box w="65%">
              <Text mb="6" fontWeight="bold" fontSize="22">
                {project.title}
              </Text>
              <Text mb="4" fontSize="18">
                {project.subTitle}
              </Text>
              <Text mb="6" fontSize="16">
                {project.description}
              </Text>
              <Link
                href={project.link}
                fontSize="14"
                bg="#473E66"
                pt="2"
                pb="2"
                pr="4"
                pl="4"
                borderRadius="6"
                fontWeight="semibold"
                border="2px solid #F5D7DB"
              >
                Take a look
              </Link>
            </Box>
          </Flex>
        </Box>
      ))}
    </Flex>
  );
};

export default Projects;
