import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Button,
  Platform,
} from "react-native";

import EditScreenInfo from "../../components/EditScreenInfo";
import { Text, View } from "../../components/Themed";
import LottieView from "lottie-react-native";
import { useRef } from "react";
import { RefreshControl } from "react-native-gesture-handler";
import { ThreadsContext } from "../../context/thread-context";
import React from "react";
import ThreadsItem from "../../components/ThreadsItem";

export default function TabOneScreen() {
  const animation = useRef<LottieView>(null);
  const threads = React.useContext(ThreadsContext);
  return (
    <SafeAreaView>
      <ScrollView
        contentContainerStyle={{
          paddingHorizontal: 10,
          paddingTop: Platform.select({ android: 30 }),
        }}
        refreshControl={
          <RefreshControl
            refreshing={false}
            tintColor={"transparent"}
            onRefresh={() => {
              animation.current?.play();
            }}
          />
        }
      >
        <LottieView
          source={require("../../assets/animations/threads.json")}
          loop={false}
          autoPlay
          ref={animation}
          style={{ width: 90, height: 90, alignSelf: "center" }}
        />
        {threads.map((thread) => (
          <ThreadsItem key={thread.id} {...thread}></ThreadsItem>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}
