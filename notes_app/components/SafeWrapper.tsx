import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import {StatusBar} from 'expo-status-bar'

type SafeWrapperProps = {
  children: React.ReactNode;
};

export default function SafeWrapper({children}: SafeWrapperProps){

    return (
      <SafeAreaView style={styles.wrapper}>
        <StatusBar style="light" />
        {children}
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1, // take all width in vertical direction
        justifyContent: 'center',
        alignItems: 'center'
    }
})
