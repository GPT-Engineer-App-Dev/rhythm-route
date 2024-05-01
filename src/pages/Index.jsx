import { Box, Flex, Heading, Text, Button, Image } from '@chakra-ui/react';
import { FaMusic, FaTicketAlt } from 'react-icons/fa';

const Index = () => {
  return (
    <Box>
      <Flex as="nav" bg="brand.900" p={4} justifyContent="space-between" alignItems="center">
        <Heading as="h1" size="lg" color="white">BandName Tours</Heading>
        <Flex>
          <Button leftIcon={<FaMusic />} colorScheme="teal" variant="solid" mr={4}>
            Music
          </Button>
          <Button leftIcon={<FaTicketAlt />} colorScheme="teal" variant="outline">
            Get Tickets
          </Button>
        </Flex>
      </Flex>
      <Flex direction="column" align="center" justify="center" p={10} bg="gray.100">
        <Image src="https://via.placeholder.com/600x300" alt="Band Image" mb={6} />
        <Heading mb={4}>Catch Us Live!</Heading>
        <Text fontSize="xl" mb={6}>Join us on our world tour and experience the best of live music.</Text>
        <Button colorScheme="red" size="lg">View Tour Dates</Button>
      </Flex>
    </Box>
  );
};

export default Index;