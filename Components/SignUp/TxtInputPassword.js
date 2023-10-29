import { View, Text, TextInput, Image } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function TxtInputPassword() {
  return (
    <View style={{ flex: 1 }}>
      <Text style={styles.placeholder_id_txt}>Password</Text>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <Image
            source={require("../../assets/password-icon.png")}
            style={styles.icon}
          />
          <TextInput
            style={styles.txtinput}
            placeholder="*************"
            secureTextEntry={true}
            placeholderTextColor="#D3D3D3"
          />
        </View>
      </View>
    </View>
  );
}
