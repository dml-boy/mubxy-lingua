import { StyleSheet } from "react-native";
import { Stack } from "expo-router";
import { View, Text, Link } from "@/tw";

export default function Index() {
  return (
    <View className="flex-1 items-center justify-center">
      <Stack.Screen options={{ headerShown: false }} />
      <Text className="text-xl font-bold mb-4">Mubxy Duolingo</Text>
      <Link href="/onboarding" className="text-lingua-blue text-lg underline">
        Go to Onboarding Screen
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
