import { View, Image, StyleSheet, ImageBackground } from "react-native";

export default function SignUpHeader() {
  return (
    <View style={styles.Container}>
      <ImageBackground
        source={require("../../assets/Images/SignUp/background.png")}
        style={styles.Background}
      ></ImageBackground>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    backgroundColor: "#1E272E",
    alignItems: "center",
  },
  Background: {
    flex: 0,
    top: 0,
    width: "100%",
    height: 232,
  },
});
