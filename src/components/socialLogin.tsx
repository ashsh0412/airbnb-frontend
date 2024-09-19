import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";

export default function SocialLogin() {
  return (
    <Box mb={4}>
      <HStack my={8}>
        <Divider />
        <Text
          color="grey"
          textTransform={"uppercase"}
          fontSize={"x-small"}
          as={"b"}
        >
          Or
        </Text>
        <Divider />
      </HStack>
      <VStack>
        <Button w={"100%"} leftIcon={<FaGithub />}>
          Contiue with Github
        </Button>
        <Button w={"100%"} leftIcon={<FaComment />} colorScheme="yellow">
          Contiue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
