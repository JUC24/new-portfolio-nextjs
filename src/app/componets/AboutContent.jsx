import { Text, Box } from "@chakra-ui/react";

const AboutContent = () => {
  return (
    <Box
      p={{ xl: "4" }}
      color="#F5D7DB"
      width={{ base: "80%", xl: "50%" }}
      mt="20"
      mr="auto"
      ml="auto"
      fontSize={{ base: "20", md: "26", lg: "20" }}
      textAlign="left"
      borderRight={{ xl: "2px solid #F5D7DB" }}
    >
      <Text as="h2" fontSize="36" fontWeight="bold" color="#F1916D">
        About Jason...
      </Text>
      <Text mt="10">
        I am a web developer and designer, and network technician, lover of
        dogs, technology, art, music, sports and everything related to the
        audiovisual.
      </Text>
      <Text mt="10">
        In web development and design, I found the way to combine several of my
        great passions, technology, art and even audiovisual, for example.
        Everything working together to create incredible, eye-catching, magical
        and immersive experiences, both for me and for the end users, and there
        is nothing that fills me with more passion and excitement than being
        part of that process. In addition to this, another thing that captivated
        me about this world was being able to create practically anything, code,
        while a bit frustrating and demotivating at times, is also one of the
        most unconstrained things there is, through code you can really improve
        the world.
      </Text>
      <Text mt="10">
        Software developers are more like artists than cold mathematical minds.
        We create artifacts out of nothing that have to evolve and be maintained
        for a long time. Rafael Gomez Blanes
      </Text>
    </Box>
  );
};

export default AboutContent;
