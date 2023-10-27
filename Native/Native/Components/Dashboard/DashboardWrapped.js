import { Text, View, Image } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardWrapped() {
  return (
    <View>
      <View
        style={{
          borderColor: "#414348",
          borderRadius: 17,
          backgroundColor: "#414348",
          margin: 10,
          flexDirection: "row",
        }}
      >
        <Image
          source={require("../../assets/summary-icon.png")}
          style={{ width: 130, height: 140, margin: 10 }}
        />

        <Text style={styles.WrappedText}>SEE WHO YOU LISTENED TO IN 2020</Text>
      </View>
    </View>
  );
}
