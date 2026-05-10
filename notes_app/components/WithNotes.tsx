import React from "react";
import { StyleSheet, FlatList, View } from "react-native";
import { NotesDataType } from "../utils/types/NotesDataType";
import Note from "./Note";

const WithNotesScreen = ({ notesData }: NotesDataType) => {
  return (
    <FlatList
      data={notesData}
      keyExtractor={(note) => note.id}
      renderItem={({ item }) => <Note {...item} />}
      contentContainerStyle={styles.listContainer}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
    />
  );
};

const styles = StyleSheet.create({
  listContainer: {
    paddingTop: 12,
    paddingBottom: 24,
  },

  separator: {
    height: 4,
  },

  emptyContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 24,
  },

  emptyText: {
    fontSize: 18,
    fontWeight: "600",
    color: "#6B7280",
    textAlign: "center",
  },
});

export default WithNotesScreen;
