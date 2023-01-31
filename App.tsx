import { StyleSheet, Text, View } from "react-native";
import Maps from "./components/Maps";
import BottomComponent from "./components/BottomComponent";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.tsx to start working on your app!</Text>
      <BottomComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
});
