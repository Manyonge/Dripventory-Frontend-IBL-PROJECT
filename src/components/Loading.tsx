import { CircularProgress } from "@mui/material";
import { RowBox } from "./RowBox";

interface Props {}

export const Loading = (props: Props) => {
  const {} = props;

  return (
    <RowBox>
      <CircularProgress />
    </RowBox>
  );
};
