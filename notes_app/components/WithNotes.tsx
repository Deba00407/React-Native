import React, { useState } from "react";
import { StyleSheet, FlatList, View, Pressable, Text } from "react-native";
import { NotesDataType } from "../utils/types/NotesDataType";
import Note from "./Note";
import { NoteType } from "../utils/types/NoteType";
import NoteEditor from "./NoteEditor";
import AsyncStorage from "@react-native-async-storage/async-storage";
import SafeWrapper from "./SafeWrapper";
import NoNotesScreen from "./NoNotes";

const WithNotesScreen = ({ notesData }: NotesDataType) => {

  const [isCreating, setIsCreating] = useState(false);

  const [selectedNote, setSelectedNote] = useState<NoteType | null>(null);

  async function saveNote(newNoteData: NoteType) {
    try {
      let savedData: NoteType[];

      const data = await AsyncStorage.getItem("notes");
      if (data === null) {
        savedData = [];
      } else {
        const parsedData: NoteType[] = JSON.parse(data);
        savedData = parsedData;
      }

      // if the note already exists, remove the previous state and keep only the update state
      savedData = savedData.filter((note) => note.id !== newNoteData.id);

      // insert new note into the array
      savedData.push(newNoteData);

      // save new data to local storage
      await AsyncStorage.setItem("notes", JSON.stringify(savedData));
    } catch (error) {
      console.error(error);
    }
  }
  
  async function deleteNote(noteid: string){
    try {
        let savedData: NoteType[];

        const data = await AsyncStorage.getItem("notes");
        if (data === null) {
          savedData = [];
        } else {
          const parsedData: NoteType[] = JSON.parse(data);
          savedData = parsedData;
        }

        // delete the current note
        savedData = savedData.filter(note => note.id !== noteid);

        // save new data to local storage
        await AsyncStorage.setItem("notes", JSON.stringify(savedData));
    } catch (error) {
        console.error(error)
    }finally{
      setSelectedNote(null)
      setIsCreating(false);
    }
  }

  if(selectedNote || isCreating){
    return (
      <NoteEditor currentNote={selectedNote} saveHandler={saveNote} deleteHandler={deleteNote} exitHandler={() => {
        setSelectedNote(null);
        setIsCreating(false);
      }}/>
    )
  };

  if (notesData?.length === 0) {
    return <NoNotesScreen onCreateFirstNote={() => setIsCreating(true)} />;
  }

  return (
    <SafeWrapper>
      <FlatList<NoteType>
        data={notesData}
        keyExtractor={(note) => note.id}
        renderItem={({ item }: { item: NoteType }) => (
          <Note
            note={item}
            onPressHandler={(clickedNote: NoteType) =>
              setSelectedNote(clickedNote)
            }
          />
        )}
        contentContainerStyle={styles.listContainer}
        ItemSeparatorComponent={() => <View style={styles.separator} />}
      />

      <Pressable
        style={({ pressed }) => [
          styles.addButton,
          {
            transform: [
              {
                scale: pressed ? 0.94 : 1,
              },
            ],

            opacity: pressed ? 0.9 : 1,
          },
        ]}
        onPress={() => setIsCreating(true)}
      >
        <Text style={styles.addButtonText}>+</Text>
      </Pressable>
    </SafeWrapper>
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

  addButton: {
    position: "absolute",

    bottom: 28,

    right: 24,

    width: 64,

    height: 64,

    borderRadius: 32,

    backgroundColor: "#111827",

    justifyContent: "center",

    alignItems: "center",

    elevation: 8,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 4,
    },

    shadowOpacity: 0.25,

    shadowRadius: 8,
  },

  addButtonText: {
    color: "#FFFFFF",

    fontSize: 34,

    fontWeight: "300",

    marginTop: -2,
  }
});

export default WithNotesScreen;
