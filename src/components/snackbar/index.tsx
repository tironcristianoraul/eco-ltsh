import { useState, useEffect } from "react";
import eventEmitter from "../../utils/mitt";
import { Alert, Snackbar as MuiSnackbar, Typography } from "@mui/material";

export type Message = {
  code: number;
  text: string;
};

function getColor(code: number) {
  return code >= 200 && code < 400 ? "success" : "error";
}

const Snackbar = () => {
  const [message, setMessage] = useState("");
  const [open, setOpen] = useState(false);
  const [color, setColor] = useState<"success" | "error" | undefined>();

  useEffect(() => {
    const showMessage = ({ code, text }: Message) => {
      setMessage(text);
      setOpen(true);
      setColor(getColor(code));
      setTimeout(() => setOpen(false), 5000); // Auto-close after 5s
    };

    eventEmitter.on("showSnackbar", showMessage);

    return () => {
      eventEmitter.off("showSnackbar", showMessage);
    };
  }, []);

  if (!open) return null;

  return (
    <MuiSnackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      open={open}
    >
      <Alert color={color}>
        <Typography>{message}</Typography>
      </Alert>
    </MuiSnackbar>
  );
};

export default Snackbar;
