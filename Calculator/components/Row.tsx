import React from "react";
import { View } from "react-native";

// Define the component with an explicit type for 'children'
export const RowWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={{ flexDirection: "row" }}>
    {children}
  </View>
);

export default RowWrapper;