import { Box, Container, Flex, Heading, Image, Text } from '@chakra-ui/react';
import nbalogo from '../images/SVG-nba.svg'
import { ConfeSelection } from './modules/ConfeSelection';



const App = () => {
  return (
    <>
      <Box bg="white" h="5px" w="100%"></Box>
      <Container maxW={{ base: "320px", md: "1100px" }} p="16px">
        <Flex p="20px" justifyContent="center" mt={{ base: "5px", lg: "15px" }} gap="20px">
          <Heading fontSize={{ base: 'xl', lg: '5xl' }} color="white">Welcome to JZ's corner</Heading>
        </Flex>
        <Flex justifyContent="space-around" alignItems="center" mt={{ base: "10px", lg: "20px" }}>
          <Text fontSize={{ base: 'sm', lg: '2xl' }} w={{ base: "200px", lg: "600px" }} p="10px">
            Welcome to my site! Made primarily to practice, not gonna lie. I will be getting data from a NBA API to show some of the teams' general info. Hope you enjoy!
          </Text>
          <Box w={{ base: "80px", lg: "100px" }}>
            <Image src={nbalogo} alt='NBA logo' />
          </Box>
        </Flex>
      </Container>
      <ConfeSelection></ConfeSelection>
    </>
  );
}

export default App;
