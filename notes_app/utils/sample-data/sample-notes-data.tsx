import { NoteType} from "../types/NoteType";
import dayjs from "dayjs";

const sampleNotes: NoteType[] = [
  {
    id: "1",
    heading: "Shopping List",
    preview: "Buy milk, bread, and eggs...",
    mainContent:
      "Buy milk, bread, eggs, coffee, and some fruits from the supermarket after class.",
    timeStamp: dayjs(),
  },

  {
    id: "2",
    heading: "React Native Ideas",
    preview: "Implement dark mode and local storage...",
    mainContent:
      "Need to implement AsyncStorage support, smooth dark mode transitions, and note search functionality.",
    timeStamp: dayjs().subtract(2, "hour"),
  },

  {
    id: "3",
    heading: "DSA Revision",
    preview: "Practice binary search and DP...",
    mainContent:
      "Solve at least 3 binary search problems and revise 1D DP patterns before tonight.",
    timeStamp: dayjs().subtract(1, "day"),
  },

  {
    id: "4",
    heading: "Project Roadmap",
    preview: "Build MVP before adding backend...",
    mainContent:
      "Focus on local storage MVP first. Backend sync and authentication can come later.",
    timeStamp: dayjs().subtract(3, "day"),
  },

  {
    id: "5",
    heading: "Meeting Notes",
    preview: "Discussed UI improvements...",
    mainContent:
      "Need cleaner spacing, better typography hierarchy, and smoother navigation animations.",
    timeStamp: dayjs().subtract(1, "week"),
  },

  {
    id: "6",
    heading: "Backend API Tasks",
    preview: "Plan authentication flow...",
    mainContent:
      "Research JWT authentication, refresh tokens, and role-based authorization for future backend integration.",
    timeStamp: dayjs().subtract(5, "hour"),
  },

  {
    id: "7",
    heading: "Workout Routine",
    preview: "Push day exercises...",
    mainContent:
      "Complete bench press, incline dumbbell press, shoulder press, and tricep pushdowns before evening.",
    timeStamp: dayjs().subtract(6, "hour"),
  },

  {
    id: "8",
    heading: "Books to Read",
    preview: "Clean Code and System Design...",
    mainContent:
      "Finish reading Clean Code chapters 4-6 and start Grokking System Design basics this weekend.",
    timeStamp: dayjs().subtract(2, "day"),
  },

  {
    id: "9",
    heading: "Interview Preparation",
    preview: "Revise OS and DBMS concepts...",
    mainContent:
      "Need to revise process scheduling, deadlocks, normalization, indexing, and transaction management.",
    timeStamp: dayjs().subtract(4, "day"),
  },

  {
    id: "10",
    heading: "App UI Improvements",
    preview: "Improve card spacing and shadows...",
    mainContent:
      "Experiment with softer shadows, rounded corners, animated FAB button, and improved dark mode colors.",
    timeStamp: dayjs().subtract(1, "week"),
  },

  {
    id: "11",
    heading: "Weekend Goals",
    preview: "Complete React Native navigation...",
    mainContent:
      "Finish stack navigation setup, screen transitions, and note editor flow before Monday.",
    timeStamp: dayjs().subtract(8, "day"),
  },

  {
    id: "12",
    heading: "Open Source Ideas",
    preview: "Potential developer utility tools...",
    mainContent:
      "Build lightweight productivity tools for developers including snippets manager and terminal dashboard ideas.",
    timeStamp: dayjs().subtract(2, "week"),
  },
];

export default sampleNotes