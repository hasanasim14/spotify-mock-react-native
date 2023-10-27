import { Image, Text, View, ScrollView } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardPlaylist() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: "row" }}
      >
        <View>
          <Image
            source={require("../../assets/dark-icon.png")}
            style={styles.PlaylistIcon}
          />
        </View>

        <View style={styles.PlayListContainer}>
          <Text style={styles.PlaylistText}>DARK</Text>
        </View>

        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/Images/Dashboard/weeknd-icon.png")}
            style={styles.PlaylistIcon}
          />
        </View>
        <View style={styles.Container2}>
          <Text style={styles.PlaylistText}>My Mix</Text>
        </View>

        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/Images/Dashboard/humble-icon.jpg")}
            style={styles.PlaylistIcon}
          />

          <View style={styles.Container3}>
            <Text style={styles.PlaylistText}>LAMAR</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}
