import MyBiddingItem from "@/components/MyBiddingItem";
import React from "react";
import { FlatList } from "react-native";

export default function MyListing() {
  const data = [
    {
      id: 1,
      product: "Bike",
      amount: 100,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 2,
      product: "Iphone 12 Pro Max",
      amount: 650,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 3,
      product: "Ford Mustang",
      amount: 3000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 4,
      product: "House",
      amount: 50000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 5,
      product: "Playstation 5",
      amount: 600,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 6,
      product: "Exotic Car",
      amount: 2000,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 7,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 8,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 9,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 10,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 11,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 12,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 13,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 14,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 15,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 16,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      id: 17,
      product: "Xbox Series X",
      amount: 1200,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
  ];
  return (
    <FlatList
      contentContainerStyle={{
        gap: 20,
        paddingHorizontal: 12,
      }}
      data={data}
      renderItem={({ item, index }) => <MyBiddingItem key={index} {...item} />}
    />
  );
}
