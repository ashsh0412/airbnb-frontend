import { Box, Button, Divider, HStack, Text, VStack } from "@chakra-ui/react";
import { FaComment, FaGithub } from "react-icons/fa";
import { redirect } from "react-router-dom";

export default function SocialLogin() {
  const kakaoParams = {
    cliend_id: "422e8af3687778762071096c83f21003",
    redirect_uri: "http://127.0.0.1:3000/social/kakao",
    response_type: "code",
  };
  const params = new URLSearchParams(kakaoParams).toString();
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
        <Button
          as="a"
          href="https://github.com/login/oauth/authorize?client_id=Ov23livcWYwt5ARgUduv&scope=read:user,user:email"
          w={"100%"}
          leftIcon={<FaGithub />}
        >
          Contiue with Github
        </Button>
        <Button
          as={"a"}
          href={`https://kauth.kakao.com/oauth/authorize?${params}`}
          w={"100%"}
          leftIcon={<FaComment />}
          colorScheme="yellow"
        >
          Contiue with Kakao
        </Button>
      </VStack>
    </Box>
  );
}
