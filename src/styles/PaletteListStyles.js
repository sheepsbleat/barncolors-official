import sizes from "./sizes";
import bg from "../bg.svg";
import { createStyles } from "@material-ui/styles";

export default createStyles({
  root: {
    backgroundColor: "#1e8feb",
    backgroundImage: `url(${bg})`,
    /* background by SVGBackgrounds.com */
    height: "100vh",
    overflowY: "scroll",
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: "2rem",
  },
  container: {
    width: "50%",
    display: "flex",
    alignItems: "flex-start",
    flexDirection: "column",
    flexWrap: "wrap",
    [sizes.down("xl")]: {
      width: "80%",
    },
    [sizes.down("xs")]: {
      width: "75%",
    },
  },
  nav: {
    display: "flex",
    width: "100%",
    justifyContent: "space-between",
    alignItems: "center",
    color: "white",
    "& a": {
      color: "white",
    },
  },
  palettes: {
    boxSizing: "border-box",
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(3, 30%)",
    gridGap: "2.5rem",
    gap: "2.5rem",
    [sizes.down("md")]: {
      gridTemplateColumns: "repeat(2, 50%)",
    },
    [sizes.down("xs")]: {
      gridTemplateColumns: "repeat(1, 100%)",
      gridGap: "1.4rem",
      gap: "1.4rem",
    },
  },
});
