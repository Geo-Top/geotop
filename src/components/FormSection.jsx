import { TextField, Button, Typography, Box } from '@mui/material';

function FormSection() {
  return (
    <Box>
      <Typography variant="h4" gutterBottom>
        Registration Form
      </Typography>
      <form noValidate autoComplete="off">
        <TextField label="Name" fullWidth margin="normal" />
        <TextField label="Email" fullWidth margin="normal" />
        <TextField label="Phone Number" fullWidth margin="normal" />
        <TextField label="Job Title" fullWidth margin="normal" />
        <TextField label="University" fullWidth margin="normal" />
        <TextField label="Skills" fullWidth margin="normal" />
        <TextField label="Message" fullWidth margin="normal" multiline rows={4} />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </Box>
  );
}

export default FormSection;
