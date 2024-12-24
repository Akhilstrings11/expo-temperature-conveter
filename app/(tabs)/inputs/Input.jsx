import { Text, TextInput, View } from "react-native";
import { inpSty } from "./Input.style";

export function Input({ defaultValue, onChange, unit }) {
  return (
    <View style={inpSty.root}>
      <TextInput
        style={inpSty.input}
        maxLength={3}
        placeholder="Enter your temperature"
        defaultValue={defaultValue.toString()}
        onChangeText={function (text) {
          onChange(text);
        }}
      />
      <Text style={inpSty.unit}>{unit}</Text>
    </View>
  );
}
