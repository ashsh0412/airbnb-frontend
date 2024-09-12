import {
  Box,
  Grid,
  Skeleton,
  SkeletonText,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Room from "../components/Room";

export default function Home() {
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
      <Box>
        <Skeleton rounded={"2xl"} height={280} mb={5} />
        <SkeletonText width={"50%"} noOfLines={3} />
      </Box>
      <Room />
    </Grid>
  );
}
