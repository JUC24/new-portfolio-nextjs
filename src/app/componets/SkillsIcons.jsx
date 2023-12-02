"use client";

import { List, ListItem, ListIcon } from "@chakra-ui/react";
import { TiHtml5 } from "react-icons/ti";
import { FaCss3Alt } from "react-icons/fa";
import { RiJavascriptFill } from "react-icons/ri";
import { SiSass } from "react-icons/si";
import { SiChakraui } from "react-icons/si";
import { FaNodeJs } from "react-icons/fa";
import { BiLogoMongodb } from "react-icons/bi";
import { TbBrandNextjs } from "react-icons/tb";
import { BsFiletypeSql } from "react-icons/bs";
import { BiLogoReact } from "react-icons/bi";
import { FaDrupal } from "react-icons/fa";
import { FaFigma } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa6";
import { VscGithub } from "react-icons/vsc";

const SkillsIcons = () => {
  return (
    <List
      w="80%"
      m="auto"
      display="flex"
      justifyContent="space-around"
      flexWrap="wrap"
      gap="8"
      mt="6"
    >
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={TiHtml5}
          color="#E44D26"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={FaCss3Alt}
          color="#9EDDF9"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={RiJavascriptFill}
          color="#F7DF1E"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={SiSass}
          color="#CC6699"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={SiChakraui}
          color="#9EDDF9"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={FaNodeJs}
          color="#6CC24A"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={BiLogoMongodb}
          color="#6CC24A"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={BsFiletypeSql}
          color="#61DAFB"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={TbBrandNextjs}
          color="#F5D7DB"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={BiLogoReact}
          color="#61DAFB"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={FaDrupal}
          color="#61DAFB"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={FaGitAlt}
          color="#F2501D"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={VscGithub}
          color="#F5D7DB"
        />
      </ListItem>
      <ListItem>
        <ListIcon
          fontSize={{ base: "65", md: "80" }}
          as={FaFigma}
          color="#F5D7DB"
        />
      </ListItem>
    </List>
  );
};

export default SkillsIcons;
