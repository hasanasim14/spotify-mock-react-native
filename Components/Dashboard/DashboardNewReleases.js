import { Image, View, ScrollView, Text } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardNewReleases() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/daftpunk-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>DAFT PUNK</Text>
        </View>

        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/eminem-icon.png")}
            style={styles.ArtistIconCircle}
          />
          <Text style={styles.IconText}>EMINƎM</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/dua-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>DUA LIPA</Text>
        </View>
      </ScrollView>
    </View>
  );
}
