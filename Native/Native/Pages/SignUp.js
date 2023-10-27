import { Text, Image, View, TouchableOpacity, ScrollView } from "react-native";
import TxtInput from "../Components/SignUp/TxtInput";
import SignButton from "../Components/SignUp/SignButton";
import GoogleButton from "../Components/SignUp/GoogleButton";
import FacebookButton from "../Components/SignUp/FacebookButton";

import { styles } from "../assets/Styling/StyleSheet";

export default function SignUp({ navigation }) {
  const handleSignPress = () => {
    navigation.navigate("Dashboard");
  };

  return (
    <ScrollView>
      <View style={{ justifyContent: "flex-start", flex: 1 }}>
        <View style={styles.SignUpContainer1}>
          <Image
            source={require("../assets/Images/SignUp/avatar.png")}
            style={styles.Avatar}
          />
          <Text style={styles.SignUpText}>First Name*</Text>
          <TxtInput label="First Name" data={"First Name"} />

          <Text style={styles.SignUpText}>Last Name*</Text>
          <TxtInput data={"Last Name"} />

          <Text style={styles.SignUpText}>Phone</Text>
          <TxtInput data={"Enter Your Phone Number"} />

          <Text style={styles.SignUpText}>Email</Text>
          <TxtInput data={"Enter Your Email"} />

          <Text style={styles.SignUpText}>Password</Text>
          <TxtInput data={"********"} />

          <SignButton onPress={handleSignPress} navigation={navigation} />

          <View style={{ alignItems: "center" }}>
            <Text style={{ color: "white" }}> - OR - </Text>
            <Text style={{ color: "white" }}>Sign Up With</Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            <FacebookButton />
            <GoogleButton />
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text style={{ color: "white" }}>Already Have an account? </Text>
            <TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  textDecorationLine: "underline",
                }}
              >
                Sign In
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}
