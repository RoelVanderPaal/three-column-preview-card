import {
  Button,
  Center,
  ChakraProvider,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import iconSuvs from "./images/icon-suvs.svg";
import iconSedans from "./images/icon-sedans.svg";
import iconLuxury from "./images/icon-luxury.svg";
import customTheme from "./customTheme";
import '@fontsource/lexend-deca/400.css'
import '@fontsource/big-shoulders-display/700.css'

const PreviewColumn = ({ bgColor, icon, title, description, ...rest }) => (
  <Flex
    bgColor={bgColor}
    p={4}
    className="preview-column"
    alignItems="flex-start"
    justify="space-between"
    direction="column"
    flex="1 1 30ch"
    sx={{
      "& > *": { m: 4 },
    }}
  >
    <Image src={icon} />
    <Heading color="transparentWhite" textTransform="uppercase">
      {title}
    </Heading>
    <Text color="transparentWhite">{description}</Text>
    <Button mt={16} color={bgColor} borderRadius="3xl" >
      Learn More
    </Button>
  </Flex>
);

function App() {
  return (
    <ChakraProvider theme={customTheme}>
      <Center>
        <Flex
          borderRadius="xl"
          overflow="hidden"
          m={8}
          wrap="wrap"
          maxWidth="container.lg"
        >
          <PreviewColumn
            bgColor="sedans"
            title="Sedans"
            icon={iconSedans}
            description="Choose a sedan for its affordability and excellent fuel economy. Ideal for cruising in the city or on your next road trip."
          />
          <PreviewColumn
            bgColor="suvs"
            title="SUVs"
            icon={iconSuvs}
            description="Take an SUV for its spacious interior, power, and versatility. Perfect for your next family vacation and off-road adventures."
          />
          <PreviewColumn
            bgColor="luxury"
            title="Luxury"
            icon={iconLuxury}
            description="Cruise in the best car brands without the bloated prices. Enjoy the enhanced comfort of a luxury rental and arrive in style."
          />
        </Flex>
      </Center>
    </ChakraProvider>
  );
}

export default App;
