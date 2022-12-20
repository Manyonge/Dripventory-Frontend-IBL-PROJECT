import { Typography, useTheme } from "@mui/material";
import { RowBox } from "./RowBox";

interface Props {
  variant:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "subtitle1"
    | "subtitle2"
    | "body1"
    | "body2"
    | "caption"
    | "button"
    | "overline"
    | "inherit"
    | undefined;
  msg: string;
}

export const ErrorTypography = (props: Props) => {
  const { variant, msg } = props;
  const theme = useTheme();
  return (
    <RowBox>
      <Typography variant={variant} sx={{ color: `red` }}>
        {msg}
      </Typography>
    </RowBox>
  );
};
