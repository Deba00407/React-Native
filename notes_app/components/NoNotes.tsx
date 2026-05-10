import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import SafeWrapper from "./SafeWrapper";

const NoNotesScreen = () => {
  return (
    <SafeWrapper>
      <View style={styles.container}>
        <Image
          source={require("@/assets/my-images/illustrations/notes-illustration.png")}
          style={styles.illustration}
        />
        <Text style={styles.head_text}>Your digital paper is blank!</Text>
        <Text style={styles.sub_head_text}>
          Add a new note to start capturing your thoughts and ideas
        </Text>
        <Text>Let the creativity unleash!!</Text>
      </View>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  illustration: {
    width: 220,
    height: 220,
    resizeMode: "contain",
  },

  head_text: {
    fontSize: 18,
    fontWeight: "600",
  },

  sub_head_text: {
    fontSize: 16,
    fontWeight: "500",
    maxWidth: 280,
    textAlign: "center",
    lineHeight: 24,
    marginTop: 8,
  },
});

export default NoNotesScreen;
