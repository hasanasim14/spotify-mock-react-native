import { View, Text, Image } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardHeader() {
  return (
    <View style={styles.HeaderContainer}>
      <Text style={styles.DashboardText}>GOOD MORNING Rebecca!</Text>

      <View style={styles.iconContainer}>
        <Image
          source={require("../../assets/Images/Dashboard/gradient-search-icon.png")}
        />
        <Image
          source={require("../../assets/Images/Dashboard/menu-icon.png")}
          style={styles.HeaderImage}
        />
      </View>
    </View>
  );
}
