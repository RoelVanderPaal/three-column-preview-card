import { extendTheme } from "@chakra-ui/react";

const customTheme = extendTheme(
  {
    colors: {
      sedans: "hsl(31, 77%, 52%)",
      suvs: "hsl(184, 100%, 22%)",
      luxury: "hsl(179, 100%, 13%)",
      transparentWhite: "hsla(0, 0%, 100%, 0.75)"
    },
    fonts: {
      body: "Lexend Deca",
      heading: "Big Shoulders Display",
      Button: "Big Shoulders Display"
    }
  },
  {
    components: {
      Button: {
        baseStyle: {
          fontWeight: "normal"
        },
      },
      Text: {
        baseStyle: {
          fontSize: "15px"
        },
      }
    }
  },
);

export default customTheme;
