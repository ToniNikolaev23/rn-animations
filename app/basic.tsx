import { Link } from "expo-router";
import { Button, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Animated, { withSpring } from "react-native-reanimated";
import { useSharedValue } from "react-native-reanimated";

const Basic = () => {
  const width = useSharedValue(100);

  const handlePress = () => {
    width.value = withSpring(width.value + 50);
  };
  return (
    <SafeAreaView style={{ flex: 1, alignItems: "center" }}>
      <Animated.View
        style={{
          width,
          height: 100,
          backgroundColor: "violet",
          borderRadius: 10,
        }}
      />
      <Button onPress={handlePress} title="Expand" />
    </SafeAreaView>
  );
};

export default Basic;
