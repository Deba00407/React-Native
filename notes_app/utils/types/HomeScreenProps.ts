import { NoteType } from "./NoteType";

export type HomeScreenProps = {
    hasNotes: boolean | null,
    notes : NoteType[] | null
};