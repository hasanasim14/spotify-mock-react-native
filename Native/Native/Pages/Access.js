import { ImageBackground, Text, View, Image } from "react-native";
import { styles } from "../assets/Styling/StyleSheet";

import SignUpButton from "../Components/Acess/SignUpButton";
import SignInButton from "../Components/Acess/SignInButton";

export default function Access({ navigation }) {
  const handleSignPress = () => {
    navigation.navigate("SignUp");
  };

  return (
    <View style={styles.AccessContainer}>
      <ImageBackground
        source={require("../assets/acess.png")}
        style={styles.AccessImageBackground}
      >
        <View style={{ position: "absolute" }}>
          <Image
            source={require("../assets/music-logo-solid.png")}
            style={styles.AccessImage}
          />
        </View>
        <View>
          <Text style={styles.AccessText}>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore
          </Text>
          <SignUpButton onPress={handleSignPress} navigation={navigation} />
          <SignInButton />
        </View>
      </ImageBackground>
    </View>
  );
}
