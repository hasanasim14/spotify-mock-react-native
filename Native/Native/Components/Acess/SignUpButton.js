import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function SignUpButton({ onPress, navigation }) {
  return (
    <View>
      <View style={styles.SignInContainer}>
        <TouchableOpacity style={styles.SignInButton} onPress={onPress}>
          <Text style={styles.ButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
