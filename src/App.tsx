import { Container, Text, SimpleGrid } from "@chakra-ui/react";
import { usePriceList } from "./hooks/usePriceList";
import PriceCard from "./components/PriceCard";

function App() {
  const { priceList } = usePriceList();

  return (
    <Container centerContent maxW={"2560px"} h={"100vh"} p={"0"}>
      <Container
        maxW={"1024px"}
        h={"full"}
        border={"5px solid lightgreen"}
        p={"24px"}
        overflow={"auto"}
      >
        <Text fontWeight={"semibold"} fontSize={"xl"}>
          Cryptocurrency Realtime Price
        </Text>
        <SimpleGrid columns={[1, 1, 2, 3, 3, 3]} gap={"24px"}>
          {priceList.data.map((price, i) => (
            <PriceCard key={i} price={price} />
          ))}
        </SimpleGrid>
      </Container>
    </Container>
  );
}

export default App;
