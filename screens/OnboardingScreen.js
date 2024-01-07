import { View, Text, StyleSheet, Image } from "react-native";
import React from "react";
import Onboarding from "react-native-onboarding-swiper";
import { useNavigation } from "@react-navigation/native";
import { setItem } from "../utils/asyncStorage";


export default function OnboardingScreen() {
  const navigation = useNavigation();

  const handleDone = () => {
    navigation.navigate("Home");
    setItem("onboarded", "1");
  };
  
  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        
        bottomBarHighlight={false}
        containerStyles={{ paddingHorizontal: 20 }}
        pages={[
          {
            backgroundColor: "#a7f3d0",
            image: (
              <View style={styles.lottieContainer}>
               <Image
                source={require("../assets/Gif/t.gif")}
                style={styles.image}
              />
              </View>
            ),
            title: "Welcome To NoteShare ",
            subtitle: "Your digital Study Buddy",
          },
          {
            backgroundColor: "#fef3c7",
            image: (
              <View style={styles.lottieContainer}>
                <Image
                source={require("../assets/Gif/s.gif")}
                style={styles.image}
              />
              </View>
            ),
            title: "Experiment and Learn",
            subtitle: "All in one app for your notes,books entertainment and much more",
          },
          {
            backgroundColor: "#a78bfa",
            image: (
              <View style={styles.lottieContainer}>
                <Image
                source={require("../assets/Gif/f.gif")}
                style={styles.image}
              />
              </View>
            ),
            title:"ALL CHECKS DONE ",
            subtitle: "YOU ARE READY TO ENTER DIGITAL ERA OF LEARNING",
          },
        ]}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  lottie: {
    width: 300,
    height: 400,
  },
});
