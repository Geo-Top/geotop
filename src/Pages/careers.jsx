import { Container, Grid, Typography } from '@mui/material';
import FormSection from '../components/FormSection';
import JobsSection from '../components/JobsSection';
import ContactSection from '../components/ContactSection';

function Careers() {
  return (
    <Container sx={{marginBottom: "30px"}}>
      <Typography variant="h2" align="center" gutterBottom>
        Careers
      </Typography>
      <Grid container spacing={4} direction="column">
        <Grid item xs={12}>
          <FormSection />
        </Grid>
        <Grid item xs={12}>
          <JobsSection />
        </Grid>
        <Grid item xs={12}>
          <ContactSection />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Careers;

