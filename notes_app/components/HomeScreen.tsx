import React from "react";
import { StyleSheet, Text, View } from 'react-native'
import NoNotesScreen from "./NoNotes";
import WithNotesScreen from "./WithNotes";
import { HomeScreenProps } from "../utils/types/HomeScreenProps";

const HomeScreen = ({notes}: HomeScreenProps) => {
    return (
        <View>
            <WithNotesScreen notesData={notes}/>
        </View>
    )
}

const style = StyleSheet.create({})


export default HomeScreen;