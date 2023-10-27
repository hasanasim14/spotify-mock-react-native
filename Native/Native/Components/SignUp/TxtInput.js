import { TextInput, View } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function TxtInput(props) {
  return (
    <View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.txtinput}
          placeholder={props.data}
          placeholderTextColor="#D3D3D3"
        />
      </View>
    </View>
  );
}
