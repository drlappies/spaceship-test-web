import { Card, Text, HStack, Box } from "@chakra-ui/react";
import { Price } from "../type";
import { useMemo } from "react";

interface PriceCardProps {
  price: Price;
}

const PriceCard = ({ price }: PriceCardProps) => {
  const upperCasedCoinName = useMemo(() => {
    const coin = price.coin;
    return coin.charAt(0).toUpperCase() + coin.slice(1);
  }, [price.coin]);

  return (
    <Card p={"12px"}>
      <Text fontWeight={"bold"} fontSize={"xl"}>
        {upperCasedCoinName}
      </Text>
      <Text my={"2px"} fontWeight={"semibold"} color={"orange"} fontSize={"lg"}>
        ${price.data.usd}
      </Text>
      <HStack fontSize={"xs"} fontWeight={"semibold"}>
        <Box>
          <Text color={"grey"}>Volume: </Text>
          <Text>{price.data.usd_24h_vol}</Text>
        </Box>
        <Box>
          <Text color={"grey"}>change: </Text>
          <Text>{price.data.usd_24h_change}</Text>
        </Box>
      </HStack>
    </Card>
  );
};

export default PriceCard;
