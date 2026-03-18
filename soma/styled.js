import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #d7e9ef;
  padding: 60px 20px 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #fff;
  height: 50px;
  padding: 0 15px;
  border: 2px solid #91c2ca91;
  font-size: 16px;
  color: #6a6a6a;
  outline-style: none;
  outline-color: transparent;
  box-shadow: none;
`;

export const SumButton = styled.TouchableOpacity`
  background-color: #e9f4f5;
  width: 50px;
  height: 50px;
  border: 2px solid #91c0ca91;
  justify-content: center;
  align-items: center;
`;

export const Result = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #6a6a6a;
  font-family: Arial;
  margin-bottom: 20px;
  background-color: #e9f4f5;
  padding: 6px 0;
  text-align: center;
`;
