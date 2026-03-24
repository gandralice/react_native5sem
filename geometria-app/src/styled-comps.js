import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff5ff;
  padding: 60px 20px 20px;
`;
export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #ffffff;
  font-family: Arial;
  margin-bottom: 20px;
  background-color: #ddb0dd;
  border-radius: 20px;
  padding: 6px 0;
  text-align: center;
`;
export const Paragraph = styled.Text`
  font-size: 16px;
  color: #c16ac1;
  font-family: Arial;
  margin-bottom: 20px;
  border-radius: 20px;
  padding: 6px 0;
  text-align: center;
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
  border: 2px solid #e2bee2;
  border-radius: 20px;
  outline-style: none;
`;

export const Button = styled.TouchableOpacity`
  background-color: #e2bee2;
  padding: 10px;
  font-family: Arial;
  color: #ffffff;
  margin: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 2px solid #ddb0dd;
`;
export const OperationButton = styled.TouchableOpacity`
  background-color: #e2bee2;
  width: 50px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  /* border: 2px solid #e2bee2; */
`;

export const ClearButton = styled.TouchableOpacity`
  margin: 20px 0;
  background-color: #e2bee2;
  width: 80px;
  height: 50px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  /* border: 2px solid #ddb0dd; */
`;

export const Result = styled.Text`
  font-size: 24px;
  font-weight: bold;
  text-align: center;
  /* background-color: #e2bee2; */
  padding: 15px;
  border-radius: 16px;
  color: #b973b9;
  min-width: 100px;
`;
export const ResMessage = styled.Text`
  font-size: 20px;
  color: ${(props) => (props.score >= 6.0 ? "#00ff00" : "#ff0000")};
  margin-bottom: 30px;
  text-align: center;
`;
