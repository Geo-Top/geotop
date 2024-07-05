
import { Box, Grid, Typography, Card, CardContent } from '@mui/material';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import VerifiedIcon from '@mui/icons-material/Verified';
import useMediaQuery from '@mui/material/useMediaQuery';
const AboutUs = () => {
  const isSmallScreen = useMediaQuery('(max-width:350px)');

  // تحديد الأنماط بناءً على حجم الشاشة
  // eslint-disable-next-line no-unused-vars
  const gridStyle = {
    paddingRight: isSmallScreen ? '0' : '',
    paddingLeft: isSmallScreen ? '0' : '',
    marginRight: isSmallScreen ? '0' : '',
    marginLeft: isSmallScreen ? '0' : '',
  };

  return (
    <Box sx={{ flexGrow: 1, p: 3, textAlign: 'center', bgcolor: 'primary.main' , paddingBottom: "60px"}}>
      <Typography variant="h4" component="div" gutterBottom>
        About Us
      </Typography>
      <Typography variant="h6" component="div" gutterBottom>
        Who Are We?
      </Typography>
      <Typography variant="body1" component="p" gutterBottom>
        Geo Top is committed to maintaining quality communication with its customers, keeping them informed of their business proceedings, and responding to all their inquiries at all times.
      </Typography>
      <br/>
      <Grid  container spacing={3} justifyContent="center">
        <Grid item xs={12} sm={6} md={4} >
          <Card sx={{ minWidth: 235 , minHeight: 200 }} >
            <CardContent>
              <ThumbUpAltIcon style={{ fontSize: 50, color:"#007BFF" }} />
              <Typography variant="h5" component="div" gutterBottom>
                Competitive Prices
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Our prices are competitive compared to the global market, and we prioritize quality above all else.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 235 , minHeight: 200 }}>
            <CardContent>
              <AccessTimeIcon style={{ fontSize: 50, color:"#007BFF" }} />
              <Typography variant="h5" component="div" gutterBottom>
               Commitment
              </Typography>
              <Typography variant="body2" color="text.secondary">
                We work around the clock to provide you with what you need with the quality you aspire to, in the specified time.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ minWidth: 235 , minHeight: 200 }}>
            <CardContent>
              <VerifiedIcon style={{ fontSize: 50, color:"#007BFF" }} />
              <Typography variant="h5" component="div" gutterBottom>
                Quality 
              </Typography>
              <Typography variant="body2" color="text.secondary">
              We use advanced technologies to beautifully showcase your product, ensuring maximum impact and achieving your goals.
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
