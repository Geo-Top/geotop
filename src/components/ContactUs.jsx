
import { TextField, Button, Typography, Container, Grid, Paper } from '@mui/material';

const ContactUs = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    // هنا يمكنك إضافة منطق إرسال النموذج، مثل الاتصال بواجهة برمجة تطبيقات لإرسال البيانات
  };

  return (
    <Container component="main" maxWidth="sm">
      <Paper elevation={3} style={{ padding: '2rem', marginTop: '2rem' }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Contact Us
        </Typography>
        <form noValidate autoComplete="off" onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                label="Name"
                name="name"
                autoComplete="name"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="message"
                label="Message"
                name="message"
                multiline
                rows={4}
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary">
                Send
              </Button>
            </Grid>
          </Grid>
        </form>
      </Paper>
    </Container>
  );
};

export default ContactUs;
