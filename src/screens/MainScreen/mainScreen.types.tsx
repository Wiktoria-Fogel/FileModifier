import AppRouteProp from "../../helpers/navigationHelper";
import { FileModifierProps } from "../FileModifierScren/fileModifierScreen.types";

export type MainScreenProps = {
  //
};

export type MainScreenRouteProps = {
  Home: MainScreenProps;
};

export type NavigationProps = AppRouteProp<
  {
    Home: MainScreenProps;
    FileModifier: FileModifierProps;
  },
  "Home"
>;
