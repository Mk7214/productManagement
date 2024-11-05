import {
  Container,
  Input,
  VStack,
  Heading,
  Box,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { useToast } from "@chakra-ui/react";

const CreatePage = () => {
  const [newProduct, setNewProduct] = useState({
    name: "",
    price: "",
    image: "",
  });
  const toast = useToast();
  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) {
      toast({
        title: "Error creating product",
        description: message,
        status: "error",
        isClosable: true,
      });
    } else {
      toast({
        title: "Successfully ",
        description: message,
        status: "success",
        isClosable: true,
      });
    }
    setNewProduct({
      name: "",
      price: "",
      image: "",
    });
  };

  return (
    <Container maxW={"container.sm"} pt={8}>
      <VStack spacing={6}>
        <Heading as={"h1"} size={"2xl"} textAlign={"center"} mb={8}>
          Create New Product
        </Heading>
        <Box
          w={"full"}
          bg={useColorModeValue("blackAlpha.50", "whiteAlpha.200")}
          p={6}
          rounded={"xl"}
          shadow={"md"}
        >
          <VStack spacing={3}>
            <Input
              placeholder="Product Name"
              name="name"
              value={newProduct.name}
              onChange={(e) =>
                setNewProduct({ ...newProduct, name: e.target.value })
              }
            />
            {/*check for price validation so it can only accepts numbers not strings*/}
            <Input
              placeholder="Product Price"
              name="price"
              type="number"
              value={newProduct.price}
              onChange={(e) =>
                setNewProduct({ ...newProduct, price: e.target.value })
              }
            />
            <Input
              placeholder="Product Image URL"
              name="image"
              value={newProduct.image}
              onChange={(e) =>
                setNewProduct({ ...newProduct, image: e.target.value })
              }
            />
            <Button
              colorScheme="teal"
              variant="outline"
              w={"full"}
              onClick={handleAddProduct}
            >
              Add Product
            </Button>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default CreatePage;
