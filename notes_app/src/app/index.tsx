import HomeScreen from "../../components/HomeScreen";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { NoteType } from "../../utils/types/NoteType";
import { useEffect, useState } from "react";
import SafeWrapper from "../../components/SafeWrapper";
import sampleNotes from "../../utils/sample-data/sample-notes-data";


export default function Index() {
  const [savedNotes, setSavedNotes] = useState<NoteType[] | null>(null);

  useEffect(() => {
    async function findNotes() {
      try {
        const storedData = await AsyncStorage.getItem("notes");

        if (storedData === null) {
          return;
        }

        const notesData: NoteType[] | null = JSON.parse(storedData);

        setSavedNotes(notesData);
      } catch (error) {
        console.log(error);
        return null;
      }
    }
  }, []); // load only on the first load

  return (
    <SafeWrapper>
      {/* <HomeScreen hasNotes={savedNotes === null ? false : true} notes={savedNotes} /> */}

      <HomeScreen hasNotes={true} notes={sampleNotes} />
    </SafeWrapper>
  );
}


