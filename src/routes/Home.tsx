import { Box, Grid, Skeleton, SkeletonText } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import RoomSkeleton from "../components/RoomSkeleton";
import Room from "../components/Room";

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
  const [isLoading, setIsloading] = useState(true);
  const [rooms, setRooms] = useState<IRoom[]>([]);
  const fetchRooms = async () => {
    const response = await fetch("http://127.0.0.1:8000/api/v1/rooms/");
    const json = await response.json();
    setRooms(json);
    setIsloading(false);
  };
  useEffect(() => {
    fetchRooms();
  }, []);
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
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
          <RoomSkeleton />
        </>
      ) : null}
      {rooms.map((room) => (
        <Room
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
