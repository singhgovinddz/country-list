import { makeStyles, createStyles } from "@material-ui/core";

const useStyle = makeStyles((theme) =>
  createStyles({
    boxStyle: {
      display: "flex",
      flexWrap: "wrap",
      "& > :not(style)": {
        mb: 1,
        width: "100%",
        height: 60,
      },
    },
    paperStyle: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    darkModeBox:{ display: "flex", alignItems: "center" },
    containerStyles:{ height: "100%", width: "100%" },
    textField:{ width: { xs: "100%", sm: "400px" }, mr: 2, mb: 1 },

  })
);

const countryDetailsStyle = makeStyles((theme) =>
  createStyles({
    cardStyle:{ maxWidth: 300, mt: 2, p: 2 },
    fieldStyles:{ display: "flex" },
    borderCountriesStyle:{
        display: "block",
        fontSize: "16px",
        alignItems: "center",
      },
  }))


export {useStyle,countryDetailsStyle}