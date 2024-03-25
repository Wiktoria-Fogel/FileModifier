import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FileModifierScreen from "./src/screens/FileModifierScren/FileModifierScreen";
import MainScreen from "./src/screens/MainScreen/MainScreen";
import { FileModifierProps } from "./src/screens/FileModifierScren/fileModifierScreen.types";
import { MainScreenProps } from "./src/screens/MainScreen/mainScreen.types";

type RootStackParamList = {
  Home: MainScreenProps;
  FileModifier: FileModifierProps;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name={"Home"} component={MainScreen} />
        <Stack.Screen name={"FileModifier"} component={FileModifierScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
