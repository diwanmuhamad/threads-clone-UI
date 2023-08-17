import { SafeAreaView, StyleSheet, ScrollView, Button } from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import LottieView from "lottie-react-native";
import { useRef } from "react";

export default function TabOneScreen() {
  const animation = useRef(null);

  return (
    <SafeAreaView style={styles.animationContainer}>
      <ScrollView>
        <Text>testingg</Text>
        <LottieView
          source={require("../../assets/animations/threads.json")}
          loop={true}
          autoPlay
          ref={animation}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
});
