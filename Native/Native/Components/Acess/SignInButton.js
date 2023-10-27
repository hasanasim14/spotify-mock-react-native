import { Text, View, TouchableOpacity, StyleSheet, Image } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function SignInButton() {
  return (
    <View>
      <View style={styles.SignUpContainer}>
        <TouchableOpacity style={styles.SignUpButton}>
          <Text style={styles.ButtonText}>Sign In</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
