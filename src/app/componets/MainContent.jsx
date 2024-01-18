import { Box } from "@chakra-ui/react";

const MainContent = ({ children }) => {
  return (
    <Box as="main" maxW="1220px" m="auto" pt="14" pb="14" position="relative">
      {children}
    </Box>
  );
};

export default MainContent;
