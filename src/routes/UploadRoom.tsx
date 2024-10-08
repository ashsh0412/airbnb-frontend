import {
  Box,
  Checkbox,
  Container,
  FormControl,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputLeftAddon,
  Select,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import HostOnlyPage from "../components/HostOnlyPage";
import ProtectedPage from "../components/ProtectedPage";
import { FaBed, FaDollarSign, FaToilet } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import { getAmenities, getCategories } from "../api";
import { IAmenity, ICategory } from "../types";

export default function UploadRoom() {
  const { data: amenities, isLoading: isAmenitiesLoading } = useQuery<
    IAmenity[]
  >({
    queryKey: ["amenities"],
    queryFn: getAmenities,
  });
  const { data: categories, isLoading: isCategoriesLoading } = useQuery<
    ICategory[]
  >({ queryKey: ["category"], queryFn: getCategories });
  return (
    <ProtectedPage>
      <HostOnlyPage>
        <Box
          pb={40}
          mt={10}
          px={{
            base: 10,
            lg: 40,
          }}
        >
          <Container>
            <Heading textAlign={"center"}>Upload Room</Heading>
            <VStack spacing={5} as={"form"} mt={5}>
              <FormControl>
                <FormLabel>Name</FormLabel>
                <Input required type="text" />
                <FormHelperText>Write the name of your room</FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Country</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>City</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Address</FormLabel>
                <Input required type="text" />
              </FormControl>
              <FormControl>
                <FormLabel>Price</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaDollarSign />} />
                  <Input type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Rooms</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaBed />} />
                  <Input type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Toilets</FormLabel>
                <InputGroup>
                  <InputLeftAddon children={<FaToilet />} />
                  <Input type="number" min={0} />
                </InputGroup>
              </FormControl>
              <FormControl>
                <FormLabel>Description</FormLabel>
                <Textarea></Textarea>
              </FormControl>
              <FormControl>
                <Checkbox>Pet friendly?</Checkbox>
              </FormControl>
              <FormControl>
                <FormLabel>Kind of room</FormLabel>
                <Select placeholder="Choose a kind">
                  <option value={"entire_place"}>Entire Place</option>
                  <option value={"private_room"}>Private Room</option>
                  <option value={"shared_room"}>Shared Room</option>
                </Select>
                <FormHelperText>
                  What kind of room are you renting?
                </FormHelperText>
              </FormControl>
              <FormControl>
                <FormLabel>Category</FormLabel>
                <Select placeholder="Choose a kind">
                  {categories?.map((category) => (
                    <option key={category.pk} value={category.pk}>
                      {category.name}
                    </option>
                  ))}
                </Select>
                <FormHelperText>
                  What category description your room?
                </FormHelperText>
              </FormControl>
            </VStack>
          </Container>
        </Box>
      </HostOnlyPage>
    </ProtectedPage>
  );
}
