import { View, TouchableOpacity, Image, Text } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function GoogleButton() {
  const onPressHandler = () => {
    console.log("Google");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/Images/SignUp/google.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.buttonText}>Google</Text>
      </View>
    </TouchableOpacity>
  );
}
