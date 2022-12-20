import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "react-query";
import { RouterProvider } from "react-router-dom";
import "./App.css";
import { router } from "./routes/AppRoutes";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: "#001B48",
      },
      secondary: {
        main: "#1A325A",
      },
    },
    typography: {
      fontFamily: ["Poppins", "Arial", "helvetica"].join(","),
      button: {
        textTransform: "none",
        fontWeight: "bold",
      },
    },
  });

  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;
