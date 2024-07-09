import { Container, Typography, TextField, Button, Box } from '@mui/material';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const templateParams = {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    };

    emailjs.send('service_3jpw73k', 'template_m4x3rzq', templateParams, 'eqbYXN6OQNtnKwyyG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
        setFormData({
          name: '',
          email: '',
          message: '',
        });
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Container maxWidth="sm" style={{ marginTop: '5rem', marginBottom: "2rem" }}>
      <Typography variant="h4" align="center" gutterBottom>
        Contact Us
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
        <TextField
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
        />
        <TextField
          label="Message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          fullWidth
          margin="normal"
          required
          multiline
          rows={4}
        />
        <Button
          type="submit"
          variant="contained"
          color="primary"
          fullWidth
          sx={{ mt: 3 }}
        >
          Send Message
        </Button>
        <Typography variant="body2" color="textSecondary" align="center" sx={{ mt: 3 }}>
          We will get back to you within 24 hours.
        </Typography>
      </Box>
    </Container>
  );
}

export default ContactUs;
