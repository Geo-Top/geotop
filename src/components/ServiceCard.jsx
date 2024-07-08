import { Box, Typography, Card, CardContent, CardMedia } from '@mui/material';

const ServiceCard = ({ service }) => (
  <Card sx={{ maxWidth: 345, boxShadow: 3 }}>
    <CardMedia
      component="img"
      height="140"
      image={"/geotop/img/"+ service.title+ ".png"}
      alt={service.title}
    />
    <CardContent>
      <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
        {service.icon}
        <Typography variant="h6" sx={{ ml: 2 }}>
          {service.title}
        </Typography>
      </Box>
      <Typography variant="body2" color="text.secondary">
        {service.description}
      </Typography>
    </CardContent>
  </Card>
);

export default ServiceCard;
