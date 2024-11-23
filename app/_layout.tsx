import Layout from "@/screens/Root/Layout";
import { ThemeProvider } from "@/shared/contexts/Theme";

export default function RootLayout() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}
