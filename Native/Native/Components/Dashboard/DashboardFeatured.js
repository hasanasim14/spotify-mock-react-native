import { View, Image, Text, TouchableOpacity } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardFeatured() {
  return (
    <View style={styles.FeaturedContainer}>
      <Image
        source={require("../../assets/featured-icon.png")}
        style={styles.FeaturedImage}
      ></Image>
      <TouchableOpacity style={styles.FeaturedButton}>
        <Text style={styles.FeaturedText}>CHECK IT OUT</Text>
      </TouchableOpacity>
    </View>
  );
}
