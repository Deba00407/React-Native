import { View, StyleSheet} from "react-native";
import TopSection from "../../components/TopSection";
import MiddleFormSection from "../../components/MiddleFormSection";
import BottomSection from "../../components/BottomSection";

export default function Index() {
  return (
    <View style={styles.container}>
        <TopSection />
        <MiddleFormSection />
        <BottomSection />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: '#F5F5F5',
    gap: 40
  },
});
