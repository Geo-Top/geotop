import { Grid, Box, Typography } from '@mui/material';
import ServiceCard from './ServiceCard';
import ServiceDetails from './ServiceDetails';

const PageTemplate = ({ title, services }) => (
  <Box sx={{ flexGrow: 1, p: 4, marginTop: "60px", marginLeft: 0, justifyContent: "center" }}>
    <Typography variant="h4" gutterBottom align="center" sx={{ marginBottom: "26px" }}>
      {title}
    </Typography>
    <Grid container spacing={4} sx={{ justifyContent: "center" }}>
      {services.map((service, index) => (
        <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: "flex", justifyContent: "center" }}>
          <ServiceCard service={service} />
        </Grid>
      ))}
    </Grid>
    <Box mt={4}>
      {services.map((service, index) => (
        <ServiceDetails key={index} service={service} />
      ))}
    </Box>
  </Box>
);

export default PageTemplate;
