import {
    Card,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material' 
 const CountryCard = ({country, onCardClick}) => {
    return <Card
      sx={{ maxWidth: 300, mt: 2, height: 300 }}
      onClick={() => onCardClick(country)}   
    >
      <CardMedia
        sx={{ objectFit: {xs:'cover', sm:'cover', md:'contain'} }}
        component="img"
        height="140"
        image={country.flags.png}
        alt={country.name.common}
      />
      <CardContent>
        <Typography
          gutterBottom
          variant="p"
          fontSize="small"
          fontWeight="bold"
          component="div"
        >
          {country.name.common}
        </Typography>
        <Typography gutterBottom variant="h5" component="div">
          <Typography
            fontSize="small"
            key={country.name.common}
            sx={{
              height: "25px",
              border: "1px",
              width: "100%",
              display: "grid",
              cursor: "pointer",
            }}
          >
            <Typography
              fontSize="small"
              sx={{
                fontWeight: "600",
                marginTop: "12px",
                display: "flex",
              }}
            >
              Population:
              <Typography fontSize="small">
                {country.population}
              </Typography>
            </Typography>
            <Typography
              fontSize="small"
              sx={{
                fontWeight: "600",
                marginTop: "12px",
                display: "flex",
              }}
            >
              Region:
              <Typography fontSize="small">
                {country.region}
              </Typography>
            </Typography>
            <Typography
              fontSize="small"
              sx={{
                fontWeight: "600",
                marginTop: "12px",
                display: "flex",
              }}
            >
              Capital:
              <Typography fontSize="small">
                {country.capital}
              </Typography>
            </Typography>
            <br />
          </Typography>
        </Typography>
      </CardContent>
    </Card>
}

export default CountryCard;