import { GitHub } from "@mui/icons-material";
import { Button, Stack, TextField } from "@mui/material";
import BasicMenu from "./Dropdown";

const GithubNavbar = () => {
  return (
    <Stack
      direction="row"
      color="black"
      justifyContent="space-between"
      alignItems="center"
      height="70px"
      sx={{
        backgroundColor: "black",
        color: "white",
      }}
    >
      <Stack direction="row" alignItems="center" spacing={2}>
        <GitHub sx={{ fontSize: 40 }} />
        <BasicMenu />
        <BasicMenu />
        <BasicMenu />
      </Stack>
      <Stack direction="row" spacing={4}>
        <TextField
          id="outlined-basic"
          label="Outlined"
          variant="outlined"
          size="small"
          sx={{
            backgroundColor: "white",
          }}
        />
        <Button
          variant="text"
          sx={{ backgroundColor: "transparent", color: "white" }}
        >
          Sign in
        </Button>
        <Button
          variant="outlined"
          sx={{
            backgroundColor: "transparent",
            color: "white",
            borderColor: "white",
          }}
        >
          Sign up
        </Button>
      </Stack>
    </Stack>
  );
};

export default GithubNavbar;
