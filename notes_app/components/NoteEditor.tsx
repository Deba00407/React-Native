import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
} from "react-native";
import { NoteType } from "../utils/types/NoteType";
import dayjs from "dayjs";
import "react-native-get-random-values";
import { v7 as uuidv7 } from "uuid";

type NoteEditorProps = {
  currentNote: NoteType | null,
  saveHandler: (note: NoteType) => void,
  deleteHandler: (id: string) => void,
  exitHandler: () => void
};

const NoteEditor = ({ currentNote, saveHandler, deleteHandler, exitHandler }: NoteEditorProps) => {
  const [header, setHeader] = useState<string>("");
  const [content, setContent] = useState<string>("");

  useEffect(() => {
    if (currentNote) {
      setHeader(currentNote.heading);
      setContent(currentNote.mainContent);
    }
  }, [currentNote]);

  const handleSave = () => {
    const newNote: NoteType = {
      id: currentNote ? currentNote.id : uuidv7(),

      heading: header,

      preview: content.slice(0, 80),

      mainContent: content,

      timeStamp: dayjs(),
    };

    saveHandler(newNote);
  };

  const handleDelete = (id: string) => {
    deleteHandler(id)
  }

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <View style={styles.card}>
        <View style={styles.inputSection}>
          <Text style={styles.label}>Heading</Text>

          <TextInput
            placeholder="Enter heading"
            placeholderTextColor="#888"
            value={header}
            onChangeText={setHeader}
            style={styles.headerInput}
          />
        </View>

        <View style={styles.inputSection}>
          <Text style={styles.label}>Content</Text>

          <TextInput
            placeholder="Content here..."
            placeholderTextColor="#888"
            value={content}
            onChangeText={setContent}
            multiline
            textAlignVertical="top"
            textBreakStrategy="highQuality"
            style={styles.contentInput}
          />
        </View>

        <View style={styles.footerSection}>
          <Pressable onPress={handleSave}>
            <Text>SAVE</Text>
          </Pressable>

          <Pressable onPress={exitHandler}>
            <Text>EXIT</Text>
          </Pressable>

          <Pressable onPress={() => {
            if(currentNote){
                handleDelete(currentNote.id);
            }
          }}>
            <Text>DELETE</Text>
          </Pressable>
        </View>

      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    padding: 16,
  },

  card: {
    flex: 1,
    backgroundColor: "#fff",
    borderRadius: 18,
    padding: 18,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  inputSection: {
    marginBottom: 24,
  },

  footerSection: {
    flex: 1,
    flexDirection: 'row',
    gap: 10,
    alignContent: 'center',
  },

  label: {
    fontSize: 15,
    fontWeight: "600",
    color: "#555",
    marginBottom: 10,
    marginLeft: 4,
  },

  headerInput: {
    fontSize: 22,
    fontWeight: "700",
    color: "#111",
    backgroundColor: "#f8f8f8",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 14,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },

  contentInput: {
    minHeight: 250,
    fontSize: 17,
    color: "#222",
    lineHeight: 28,
    backgroundColor: "#f8f8f8",
    borderRadius: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderWidth: 1,
    borderColor: "#e5e5e5",
  },
});

export default NoteEditor;
