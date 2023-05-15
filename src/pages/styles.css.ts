import {  style } from "@vanilla-extract/css";
import { sprinkless } from "../styles/sprinkless.css"

export const menu = sprinkless(
  {
    display: "flex",
    justifyContent: "space-between",
    padding: "large",

    // Conditional atoms:
    flexDirection: {
      mobile: "column",
      desktop: "row",
    },
    fontSize: {
      desktop: "large",
      mobile: "medium"
    },
    background: {
      lightMode: "primary",
    },

  })


  export const menuItems = style([
    sprinkless(
      {
        display: {
          desktop: "flex",
          mobile: "grid",
        },
        gridTemplateColumns: {
          mobile: "4x",
        },
        paddingX: {
          desktop: "small",
          mobile: "none",
        },
        paddingY: {
          mobile: "medium",
        },
        flexDirection: {
          mobile: "column",
          desktop: "row",
        },
        
      }

    ),
    {
      listStyle: 'none',
    }
  ])


export const menuItem = style([
  sprinkless(
    {
      display: "flex",
      alignItems: "center",
      paddingX: "medium",
      color: "white",
  
      flexDirection: {
        mobile: "column",
        desktop: "row",
      },
  }),
  {
      ':hover': {
        cursor: "pointer",
        color: "orange",
      }
  }
]);