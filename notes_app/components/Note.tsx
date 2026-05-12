import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { NoteType } from "../utils/types/NoteType";

type NotePropsType = {
  note: NoteType,
  onPressHandler: (currNote: NoteType) => void;
};

export default function Note({ note, onPressHandler }: NotePropsType) {
  return (
    <Pressable
      key={note.id}
      style={styles.noteContainer}
      onPress={() => onPressHandler(note)}
    >
      <Text style={styles.heading}>{note.heading}</Text>
      <Text style={styles.preview}>{note.preview}</Text>
      <Text style={styles.preview}>{note.mainContent}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  noteContainer: {
    backgroundColor: "#FFFFFF",
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 16,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  heading: {
    fontSize: 18,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 8,
  },

  preview: {
    fontSize: 14,
    lineHeight: 22,
    color: "#6B7280",
  },
});
