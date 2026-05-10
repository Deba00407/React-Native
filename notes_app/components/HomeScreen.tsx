import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import NoNotesScreen from "./NoNotes";
import WithNotesScreen from "./WithNotes";
import { HomeScreenProps } from "../utils/types/HomeScreenProps";

const HomeScreen = ({hasNotes, notes}: HomeScreenProps) => {
    return (
        <View>
            {hasNotes ? <WithNotesScreen notesData={notes}/> : <NoNotesScreen />}
        </View>
    )
}

const style = StyleSheet.create({})


export default HomeScreen;