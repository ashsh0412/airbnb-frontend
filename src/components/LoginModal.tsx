import {
  Button,
  Input,
  InputGroup,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useToast,
  VStack,
} from "@chakra-ui/react";
import SocialLogin from "./socialLogin";
import { useForm } from "react-hook-form";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { usernameLogIn } from "../api";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

interface IForm {
  username: string;
  password: string;
}

export default function LoginModal({ isOpen, onClose }: LoginModalProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();
  const toast = useToast();
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationFn: usernameLogIn,
    onSuccess: (data) => {
      toast({
        title: "welcome",
        status: "success",
      });
      onClose();
      queryClient.refetchQueries({ queryKey: ["me"] });
    },
    onError: (error) => {
      console.log("mutation error");
    },
  });
  const onSubmit = ({ username, password }: IForm) => {
    mutation.mutate({ username, password });
  };
  return (
    <Modal onClose={onClose} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Log in</ModalHeader>
        <ModalCloseButton />
        <ModalBody as={"form"} onSubmit={handleSubmit(onSubmit)}>
          <VStack>
            <Input
              isInvalid={Boolean(errors.username?.message)}
              {...register("username", { required: "Please enter username" })}
              variant={"filled"}
              placeholder="Username"
            />
            <Input
              isInvalid={Boolean(errors.password?.message)}
              type="password"
              {...register("password", { required: "Please enter password" })}
              variant={"filled"}
              placeholder="Password"
            />
          </VStack>

          <Button
            isLoading={mutation.isPending}
            type="submit"
            mt={4}
            colorScheme="red"
            w={"100%"}
          >
            Log in
          </Button>
          <SocialLogin />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
}
