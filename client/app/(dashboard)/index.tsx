import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function Home() {
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        gap: 10,
      }}
    >
      <TouchableOpacity
        style={{
          backgroundColor: "#000",
          padding: 10,
        }}
        onPress={() => router.navigate("/(dashboard)/start-bidding")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "semibold",
          }}
        >
          Start Bidding
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => router.navigate("/(dashboard)/view-bidding")}
        style={{
          backgroundColor: "#000",
          padding: 10,
        }}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "semibold",
          }}
        >
          View Bidding
        </Text>
      </TouchableOpacity>
    </View>
  );
}
