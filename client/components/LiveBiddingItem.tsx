import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { Text, View } from "react-native";

export default function LiveBiddingItem(props: {
  id: string;
  name: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}) {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: "#ccc",
      }}
    >
      <View>
        <Text style={{ fontSize: 18, fontWeight: "bold" }}>{props.name}</Text>
        <Text>Name</Text>
      </View>
      <View>
        <Text style={{ fontSize: 16, color: "#888" }}>{formatCurrency(props.amount, "PHP")}</Text>
        <Text>Amount</Text>
      </View>
    </View>
  );
}
