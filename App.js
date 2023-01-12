import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { NavigationContainer } from "@react-navigation/native";

import { MainNavigator } from "./src/navigators";

const queryClient = new QueryClient();

export default function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <NavigationContainer>
        <MainNavigator />
      </NavigationContainer>
    </QueryClientProvider>
  );
}
