import { Box, Image, Text } from "@chakra-ui/react";
import IconList from "./IconList";

const InfoCard = () => {
  return (
    <Box
      border="1px solid #F5D7DB"
      width={{ base: "90%", xl: "35%" }}
      borderRadius="10"
      position="relative"
      m={{ base: "auto" }}
    >
      <Image
        src="/images/cardCover.jpg"
        alt=""
        width="100%"
        borderTopRadius="10"
      />
      <Image
        src="/images/juc.png"
        alt=""
        borderRadius="100%"
        width={{
          base: "36%",
          md: "36%",
        }}
        position="absolute"
        left={{
          base: "34%",
          md: "34%",
        }}
        bottom={{
          base: "55%",
          md: "52%",
          lg: "58%",
        }}
        border="2px solid #BD83B8"
      />
      <Box
        width="90%"
        mr="auto"
        ml="auto"
        mt={{ base: "20", md: "40", lg: "20" }}
      >
        <Text
          textAlign="center"
          color="#F5D7DB"
          fontWeight="bold"
          fontSize={{ base: "20", md: "50", lg: "35" }}
        >
          Jason Umaña Campos
        </Text>
        <Text
          textAlign="center"
          color="#F5D7DB"
          fontWeight="600"
          fontSize={{ base: "16", md: "30" }}
          mt="2"
        >
          Web Developer
        </Text>
        <Text
          textAlign="center"
          color="#F5D7DB"
          fontWeight="600"
          fontSize={{ base: "16", md: "30" }}
        >
          and Designer
        </Text>
      </Box>
      <Box width="90%" mr="auto" ml="auto" mt="8">
        <IconList />
      </Box>
      <Box
        width="90%"
        mr="auto"
        ml="auto"
        mt={{ base: "10", md: "14" }}
        mb={{ base: "10", md: "10" }}
      >
        <Text
          textAlign="center"
          color="#F5D7DB"
          fontWeight="600"
          fontSize={{ base: "16", md: "25" }}
        >
          Email: jason1202u@gmail.com
        </Text>
      </Box>
    </Box>
  );
};

export default InfoCard;
