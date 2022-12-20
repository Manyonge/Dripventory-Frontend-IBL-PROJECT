import { Box, SxProps, Theme } from "@mui/material";
interface Props {
  sx?: SxProps<Theme>;
  children: any;
  borderTest?: boolean;
}

export const RowBox = (props: Props) => {
  const { sx, children, borderTest } = props;

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        border: borderTest ? "2px solid red" : "none",
        ...sx,
      }}
    >
      {" "}
      {children}{" "}
    </Box>
  );
};
