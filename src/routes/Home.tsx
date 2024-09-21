import { Grid } from "@chakra-ui/react";
import RoomSkeleton from "../components/RoomSkeleton";
import Room from "../components/Room";
import { useQuery } from "@tanstack/react-query";
import { getRooms } from "../api";
import { IRoomList } from "../types";

export default function Home() {
  const { isLoading, data } = useQuery<IRoomList[]>({
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
          key={room.pk} // Add this key prop
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
