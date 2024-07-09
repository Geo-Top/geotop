import { TextField, Button, Typography, Box } from '@mui/material';
import { useState } from 'react';
import emailjs from 'emailjs-com';

function FormSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phoneNumber: '',
    jobTitle: '',
    university: '',
    skills: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    emailjs.send('service_3jpw73k', 'template_m4x3rzq', formData, 'eqbYXN6OQNtnKwyyG')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (err) => {
        console.log('FAILED...', err);
        alert('Failed to send message. Please try again.');
      });
  };

  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          label="Name"
          name="name"
          fullWidth
          margin="normal"
          value={formData.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          fullWidth
          margin="normal"
          value={formData.email}
          onChange={handleChange}
        />
        <TextField
          label="Phone Number"
          name="phoneNumber"
          fullWidth
          margin="normal"
          value={formData.phoneNumber}
          onChange={handleChange}
        />
        <TextField
          label="Job Title"
          name="jobTitle"
          fullWidth
          margin="normal"
          value={formData.jobTitle}
          onChange={handleChange}
        />
        <TextField
          label="University"
          name="university"
          fullWidth
          margin="normal"
          value={formData.university}
          onChange={handleChange}
        />
        <TextField
          label="Skills"
          name="skills"
          fullWidth
          margin="normal"
          value={formData.skills}
          onChange={handleChange}
        />
        <TextField
          label="Message"
          name="message"
          fullWidth
          margin="normal"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default FormSection;
