import { router } from "expo-router";
import React from "react";
import { Text, TextInput, TouchableOpacity, useWindowDimensions, View } from "react-native";

export default function Login() {
  const { width } = useWindowDimensions();
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <View style={{ width: width * 0.8 }}>
        <Text>Email</Text>
        <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }} />
      </View>

      <View style={{ width: width * 0.8 }}>
        <Text>Password</Text>
        <TextInput style={{ height: 40, borderColor: "gray", borderWidth: 1, marginBottom: 10 }} />
      </View>

      <TouchableOpacity
        style={{ backgroundColor: "#000", padding: 10, borderRadius: 5, flex: 0 }}
        onPress={() => router.navigate("/(dashboard)/home")}
      >
        <Text style={{ color: "#fff" }}>Login</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{ marginTop: 20 }} onPress={() => router.navigate("/(auth)/register")}>
        <Text style={{ color: "#000", fontSize: 12 }}>Don &apos;t have an account? Register</Text>
      </TouchableOpacity>
    </View>
  );
}
