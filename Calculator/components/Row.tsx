import { View } from "react-native";

export const RowWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => (
  <View style={{ flexDirection: "row" }}>
    {children}
  </View>
);

export default RowWrapper;