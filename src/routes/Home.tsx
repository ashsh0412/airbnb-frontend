import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import RoomSkeleton from "../components/RoomSkeleton";
import Room from "../components/Room";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";

interface IPhoto {
  pk: string;
  file: string;
  description: string;
}

interface IRoom {
  name: string;
  pk: number;
  country: string;
  city: string;
  price: number;
  rating: number;
  is_owner: boolean;
  photos: IPhoto[];
}

export default function Home() {
  const { isLoading, data } = useQuery<IRoom[]>({
    queryKey: ["rooms"],
    queryFn: getRooms,
  });
  return (
    <Grid
      mt={10}
      px={{
        base: 10,
        lg: 40,
      }}
      columnGap="4"
      rowGap={8}
      templateColumns={{
        sm: "1fr",
        md: "repeat(2, 1fr)",
        lg: "repeat(3, 1fr)",
        xl: "repeat(4, 1fr)",
        "2xl": "repeat(5, 1fr)",
      }}
    >
      {isLoading ? (
        <>
          <RoomSkeleton />
        </>
      ) : null}
      {data?.map((room) => (
        <Room
          pk={room.pk}
          name={room.name}
          country={room.country}
          city={room.city}
          rating={room.rating}
          price={room.price}
          imageUrl={room.photos[0].file}
        />
      ))}
    </Grid>
  );
}
