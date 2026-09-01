import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "@/constants/images";
import { Stack, useRouter } from "expo-router";
import { View, Text, Pressable } from "@/tw";
import { Image } from "@/tw/image";

export default function OnboardingScreen() {
  const router = useRouter();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#ffffff" }}>
      <Stack.Screen options={{ headerShown: false }} />
      <View className="flex-1 w-full justify-between pb-6">
        
        {/* Header - Centered brand logo + name */}
        <View className="flex-row items-center justify-center gap-2 pt-2">
          <Image 
            source={images.mascotLogo} 
            style={{ width: 36, height: 36 }}
            contentFit="contain" 
          />
          <Text className="text-[26px] font-bold text-text-primary tracking-tight">
            lingua
          </Text>
        </View>

        {/* Hero Title and Subtitle */}
        <View className="w-full px-7 mt-4">
          <Text className="text-[32px] font-bold leading-[38px] text-text-primary">
            Your AI language{"\n"}
            <Text className="text-[32px] font-bold leading-[38px] text-lingua-purple">
              teacher.
            </Text>
          </Text>

          <Text className="text-[15.5px] leading-[23px] text-text-secondary mt-3 font-normal">
            Real conversations, personalized{"\n"}lessons, anytime, anywhere.
          </Text>
        </View>

        {/* Mascot Illustration with Floating Language Bubbles */}
        <View className="flex-1 w-full items-center justify-center my-2">
          {/* Relative container wrapping fox and speech bubbles together */}
          <View style={{ width: 330, height: 350, position: "relative", alignItems: "center", justifyContent: "center" }}>
            
            {/* Ground Contact Shadow - tightly anchored to fox paws */}
            <View
              style={{
                position: "absolute",
                bottom: 22,
                width: 175,
                height: 14,
                borderRadius: 90,
                backgroundColor: "rgba(13, 19, 43, 0.07)",
                transform: [{ scaleX: 1.1 }],
              }}
            />

            {/* Center Mascot Image - Large and prominent */}
            <Image 
              source={images.mascotWelcome} 
              style={{ width: 280, height: 315 }}
              contentFit="contain" 
            />

            {/* Speech Bubble 1: "Hello!" (Top-Left near fox ear) */}
            <View
              className="absolute left-2 top-9 bg-[#E8F2FD] px-4 py-2 rounded-2xl shadow-sm"
            >
              <Text className="text-text-primary font-bold text-[15px]">
                Hello!
              </Text>
              {/* Tail pointing towards fox */}
              <View
                style={{
                  position: "absolute",
                  bottom: -4,
                  right: 14,
                  width: 9,
                  height: 9,
                  backgroundColor: "#E8F2FD",
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </View>

            {/* Speech Bubble 2: "¡Hola!" (Top-Right above waving hand) */}
            <View
              className="absolute right-5 top-5 bg-[#F0EBFE] px-4 py-2 rounded-2xl shadow-sm"
            >
              <Text className="text-lingua-purple font-bold text-[15px]">
                ¡Hola!
              </Text>
              {/* Tail pointing towards fox */}
              <View
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 14,
                  width: 9,
                  height: 9,
                  backgroundColor: "#F0EBFE",
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </View>

            {/* Speech Bubble 3: "你好!" (Middle-Right next to waving paw) */}
            <View
              className="absolute right-1.5 top-26 bg-[#FFF0E8] px-4 py-2 rounded-2xl shadow-sm"
            >
              <Text style={{ color: "#EA580C" }} className="font-bold text-[15px]">
                你好!
              </Text>
              {/* Tail pointing towards paw */}
              <View
                style={{
                  position: "absolute",
                  bottom: -4,
                  left: 14,
                  width: 9,
                  height: 9,
                  backgroundColor: "#FFF0E8",
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </View>

          </View>
        </View>

        {/* Pagination Dots */}
        <View className="flex-row items-center justify-center gap-2.5 mb-7">
          <View className="w-2.5 h-2.5 rounded-full bg-lingua-purple" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
          <View className="w-2.5 h-2.5 rounded-full bg-[#E5E7EB]" />
        </View>

        {/* Bottom Action Button */}
        <View className="w-full px-6">
          <Pressable 
            className="w-full h-14 bg-lingua-deep-purple active:bg-lingua-purple rounded-2xl flex-row items-center justify-center relative shadow-md shadow-lingua-purple/20"
            onPress={() => {
              // Action handler
            }}
          >
            <Text className="text-white font-bold text-[17px]">
              Get Started
            </Text>
            
            {/* Right Chevron Arrow */}
            <View className="absolute right-6 justify-center items-center">
              <View
                style={{
                  width: 9,
                  height: 9,
                  borderTopWidth: 2.5,
                  borderRightWidth: 2.5,
                  borderColor: "#FFFFFF",
                  transform: [{ rotate: "45deg" }],
                }}
              />
            </View>
          </Pressable>
        </View>

      </View>
    </SafeAreaView>
  );
}
