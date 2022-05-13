import {
    Button,
    Grid,
    Card,
    CardMedia,
    Typography,
    Paper
} from '@mui/material';
import ArrowBackSharpIcon from '@mui/icons-material/ArrowBackSharp'
import {countryDetailsStyle} from "../styles/styles"
const CountryDetails = ({selectedCountry, setActive}) => {
  const styles=countryDetailsStyle()      
    return <>
    <Button variant="contained" sx={{mt:3, mb:3}} onClick={() => setActive(1)}>
      <ArrowBackSharpIcon /> Back
    </Button>
    <Grid container spacing={2}>
      <Grid item xs={12} sm={12} md={4}>
        <Card sx={styles.cardStyle}>
          <CardMedia
            sx={{ objectFit: "contain" }}
            component="img"
            height="140"
            image={selectedCountry.flags.png}
            alt="green iguana"
          />
        </Card>
      </Grid>
      <Grid item xs={12} sm={12} md={8}>
        <Typography
          fontSize="small"
          sx={{ display: "flex", fontSize: "20px", fontWeight:"bold" }}
        >
          <span>{selectedCountry.name.common}</span>
        </Typography>
        <Typography sx={{ mt: 2, display: "flex", flexDirection:{xs:'column', sm:'column', md:'row'} }}>
          <Typography component="div" sx={{width:{xs:"100%", sm:'100%', md:"50%"}}}>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Native Name:
              </span>
              <span>
                {
                  selectedCountry.name.nativeName[
                    Object.keys(selectedCountry.name.nativeName)[0]
                  ].common
                }
              </span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Population:
              </span>
              <span>{selectedCountry.population}</span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Region:
              </span>
              <span>{selectedCountry.region}</span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Sub Region:
              </span>
              <span>{selectedCountry.subregion}</span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Capital:
              </span>
              <span>{selectedCountry.capital}</span>
            </Typography>
          </Typography>
          <Typography component="div"   
          sx={{
            width:{xs:"100%", sm:'100%', md:"50%"}, 
            mt:{xs:2, sm:2, md:0}
          }}>
          <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Top Level Domain:
              </span>
              <span>
                {
                  selectedCountry.tld
                }
              </span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Currencies:
              </span>
              <span>
                {
                  selectedCountry.currencies[
                    Object.keys(selectedCountry.currencies)[0]
                  ].name
                }
              </span>
            </Typography>
            <Typography fontSize="small" sx={styles.fieldStyles}>
              <span style={{ fontWeight: "bold", marginRight: "3px" }}>
                Languages:
              </span>
              <span>
                {Object.values(selectedCountry.languages)
                  .toString()
                  .split(",")
                  .join(",")}
              </span>
            </Typography>
          </Typography>
        </Typography>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            width: "100%",
            marginTop: "24px",
          }}
        >
          <Typography
            fontSize="small"
            sx={styles.borderCountriesStyle}
          >
            <span style={{ fontWeight: "bold" }}>Border Countries:</span>
            <div style={{ display: "flex" }}>
              {selectedCountry?.borders?.map((val) => {
                return (
                  <Grid
                    rowSpacing={2}
                    columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                  >
                    <Paper
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingX: "12px",
                        mb:1,
                        mr:1,
                        mt:1
                      }}
                    >
                      {val}
                    </Paper>
                  </Grid>
                );
              })}
            </div>
          </Typography>
        </div>
      </Grid>
    </Grid>
  </>
}

export default CountryDetails;