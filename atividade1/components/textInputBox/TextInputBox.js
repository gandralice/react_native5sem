import React from 'react';
import { TextInput } from 'react-native-web';
import Style from "./Style"

function TextInputBox({ value, onChangeText, placeholder, keyboardType, style}) {
return(
    <TextInput
    style={[Style.input, style]}
    value={value}
    onChangeText={onChangeText}
    placeholder={placeholder}
    placeholderTextColor='#69328d'
    keyboardType={keyboardType}
    />
);
}

export default TextInputBox;