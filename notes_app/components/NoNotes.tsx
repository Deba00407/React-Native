import React from "react";
import { Image, StyleSheet, Text, View, Pressable } from "react-native";

import SafeWrapper from "./SafeWrapper";

type NoNotesScreenProps = {
  onCreateFirstNote: () => void;
};

const NoNotesScreen = ({ onCreateFirstNote }: NoNotesScreenProps) => {
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

        <Text style={styles.creative_text}>Let the creativity unleash!!</Text>

        <Pressable
          style={({ pressed }) => [
            styles.createButton,
            {
              opacity: pressed ? 0.85 : 1,

              transform: [
                {
                  scale: pressed ? 0.96 : 1,
                },
              ],
            },
          ]}
          onPress={onCreateFirstNote}
        >
          <Text style={styles.buttonText}>Create First Note</Text>
        </Pressable>
        
      </View>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,

    justifyContent: "center",

    alignItems: "center",

    paddingHorizontal: 24,
  },

  illustration: {
    width: 220,

    height: 220,

    resizeMode: "contain",
  },

  head_text: {
    fontSize: 22,

    fontWeight: "700",

    color: "#111827",

    marginTop: 12,
  },

  sub_head_text: {
    fontSize: 16,

    fontWeight: "500",

    maxWidth: 280,

    textAlign: "center",

    lineHeight: 24,

    marginTop: 10,

    color: "#6b7280",
  },

  creative_text: {
    marginTop: 12,

    fontSize: 15,

    color: "#9ca3af",
  },

  createButton: {
    marginTop: 32,

    backgroundColor: "#111827",

    paddingHorizontal: 28,

    paddingVertical: 14,

    borderRadius: 18,
  },

  buttonText: {
    color: "#ffffff",

    fontSize: 15,

    fontWeight: "700",
  },
});

export default NoNotesScreen;
