import { Text, Flex, Grid, GridItem, Heading } from '@chakra-ui/react';
import BoxTest  from './modules/boxTest';
import './App.css';


const App = () => {
  return (
    <Flex alignItems='center' justifyContent='center'>
      <Grid gridRow='3' gap="22px" background={'black'} w="300px" h="auto" p="15px">
        <GridItem>
          <Heading color={'white'}>To-do list</Heading>
        </GridItem>
        <GridItem>
          <Text>La re concha de la lora</Text>
        </GridItem>
        <GridItem>
          <BoxTest/>
        </GridItem>
      </Grid>
    </Flex>
  );
}

export default App;
