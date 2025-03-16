import { Link } from "expo-router";
import { SafeAreaView, Text, View } from "react-native";

export default function Index() {
  return (
    <SafeAreaView>
      <View>
        <Link href="/basic">Basic</Link>
      </View>
    </SafeAreaView>
  );
}
