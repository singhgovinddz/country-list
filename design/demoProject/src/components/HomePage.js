import React from "react";
import {
  Box,
  Paper,
  Container,
  TextField,
  InputAdornment,
  OutlinedInput,
  MenuItem,
  FormControl,
  Select,
  useTheme,
  Button,
  Grid,
} from "@mui/material";

import { regions as names } from "../utils/country";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import SearchSharpIcon from "@mui/icons-material/SearchSharp";
import IconButton from "@material-ui/core/IconButton";
import CountryCard from "./countryCard";
import CountryDetails from "./countryDetails";
import {useStyle} from "../styles/styles"

function HomePage({ onChangeTheme }) {
  const theme = useTheme();
  const styles = useStyle();
  const [active, setActive] = React.useState(1);
  const [selectStr, setSelectStr] = React.useState("");
  const [inputStr, setInputStr] = React.useState("");
  const [list, setList] = React.useState([]);
  const [selectedCountry, setSelectedCountry] = React.useState({});

  const MenuProps = {
    PaperProps: {
      style: {
        width: 250,
      },
    },
  };

  function getStyles() {
    return {
      fontWeight: selectStr
        ? theme.typography.fontWeightMedium
        : theme.typography.fontWeightRegular,
    };
  }

  function debounce(func, timeout = 300) {
    let timer;
    return (...args) => {
      clearTimeout(timer);
      timer = setTimeout(() => {
        func.apply(this, args);
      }, timeout);
    };
  }

  const handleInput = debounce((e) => {
    setInputStr(e.target.value);
  });

  const handleSelect = (e) => {
    setSelectStr(e.target.value);
  };

  const getListData = () => {
    let url = `https://restcountries.com/v3.1/`;
    let isFilter = false;
    if (inputStr) {
      url += `name/${inputStr}`;
      if (selectStr) {
        isFilter = true;
      }
    } else if (selectStr) {
      url += `region/${selectStr}`;
    } else {
      url += `all`;
    }
    fetch(url)
      .then((r) => {
        if (r.ok) return r.json();
        throw new Error(r.statusText);
      })
      .then((l) => {
        if (isFilter) {
          const data = l.filter((i) => i.region === selectStr);
          setList([...data]);
        } else {
          setList(l);
        }
      })
      .catch((e) => {
        setList([]);
        console.error(e);
      });
  };

  const _onClick = (selected) => {
    setSelectedCountry(selected);
    setActive(2);
  };

  React.useEffect(() => {
    getListData();
  }, [inputStr, selectStr]);

  return (
    <>
      <Box className={styles.boxStyle}>
        <Paper className={styles.paperStyle}>
          <Container
            sx={{
              display: "flex",
              justifyContent: "space-between",
              pl: 1,
              pr: 1,
            }}
          >
            <Box
              component="div"
              sx={{
                fontWeight: "700",
                display: "inline",
                fontSize: { xs: "12px", sm: "12px", md: "larger" },
              }}
            >
              Where in the world?
            </Box>
            <Box component="div" sx={styles.darkModeBox}>
              <Button onClick={onChangeTheme} fontSize="small">
                <DarkModeOutlinedIcon fontSize="small" /> Dark Mode
              </Button>
            </Box>
          </Container>
        </Paper>
      </Box>
      <Container sx={styles.containerStyles} fixed>
        {active === 1 && (
          <React.Fragment>
            <Box
              sx={{
                mb: 3,
                mt: 3,
                display: "flex",
                justifyContent: "space-between",
                flexDirection: { xs: "column", sm: "row" },
              }}
            >
              <TextField
                sx={styles.textField}
                placeholder="Search for a country..."
                InputProps={{
                  startAdornment: (
                    <InputAdornment>
                      <IconButton>
                        <SearchSharpIcon />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
                onKeyUp={handleInput}
              />

              <FormControl sx={{ width: { xs: "100%", sm: "270px" } }}>
                <Select
                  displayEmpty
                  value={selectStr}
                  onChange={handleSelect}
                  input={<OutlinedInput />}
                  renderValue={(selected) => {
                    if (selected.length === 0) {
                      return <em>Filter by region</em>;
                    }

                    return selected;
                  }}
                  MenuProps={MenuProps}
                  inputProps={{ "aria-label": "Without label" }}
                >
                  <MenuItem disabled value=""></MenuItem>
                  {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                      style={getStyles(name, selectStr, theme)}
                    >
                      {name}
                    </MenuItem>
                  ))}
                </Select>
              </FormControl>
            </Box>
            <div>
              <Grid
                container
                rowSpacing={1}
                columnSpacing={{ xs: 1, sm: 2, md: 3 }}
              >
                {list.map((c, i) => {
                  return (
                    <Grid
                      key={i}
                      item
                      xs={12}
                      sm={4}
                      md={3}
                      sx={{ cursor: "pointer" }}
                    >
                      <CountryCard country={c} onCardClick={_onClick} />
                    </Grid>
                  );
                })}
              </Grid>
            </div>
          </React.Fragment>
        )}

        {active === 2 && (
          <CountryDetails
            selectedCountry={selectedCountry}
            setActive={setActive}
          />
        )}
      </Container>
    </>
  );
}

export default HomePage;
