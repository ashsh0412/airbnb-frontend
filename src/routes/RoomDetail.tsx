import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { getRoom, getRoomReviews } from "../api";
import { IReview, IRoomDetail } from "../types";
import {
  Avatar,
  Box,
  Container,
  Grid,
  GridItem,
  Heading,
  HStack,
  Image,
  keyframes,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";

export default function RoomDetail() {
  const { roomPk } = useParams();
  const { isLoading, data } = useQuery<IRoomDetail>({
    queryKey: [`rooms`, roomPk],
    queryFn: getRoom,
  });
  const { data: reviewsData, isLoading: isReviewsLoading } = useQuery<
    IReview[]
  >({
    queryKey: [`rooms`, roomPk, `reviews`],
    queryFn: getRoomReviews,
  });
  return (
    <Box
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
    >
      <Skeleton height={"43px"} width={"25%"} isLoaded={!isLoading}>
        <Heading>{data?.name}</Heading>
      </Skeleton>
      <Grid
        mt={8}
        rounded={"xl"}
        overflow={"hidden"}
        gap={3}
        height={"60vh"}
        templateRows={"1fr 1fr"}
        templateColumns={"repeat(4, 1fr)"}
      >
        {[0, 1, 2, 3, 4].map((index) => (
          <GridItem
            colSpan={index === 0 ? 2 : 1}
            rowSpan={index === 0 ? 2 : 1}
            overflow={"hidden"}
            key={index}
          >
            <Skeleton isLoaded={!isLoading} h={"100%"} w={"100%"}>
              {data?.photos[index] ? (
                <Image
                  w={"100%"}
                  h={"100%"}
                  objectFit={"cover"}
                  src={data?.photos[index].file}
                />
              ) : null}
            </Skeleton>
          </GridItem>
        ))}
      </Grid>
      <HStack mt={10} justifyContent={"space-between"}>
        <VStack alignItems={"flex-start"}>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <Heading fontSize={"2xl"}>
              House hosted by {data?.owner.name}
            </Heading>
          </Skeleton>
          <Skeleton isLoaded={!isLoading} height={"30px"}>
            <HStack justifyContent={"flex-start"} w={"40%"}>
              <Text>
                {data?.toilets}•toilet{data?.toilets === 1 ? "" : "s"}
              </Text>
              <Text>
                {data?.rooms}•room{data?.rooms === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </VStack>
        <Avatar size={"xl"} src={data?.owner.avatar} />
      </HStack>
      <Box mt={10}>
        <Heading mb={5} fontSize={"2xl"}>
          <Skeleton isLoaded={!isReviewsLoading} h={"30px"} w={"40%"}>
            <HStack>
              <FaStar /> <Text>{data?.rating}</Text>
              <Text>•</Text>
              <Text>
                {reviewsData?.length} review
                {reviewsData?.length === 1 ? "" : "s"}
              </Text>
            </HStack>
          </Skeleton>
        </Heading>
        <Container mt={15} maxW={"container.lg"} marginX={"none"}>
          <Grid gap={10} templateColumns={"1fr 1fr"}>
            {reviewsData?.map((review, index) => (
              <VStack alignItems={"flex-start"} key={index}>
                <Skeleton mt={"30px"} isLoaded={!isReviewsLoading}>
                  <HStack>
                    <Avatar
                      name={review.user.name}
                      src={review.user.avatar}
                      size={"md"}
                    />
                    <VStack spacing={0} alignItems={"flex-start"}>
                      <Heading fontSize={"md"}>{review.user.name}</Heading>
                      <HStack spacing={1}>
                        <FaStar size={"12px"} />
                        <Text>{review.rating}</Text>
                      </HStack>
                      <Text>{review.payload}</Text>
                    </VStack>
                  </HStack>
                </Skeleton>
              </VStack>
            ))}
          </Grid>
        </Container>
      </Box>
    </Box>
  );
}
