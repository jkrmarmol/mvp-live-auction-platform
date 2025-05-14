import { Stack } from "expo-router";
import React from "react";

export default function DashboardLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="start-bidding"
        options={{
          title: "Start Bidding",
          headerTitleAlign: "center",
        }}
      />
      <Stack.Screen
        name="view-bidding"
        options={{
          title: "View Bidding",
          headerTitleAlign: "center",
        }}
      />
    </Stack>
  );
}
