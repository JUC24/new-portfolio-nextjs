"use client";
import {
  Box,
  List,
  ListItem,
  ListIcon,
  Link,
  Flex,
  Text,
} from "@chakra-ui/react";
import { GiWorld } from "react-icons/gi";
import { FaLinkedin } from "react-icons/fa";
import { TfiGithub } from "react-icons/tfi";
import { SiFigma } from "react-icons/si";
import { FaSquareXTwitter } from "react-icons/fa6";

const IconList = () => {
  return (
    <Flex alignItems="center" justifyContent="space-between" mt={{ md: "14" }}>
      <Box>
        <List>
          <ListItem display="flex" alignItems="center">
            <ListIcon
              as={GiWorld}
              color="#BD83B8"
              fontSize={{ base: "20", md: "40", lg: "26" }}
            />
            <Text color="#BD83B8" fontSize={{ base: "16", md: "28", lg: "20" }}>
              Costa Rica
            </Text>
          </ListItem>
        </List>
      </Box>
      <Box>
        <List display="flex">
          <ListItem>
            <Link href="https://www.linkedin.com/in/jason-uma%C3%B1a-campos-565a40280/">
              <ListIcon
                as={FaLinkedin}
                color="#BD83B8"
                fontSize={{ base: "20", md: "40px", lg: "26" }}
              />
            </Link>
          </ListItem>
          <ListItem ml={{ base: "1", md: "4" }}>
            <Link href="https://github.com/JUC24">
              <ListIcon
                as={TfiGithub}
                color="#BD83B8"
                fontSize={{ base: "20", md: "40", lg: "26" }}
              />
            </Link>
          </ListItem>
          <ListItem ml={{ base: "1", md: "4" }}>
            <Link href="https://www.figma.com/files/recents-and-sharing/recently-viewed?fuid=1113171818606050942">
              <ListIcon
                as={SiFigma}
                color="#BD83B8"
                fontSize={{ base: "20", md: "40", lg: "26" }}
              />
            </Link>
          </ListItem>
          <ListItem ml={{ base: "1", md: "4" }}>
            <Link href="https://twitter.com/jason_umaa3">
              <ListIcon
                as={FaSquareXTwitter}
                color="#BD83B8"
                fontSize={{ base: "20", md: "40", lg: "26" }}
              />
            </Link>
          </ListItem>
        </List>
      </Box>
    </Flex>
  );
};

export default IconList;
