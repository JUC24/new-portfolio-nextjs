import { Text, Image, Box } from "@chakra-ui/react";

const HeroBanner = () => {
  return (
    <Box
      width={{ base: "90%", xl: "60%" }}
      borderRadius="10"
      m={{ base: "auto", xl: "0" }}
    >
      <Box
        display="flex"
        flexDirection={{ base: "column", md: "row" }}
        alignItems="center"
        color="#F1916D"
        w="90%"
        ml="auto"
        mt={{ xl: "32" }}
      >
        <Box
          textAlign="center"
          width={{ base: "90%", md: "100" }}
          mr={{ base: "auto", md: "0" }}
          mt={{ base: "6", md: "0" }}
        >
          <Text
            as="h1"
            fontWeight="bold"
            fontSize={{ base: "38", md: "66" }}
            color="#F1916D"
          >
            <Text display="inline" mr={{ base: "4", md: "8" }} color="#BD83B8">
              Hi
            </Text>
            Welcome
          </Text>
          <Text as="h2" fontWeight="600" fontSize={{ base: "34", md: "56" }}>
            <Text display="inline" mr={{ base: "4", md: "8" }} color="#BD83B8">
              I am
            </Text>
            Jason
          </Text>
          <Text fontWeight="600" fontSize={{ base: "11", md: "18" }} mt="4">
            Technology + Art + Development + Design
          </Text>
        </Box>
        <Image src="/images/juc-avatar.webp" alt="" height="460" />
      </Box>
    </Box>
  );
};

export default HeroBanner;
