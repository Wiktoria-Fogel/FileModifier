import { View } from "react-native";
import { Text } from "react-native";
import AppButton from "../../components/AppButton/AppButton";
import { FC, useState } from "react";
import DocumentPicker, {
  DocumentPickerResponse,
} from "react-native-document-picker";
import { NavigationProps } from "./mainScreen.types";
import { styles } from "./mainScrren.styles";
import { AppTexts } from "../../common/strings";

export const MainScreen: FC<NavigationProps> = ({ navigation }) => {
  const [file, setFile] = useState<DocumentPickerResponse | undefined>(
    undefined
  );
  const fileName = file ? file.name : AppTexts.NO_SELECTED;

  const selectPDF = async () => {
    try {
      const doc = await DocumentPicker.pickSingle({
        type: [DocumentPicker.types.pdf],
      });
      setFile(doc);
    } catch (error) {
      if (DocumentPicker.isCancel(error))
        console.log("User cancelled the upload", error);
      else console.log(error);
    }
  };

  const goToModifier = (selectedFile: DocumentPickerResponse | undefined) => {
    if (selectedFile !== undefined) {
      navigation.navigate("FileModifier", { document: selectedFile.uri });
    }
  };

  return (
    <View style={styles.mainWrapper}>
      <View style={styles.cardWrapper}>
        <Text style={styles.title}>{AppTexts.HOME_TITLE}</Text>
        <View style={styles.container}>
          <Text style={styles.label}>{`${AppTexts.FILE_NAME}: `}</Text>
          <Text style={styles.simpleText}>{fileName}</Text>
        </View>
        <AppButton value={AppTexts.ADD_FILE} onClick={selectPDF} />
      </View>
      <AppButton
        value={AppTexts.EDIT}
        onClick={() => goToModifier(file)}
        disabled={file ? false : true}
      />
    </View>
  );
};

export default MainScreen;
