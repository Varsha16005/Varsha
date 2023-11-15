import { Button } from "@mui/material";

const Styles = () => {
  return (
    <div>
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
    </div>
  );
};

export default Styles;
