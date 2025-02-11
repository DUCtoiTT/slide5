import React, { useState } from "react";
import { View, Text, TouchableOpacity, StyleSheet, Alert } from "react-native";

// Component nút bấm nhận props từ cha
const ColorButton = ({ color, onPress }) => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: color }]}
      onPress={() => {
        onPress(color); // Gửi màu lên component cha
      }}
    >
      <Text style={[styles.buttonText, color === "yellow" && { color: "black" }]}>
        {color.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};

export default function App() {
  const [bgColor, setBgColor] = useState("white"); // State lưu màu nền của component cha

  return (
    <View style={[styles.container, { backgroundColor: bgColor }]}>
      
      {["green", "blue", "brown", "yellow", "red", "black"].map((color) => (
        <ColorButton key={color} color={color} onPress={setBgColor} />
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 10,
  },

  button: {
    width: 200,
    padding: 15,
    margin:50,
    marginVertical: 30,
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    color: "white",
    fontWeight: "bold",
  },
});
