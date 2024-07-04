import { Box, Typography, Divider } from '@mui/material';

const ServiceDetails = ({ service }) => (
  <Box mb={4}>
    <Typography variant="h5" gutterBottom>
      {service.title}
    </Typography>
    <Typography variant="body1" color="text.secondary">
      {service.details}
    </Typography>
    <Divider sx={{ my: 2 }} />
  </Box>
);

export default ServiceDetails;
