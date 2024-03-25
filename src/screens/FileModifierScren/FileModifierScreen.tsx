import { View } from "react-native";
import MyViewer from "../../components/Viewer/Viewer";
import React, { FC } from "react";
import { NavigationProps } from "./fileModifierScreen.types";
import { styles } from "./fileModifierScreen.styles";

const FileModifierScreen: FC<NavigationProps> = ({ route }) => {
  return (
    <View style={styles.mainWrapper}>
      <MyViewer document={route.params.document} />
    </View>
  );
};

export default FileModifierScreen;
