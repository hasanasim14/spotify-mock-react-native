import { Text, TouchableOpacity, View } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function SignButton({ onPress, navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <TouchableOpacity style={styles.SignInBtn} onPress={onPress}>
        <Text style={styles.buttonText}>Sign Up</Text>
      </TouchableOpacity>
    </View>
  );
}
