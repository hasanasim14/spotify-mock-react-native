import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container1: {
    flex: 1,
    backgroundColor: "#373F45",
    justifyContent: "center",
    alignContent: "center",
  },
  txt: {
    // alignItems: "center",
    textAlign: "center",
    color: "white",
    margin: 10,
  },
  txtinput: {
    // flex: 1,
    margin: 13,
    backgroundColor: "#50575C",
    borderRadius: 5,
    padding: 10,
    color: "white",
  },
  inputBackground: {
    width: 10,
    height: 20,
    padding: 10,
  },

  txt2: {
    color: "white",
    alignItems: "center",
  },

  placeholder_id_txt: {
    color: "white",
    marginLeft: 20,
  },

  button: {
    backgroundColor: "#1E272E",
    padding: 15,
    // paddingRight: 10,
    justifyContent: "center",
    borderRadius: 15,
    width: 150,
    margin: 13,
  },
  buttonText: {
    color: "white",
    fontSize: 18,
    // textAlign: "center",
    marginLeft: 10,
  },

  // container: {
  //   // flex: 1,
  //   justifyContent: "center",
  //   alignItems: "center",
  // },
  inputContainer: {
    flexDirection: "row",
    // alignItems: "center",
    // borderColor:"#50575C",
    borderWidth: 1,
    borderColor: "#50575C",
    borderRadius: 5,
    padding: 5,
    marginLeft: 15,
    marginTop: 7,
    marginBottom: 5,
    marginTop: 10,
    paddingLeft: 5,
    maxWidth: "87%",
  },
  icon: {
    width: 20,
    height: 20,
    margin: 7,
  },
  txtinput: {
    flex: 1,
    fontSize: 16,
    backgroundColor: "transparent",
  },

  SignInBtn: {
    backgroundColor: (244, 109, 31),
    justifyContent: "center",
    borderRadius: 15,
    height: 55,
    width: 350,
    marginTop: 20,
    alignItems: "center",
  },

  //Yahan say correct styling
  Hyperlink: {
    textAlign: "center",
    color: "white",
    margin: 10,
    textDecorationLine: "underline",
  },
  SignInContainer: {
    alignItems: "center",
    flex: 1,
  },
  SignInButton: {
    backgroundColor: "transparent",
    borderRadius: 16,
    height: 55,
    width: 350,
    justifyContent: "center",
    marginTop: 20,
    alignItems: "center",
    borderWidth: 2,
    borderColor: "white",
    maxWidth: "60%",
    top: 540,
    opacity: 1,
  },
  ButtonText: {
    color: "white",
    fontSize: 18,
  },
  SignUpContainer: {
    alignItems: "center",
    flex: 1,
  },
  SignUpButton: {
    backgroundColor: "#F46D1F",
    borderRadius: 15,
    height: 55,
    width: 350,
    marginTop: 20,
    alignItems: "center",
    maxWidth: "60%",
    top: 470,
    opacity: 1,
    justifyContent: "center",
  },
  HeaderContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingRight: 20,
  },
  DashboardText: {
    color: "white",
    margin: 15,
    letterSpacing: 1.8,
  },
  iconContainer: {
    flexDirection: "row",
    marginTop: 5,
  },
  HeaderImage: {
    backgroundColor: "white",
    borderRadius: 20,
    width: 20,
    height: 20,
    padding: 15,
    marginLeft: 15,
  },

  AccessContainer: {
    flex: 1,
  },

  AccessImageBackground: {
    top: 0,
    left: 0,
    width: 360,
    height: 812,
  },
  AccessText: {
    top: 460,
    left: 75,
    width: 244,
    height: 72,
    color: "#FFFFFF",
    letterSpacing: 0.7,
    opacity: 1,
  },

  AccessImage: {
    top: 315,
    left: 78,
    width: 220,
    height: 135,
    opacity: 1,
  },

  PlayListContainer: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 440,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  Container2: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 100,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  Container3: {
    position: "absolute",
    top: 80,
    left: 0,
    right: 90,
    bottom: 0,
    justifyContent: "center",
    alignItems: "center",
  },
  PlaylistIcon: {
    borderRadius: 20,
    width: 170,
    height: 170,
  },

  PlaylistText: {
    color: "white",
    letterSpacing: 1.7,
  },

  FeaturedContainer: {
    flex: 1,
    justifyContent: "center",
  },
  FeaturedImage: {
    left: 0,
    width: 375,
    height: 157,
    resizeMode: "contain",
    opacity: 1,
  },
  FeaturedButton: {
    backgroundColor: "transparent",
    padding: 10,
    borderWidth: 1,
    borderColor: "white",
    borderRadius: 30,
    alignItems: "center",
    maxWidth: "45%",
    top: -60,
    left: 20,
  },
  FeaturedText: {
    color: "white",
  },
  ArtistIcon: {
    width: 130,
    height: 130,
    borderRadius: 20,
  },
  ArtistIconCircle: {
    width: 130,
    height: 130,
    borderRadius: 65,
  },
  IconText: {
    textAlign: "center",
    color: "white",
    letterSpacing: 1.4,
  },

  WrappedText: {
    color: "white",
    margin: 15,
    alignItems: "center",
    flex: 1,
    fontWeight: "bold",
    marginTop: 20,
  },
  Avatar: {
    top: -50,
    height: 100,
    width: 100,
    left: 138,
    marginBottom: -50,
  },
  SignUpContainer1: {
    flex: 1,
    backgroundColor: "#373F45",
    top: 153,
    left: 0,
    width: 375,
    height: 871,
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },

  SignUpText: {
    top: 8,
    left: 20,
    width: 88,
    height: 20,
    color: "#FFFFFF",
    letterSpacing: 0.7,
  },

  PageText: {
    top: 64,
    left: 287,
    width: 68,
    height: 25,
    color: "black",
    textAlign: "right",
    letterSpacing: 0.01,
    opacity: 1,
  },
});

export { styles };
