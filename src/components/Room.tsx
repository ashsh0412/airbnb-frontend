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
import { Link } from "react-router-dom";

interface RoomProps {
  imageUrl: string;
  name: string;
  rating: number;
  price: number;
  country: string;
  city: string;
  pk: number;
}

export default function Room({
  imageUrl,
  name,
  rating,
  price,
  country,
  city,
  pk,
}: RoomProps) {
  const grey = useColorModeValue("grey.600", "gray.300");
  const staryColor = useColorModeValue("red.500", "yellow.400");
  return (
    <Link to={`/rooms/${pk}`}>
      <VStack spacing={-0.5} alignItems={"flex-start"}>
        <Box position={"relative"} overflow={"hidden"} rounded={"3xl"} mb={3}>
          <Image src={imageUrl} minH={280} />
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
              {name}
            </Text>
            <HStack
              _hover={{
                color: staryColor,
              }}
              spacing={1}
            >
              <FaStar size={15} />
              <Text>{rating}</Text>
            </HStack>
          </Grid>
          <Text fontSize={"sm"} color={grey}>
            {city}, {country}
          </Text>
        </Box>
        <Text fontSize={"sm"} color={grey}>
          <Text as={"b"}>${price}</Text> / night
        </Text>
      </VStack>
    </Link>
  );
}
