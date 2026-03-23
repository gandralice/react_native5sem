import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #e1efd7;
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
  border: 2px solid #aaca9191;
  font-size: 16px;
  color: #6a6a6a;
  outline-style: none;
  outline-color: transparent;
  box-shadow: none;
  border-radius: 20px;
`;

export const CalcButton = styled.TouchableOpacity`
  background-color: #eff5e9;
  width: 50px;
  height: 50px;
  border: 2px solid #adca9191;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
`;

export const Result = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: ${(props) => (props.score >= 7.0 ? "#00ff00" : "#ff0000")};
  background-color: #eff5e9;
  border: 2px solid #adca9191;
  padding: 6px 0;
  text-align: center;
  min-width: 120px;
  margin: 30px 0;
  border-radius: 16px;
`;

export const ResMessage = styled.Text`
  font-size: 20px;
  color: ${(props) => (props.score >= 7.0 ? "#00ff00" : "#ff0000")};
  margin-bottom: 30px;
  text-align: center;
`;
