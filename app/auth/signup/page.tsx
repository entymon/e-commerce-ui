import { Button, Link, Stack, TextField } from "@mui/material";
import NextLink from "next/link";

export default function SignUp() {
  return (
    <Stack spacing={2} className="w-3/12 max-w-sx">
      <TextField label="Email" variant="outlined" type="email" />
      <TextField label="Password" variant="outlined" type="password" />
      <Button variant="contained">Signup</Button>
      <Link component={NextLink} href="/auth/login" className="self-center">
        Login
      </Link>
    </Stack>
  );
}