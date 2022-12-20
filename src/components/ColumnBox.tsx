import { Box, SxProps, Theme } from "@mui/material";

interface Props {
  sx?: SxProps<Theme>;
  children: any;
  borderTest?: boolean;
}

export const ColumnBox = (props: Props) => {
  const { sx, children, borderTest } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        border: borderTest ? "2px solid black" : "none",
        ...sx,
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
};
