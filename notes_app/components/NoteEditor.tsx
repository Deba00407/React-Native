import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  Text,
  Pressable,
  Image,
} from "react-native";

import { NoteType } from "../utils/types/NoteType";

import dayjs from "dayjs";

import "react-native-get-random-values";

import { v7 as uuidv7 } from "uuid";
import SafeWrapper from "./SafeWrapper";

type NoteEditorProps = {
  currentNote: NoteType | null;

  saveHandler: (note: NoteType) => Promise<void>;

  deleteHandler: (id: string) => Promise<void>;

  exitHandler: () => void;
};

const NoteEditor = ({
  currentNote,
  saveHandler,
  deleteHandler,
  exitHandler,
}: NoteEditorProps) => {
  const [header, setHeader] = useState<string>("");

  const [content, setContent] = useState<string>("");

  const [currentState, setCurrentState] = useState<string | null>(null);

  useEffect(() => {
    if (currentNote) {
      setHeader(currentNote.heading);

      setContent(currentNote.mainContent);
    }
  }, [currentNote]);

  const handleSave = async () => {
    try {
      setCurrentState("Saving....");

      const newNote: NoteType = {
        id: currentNote ? currentNote.id : uuidv7(),

        heading: header,

        mainContent: content,

        backGroundImage: "https://picsum.photos/400",

        timeStamp: dayjs(),
      };

      await saveHandler(newNote);
    } catch (error) {
      console.error(error);
    } finally {
      setCurrentState(null);
    }
  };

  const handleDelete = async (id: string) => {
    try {
      setCurrentState("Deleting....");
      await deleteHandler(id);
    } catch (error) {
      console.error(error);
    } finally {
      setCurrentState(null);
    }
  };

  return (
    <SafeWrapper>
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

          <View style={[styles.inputSection, { flex: 1 }]}>
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

          {currentState && (
            <Text style={styles.statusText}>
              {currentState === "saving" ? "Saving..." : "Deleting..."}
            </Text>
          )}

          <View style={styles.footerSection}>
            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                {
                  transform: [
                    {
                      scale: pressed ? 0.92 : 1,
                    },
                  ],

                  opacity: pressed ? 0.7 : 1,
                },
              ]}
              onPress={handleSave}
            >
              <Image
                source={require("@/assets/my-images/icons/save-icon-animated.png")}
                style={styles.footerIcon}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                {
                  transform: [
                    {
                      scale: pressed ? 0.92 : 1,
                    },
                  ],

                  opacity: pressed ? 0.7 : 1,
                },
              ]}
              onPress={exitHandler}
            >
              <Image
                source={require("@/assets/my-images/icons/exit-icon-animated.png")}
                style={styles.footerIcon}
              />
            </Pressable>

            <Pressable
              style={({ pressed }) => [
                styles.actionButton,
                {
                  transform: [
                    {
                      scale: pressed ? 0.92 : 1,
                    },
                  ],

                  opacity: pressed ? 0.7 : 1,
                },
              ]}
              onPress={() => {
                if (currentNote) {
                  handleDelete(currentNote.id);
                }
              }}
            >
              <Image
                source={require("@/assets/my-images/icons/trash-icon-animated.png")}
                style={styles.footerIcon}
              />
            </Pressable>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeWrapper>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#eef2f7",
    minWidth: "80%",

    padding: 18,
  },

  card: {
    flex: 1,
    minWidth: "100%",

    backgroundColor: "#ffffff",

    borderRadius: 30,

    paddingHorizontal: 22,

    paddingTop: 24,

    paddingBottom: 20,

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 10,
    },

    shadowOpacity: 0.08,

    shadowRadius: 18,

    elevation: 8,
  },

  inputSection: {
    marginBottom: 28,
  },

  label: {
    fontSize: 14,

    fontWeight: "700",

    color: "#6b7280",

    marginBottom: 10,

    marginLeft: 6,

    letterSpacing: 0.5,

    textTransform: "uppercase",
  },

  headerInput: {
    fontSize: 24,

    fontWeight: "700",

    color: "#111827",

    backgroundColor: "#f8fafc",

    borderRadius: 20,

    paddingHorizontal: 18,

    paddingVertical: 16,

    borderWidth: 1,

    borderColor: "#e5e7eb",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.03,

    shadowRadius: 5,

    elevation: 1,
  },

  statusText: {
  textAlign: "center",

  color: "#6b7280",

  fontSize: 13,

  marginBottom: 8,
},

  contentInput: {
    minHeight: 320,

    fontSize: 17,

    color: "#1f2937",

    lineHeight: 30,

    textAlignVertical: "top",

    backgroundColor: "#f8fafc",

    borderRadius: 20,

    paddingHorizontal: 18,

    paddingVertical: 18,

    borderWidth: 1,

    borderColor: "#e5e7eb",

    shadowColor: "#000",

    shadowOffset: {
      width: 0,
      height: 2,
    },

    shadowOpacity: 0.03,

    shadowRadius: 5,

    elevation: 1,
  },

  footerSection: {
    marginTop: "auto",

    flexDirection: "row",

    justifyContent: "space-evenly",

    alignItems: "center",

    paddingTop: 8,
  },

  actionButton: {
    justifyContent: "center",

    alignItems: "center",

    paddingVertical: 10,

    paddingHorizontal: 16,
  },

  footerIcon: {
    height: 34,

    width: 34,

    resizeMode: "contain",

    opacity: 0.96,
  },

  buttonText: {
    marginTop: 6,

    color: "#4b5563",

    fontSize: 11,

    fontWeight: "700",

    letterSpacing: 1.2,

    textTransform: "uppercase",
  },
});

export default NoteEditor;
