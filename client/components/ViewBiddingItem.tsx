import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ViewBiddingItemProps = {
  id: number;
  product: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
};

export default function ViewBiddingItem(props: ViewBiddingItemProps) {
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
        <Text>{new Intl.NumberFormat("en-PH", { style: "currency", currency: "PHP" }).format(props.amount)}</Text>
        <Text>Amount</Text>
      </View>
    </TouchableOpacity>
  );
}
