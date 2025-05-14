import React from "react";
import { Modal, ModalProps, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function AddBiddingModal(props: ModalProps) {
  return (
    <Modal
      {...props}
      style={{ flex: 1 }}
      animationType="fade"
      transparent={true}
      visible={props.visible}
      statusBarTranslucent
    >
      <View style={{ justifyContent: "center", alignItems: "center", backgroundColor: "rgba(0,0,0,0.5)", flex: 1 }}>
        <View style={{ backgroundColor: "#fff", padding: 20, borderRadius: 10, width: "80%" }}>
          <Text style={{ fontSize: 18, fontWeight: "bold", marginBottom: 10 }}>Start Bidding</Text>
          <Text style={{ fontSize: 14, marginBottom: 20 }}>
            Please enter the details to start bidding. This is a placeholder for the bidding form.
          </Text>
          <TextInput
            placeholder="Enter product name"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          />
          <TextInput
            placeholder="Enter your bid amount"
            inputMode="decimal"
            style={{
              height: 40,
              borderColor: "gray",
              borderWidth: 1,
              marginBottom: 10,
              paddingLeft: 10,
              borderRadius: 5,
            }}
          />

          <TouchableOpacity>
            <Text
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: 10,
                textAlign: "center",
                borderRadius: 5,
              }}
            >
              Submit Bid
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
