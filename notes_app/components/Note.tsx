import React from "react";
import { View, StyleSheet, Text, Pressable } from "react-native";
import { NoteType } from "../utils/types/NoteType";
import dayjs from "dayjs";

type NotePropsType = {
  note: NoteType,
  onPressHandler: (currNote: NoteType) => void;
};

export default function Note({ note, onPressHandler }: NotePropsType) {

  const formattedTime = dayjs(note.timeStamp).format("DD MMM YYYY • hh:mm A");

 const previewText =
   note.mainContent.length > 25
     ? note.mainContent.slice(0, 25) + "..."
     : note.mainContent;

  return (
    <Pressable
      style={styles.noteContainer}
      onPress={() => onPressHandler(note)}
    >
      <Text style={styles.heading}>{note.heading}</Text>
      <Text style={styles.preview}>{previewText}</Text>
      <Text style={styles.timestamp}>{formattedTime}</Text>
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
    minWidth: "90%",

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,

    elevation: 3,
  },

  timestamp: {
    marginTop: 14,

    alignSelf: "flex-end",

    fontSize: 12,

    color: "#9CA3AF",

    fontWeight: "500",
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
