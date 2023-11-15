import { Box, Button, Container, Stack, Typography } from "@mui/material";

// xs -> sm -> md -> lg -> xl

const Grouping = () => {
  return (
    <Stack direction="row-reverse">
      <Button variant="outlined" color="error">
        Error
      </Button>
      <Button variant="outlined" color="info">
        Info
      </Button>
      <Button variant="outlined" color="primary">
        Primary
      </Button>
      <Button variant="contained" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" color="success">
        Success
      </Button>
      <Button variant="contained" color="warning">
        Warning
      </Button>
    </Stack>
  );
};

export default Grouping;
