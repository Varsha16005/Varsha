import { AddCircleOutlined } from "@mui/icons-material";
import { Button, Stack } from "@mui/material";
import { MinusCircleIcon } from "lucide-react";

const Buttons = ({ handleIncrease, handleDecrease }) => {
  return (
    <Stack direction="row" spacing={12} justifyContent="center">
      <Button
        variant="contained"
        color="success"
        startIcon={<AddCircleOutlined />}
        onClick={handleIncrease}
      >
        Increase
      </Button>
      <Button
        variant="contained"
        color="error"
        startIcon={<MinusCircleIcon />}
        onClick={handleDecrease}
      >
        Increase
      </Button>
    </Stack>
  );
};

export default Buttons;
