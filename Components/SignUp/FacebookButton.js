import { TouchableOpacity, Image, Text, View } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function FacebookButton() {
  const onPressHandler = () => {
    console.log("Facebook");
  };
  return (
    <TouchableOpacity style={styles.button} onPress={onPressHandler}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <Image
          source={require("../../assets/fb.png")}
          style={{ width: 25, height: 25 }}
        />
        <Text style={styles.buttonText}>Facebook</Text>
      </View>
    </TouchableOpacity>
  );
}
