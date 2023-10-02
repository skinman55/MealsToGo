import { StatusBar as ExpoStatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Platform, StatusBar } from "react-native";
import { Searchbar, SafeAreaView } from "react-native-paper";

///const isAndroid = Platform.OS === "android";

// const [searchQuery, setSearchQuery] = React.useState("");
// const onChangeSearch = (query) => setSearchQuery(query);

//console.log('StatusBar.currentHeight', );
export default function App() {
  return (
    <>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>list</Text>
        </View>
      </SafeAreaView>
      <ExpoStatusBar style="auto" />
    </>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, marginTop: StatusBar.currentHeight },
  search: { padding: 16, backgroundColor: "green" },
  list: { flex: 1, padding: 16, backgroundColor: "blue" },
});
