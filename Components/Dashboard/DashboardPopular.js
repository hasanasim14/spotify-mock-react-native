import { ScrollView, View, Image, Text } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardPopular() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: "row" }}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/Images/Dashboard/weeknd-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>THE WEEKND</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/kendrick-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>KENDRICK LAMAR</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/eminem-icon.png")}
            style={styles.ArtistIcon}
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
