import React from "react";
import { ScrollView, View, Image, Text } from "react-native";
import { styles } from "../../assets/Styling/StyleSheet";

export default function DashboardRecently() {
  return (
    <View>
      <ScrollView
        horizontal={true}
        contentContainerStyle={{ flexDirection: "row" }}
        showsHorizontalScrollIndicator={false}
      >
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/dua-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>DUA LIPA</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/Images/Dashboard/weeknd-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>THE WEEKND</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/ed-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>ED SHEERAN</Text>
        </View>
        <View style={{ marginRight: 10 }}>
          <Image
            source={require("../../assets/selena-icon.png")}
            style={styles.ArtistIcon}
          />
          <Text style={styles.IconText}>SELENA GOMEZ</Text>
        </View>
      </ScrollView>
    </View>
  );
}
