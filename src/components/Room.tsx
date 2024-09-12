import {
  Box,
  Button,
  Grid,
  HStack,
  Image,
  Text,
  useColorModeValue,
  VStack,
} from "@chakra-ui/react";
import { FaRegHeart, FaStar } from "react-icons/fa";

export default function Room() {
  const grey = useColorModeValue("grey.600", "gray.300");
  const staryColor = useColorModeValue("red.500", "yellow.400");
  return (
    <VStack spacing={-0.5} alignItems={"flex-start"}>
      <Box position={"relative"} overflow={"hidden"} rounded={"3xl"} mb={3}>
        <Image
          minH={280}
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTEzMTA4OTQ5ODA0MDcwMTE4Mw%3D%3D/original/4f7a276e-9995-4b32-bda6-300de0619b25.png?im_w=1440&im_q=highq"
        />
        <Button
          variant={"unstyled"}
          position={"absolute"}
          top={2}
          right={0}
          color={"white"}
        >
          <FaRegHeart size={"20px"} />
        </Button>
      </Box>
      <Box>
        <Grid gap={2} templateColumns={"6fr 1fr"}>
          <Text display={"block"} as="b" noOfLines={1} fontSize="md">
            Cheomdangwahak-ro,Jeongeup-si, North Jeolla Province, South Korea
          </Text>
          <HStack
            _hover={{
              color: staryColor,
            }}
            spacing={1}
          >
            <FaStar size={15} />
            <Text>5.0</Text>
          </HStack>
        </Grid>
        <Text fontSize={"sm"} color={grey}>
          Seoul, S. Korea
        </Text>
      </Box>
      <Text fontSize={"sm"} color={grey}>
        <Text as={"b"}>$72</Text> / night
      </Text>
    </VStack>
  );
}
