import { View, Text, ScrollView } from "react-native";
import DashboardWrapped from "../Components/Dashboard/DashboardWrapped";
import DashboardHeader from "../Components/Dashboard/DashboardHeader";
import RecentlyPlayed from "../Components/Dashboard/RecentlyPlayed";
import DashboardPopular from "../Components/Dashboard/DashboardPopular";
import DashboardNewReleases from "../Components/Dashboard/DashboardNewReleases";
import DashboardFeatured from "../Components/Dashboard/DashboardFeatured";
import DashboardPlaylist from "../Components/Dashboard/DashboardPlaylist";

import { styles } from "../assets/Styling/StyleSheet";

export default function Dashboard() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "flex-start",
        backgroundColor: "#1E272E",
        paddingTop: 50,
      }}
    >
      <ScrollView>
        <DashboardHeader />

        <View>
          <Text style={styles.DashboardText}>MY PLAYLISTS</Text>
        </View>

        <DashboardPlaylist />

        <Text style={styles.DashboardText}>RECENTLY PLAYED</Text>
        <RecentlyPlayed />

        <Text style={styles.DashboardText}>2021 wrapped</Text>
        <DashboardWrapped />

        <Text style={styles.DashboardText}>POPULAR</Text>
        <DashboardPopular />

        <Text style={styles.DashboardText}>FEATURED</Text>
        <DashboardFeatured />

        <Text style={styles.DashboardText}>NEW RELEASES</Text>
        <DashboardNewReleases />
      </ScrollView>
    </View>
  );
}
