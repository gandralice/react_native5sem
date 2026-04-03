import React from "react";
import { TextInput } from "react-native";
import Style from "./Style";
function InputBox({ value, onChangeText, placeholder, keyboardType, style }) {
  return (
    <TextInput
      style={[Style.input, style]}
      value={value}
      onChangeText={onChangeText}
      placeholder={placeholder}
      keyboardType={keyboardType}
    />
  );
}
export default InputBox;
