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
  border-radius: 20px;
  outline-style: none;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e9f4f5;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid #91c0ca91;
`;

export const ClearButton = styled.TouchableOpacity`
  margin: 20px 0;
  background-color: #55cdd8;
  width: 80px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid #31aab5;
`;

export const Result = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  background-color: #e9f4f5;
  padding: 15px;
  border-radius: 16px;
  color: #6a6a6a;
  min-width: 100px;
`;
