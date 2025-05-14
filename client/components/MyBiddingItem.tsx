import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ViewBiddingItemProps = {
  id: number;
  product: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function MyBiddingItem(props: ViewBiddingItemProps) {
  return (
    <TouchableOpacity
      style={{
        flexDirection: "row",
        justifyContent: "space-between",
      }}
    >
      <View>
        <Text>{props.product}</Text>
        <Text>Product</Text>
      </View>
      <View style={{ alignItems: "flex-end" }}>
        <Text>{formatCurrency(props.amount)}</Text>
        <Text>Amount</Text>
      </View>
    </TouchableOpacity>
  );
}
