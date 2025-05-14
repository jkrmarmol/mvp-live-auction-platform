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
        onPress={() => router.navigate("/(dashboard)/live-bidding")}
      >
        <Text
          style={{
            color: "#fff",
            fontSize: 14,
            fontWeight: "semibold",
          }}
        >
          Live Bidding
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

      <TouchableOpacity
        onPress={() => router.navigate("/(dashboard)/my-listing")}
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
          My Listing
        </Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => router.navigate("/(auth)")}
        style={{
          backgroundColor: "#ef4444",
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
          Logout
        </Text>
      </TouchableOpacity>
    </View>
  );
}
