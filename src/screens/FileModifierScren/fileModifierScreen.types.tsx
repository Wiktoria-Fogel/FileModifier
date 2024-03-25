import { MainScreenProps } from "../MainScreen/mainScreen.types";
import AppRouteProp from "../../helpers/navigationHelper";

export type FileModifierProps = {
  document: string;
};

export type FileModifierParams = {
  FileModifier: FileModifierProps;
};

export type NavigationProps = AppRouteProp<
  {
    Home: MainScreenProps;
    FileModifier: FileModifierProps;
  },
  "FileModifier"
>;
