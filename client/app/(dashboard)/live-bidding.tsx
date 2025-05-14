import LiveBiddingItem from "@/components/LiveBiddingItem";
import { formatCurrency } from "@/utils/formatCurrency";
import React from "react";
import { FlatList, Text, View } from "react-native";

export default function LiveBidding() {
  return (
    <View style={{ flex: 1 }}>
      <View style={{ backgroundColor: "#fff", padding: 20 }}>
        <Text
          style={{
            fontSize: 24,
            fontWeight: "bold",
            color: "#000",
          }}
        >
          {formatCurrency(200, "PHP")}
        </Text>
        <Text>Current Amount Bidding</Text>
      </View>

      <Text
        style={{
          fontSize: 24,
          fontWeight: "bold",
          color: "#000",
          padding: 10,
        }}
      >
        Bidder
      </Text>

      <FlatList
        data={[
          { id: "1", name: "John Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "2", name: "Jane Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "3", name: "Kurt Marmol", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "4", name: "John Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "5", name: "Jane Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "6", name: "Kurt Marmol", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "7", name: "John Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "8", name: "Jane Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "9", name: "Kurt Marmol", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "10", name: "John Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "11", name: "Jane Doe", amount: 200, createdAt: new Date(), updatedAt: new Date() },
          { id: "12", name: "Kurt Marmol", amount: 200, createdAt: new Date(), updatedAt: new Date() },
        ]}
        renderItem={({ item, index }) => (
          <View
            style={{
              backgroundColor: "#fff",
            }}
          >
            <LiveBiddingItem key={index} {...item} />
          </View>
        )}
      />
    </View>
  );
}
