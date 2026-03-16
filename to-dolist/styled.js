import styled from "styled-components/native";

// o container principal (antiga div)
export const Container = styled.View`
  flex: 1;
  background-color: #efd7e1;
  padding: 60px 20px 20px;
`;

export const Title = styled.Text`
  font-size: 28px;
  /* font-weight: bold; */
  color: #c17192;
  font-family: Arial;
  margin-bottom: 20px;
  background-color: #f5e9ee;
  border-radius: 20px;
  padding: 6px 0;
  text-align: center;
`;

// área do input e botão de add
export const InputContainer = styled.View`
  flex-direction: row;
  gap: 10px;
  margin-bottom: 30px;
`;

export const Input = styled.TextInput`
  flex: 1;
  background-color: #fff;
  height: 50px;
  border-radius: 20px;
  padding: 0 15px;
  border: 2px solid #ca91a991;
  font-size: 16px;
  color: #6a6a6a;
  outline-style: none;
  outline-color: transparent;
  box-shadow: none;
`;

export const AddButton = styled.TouchableOpacity`
  background-color: #f5e9ee;
  width: 50px;
  height: 50px;
  border: 2px solid #ca91a991;
  border-radius: 20px;
  justify-content: center;
  align-items: center;
`;

// estilo de cada item da lista (props)
export const TaskCard = styled.View`
  background-color: ${(props) => (props.priority ? "#e7c4d3" : "#f5e9ee")};

  padding: 15px;
  border-radius: 20px;
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  position: relative;
  border-bottom-width: 2px;
  border-left-width: 2px;
  border-bottom-color: ${(props) => (props.priority ? "#a6007c" : "#d6a3b8")};
  border-left-color: ${(props) => (props.priority ? "#a6007c" : "#d6a3b8")};
`;

export const TaskText = styled.Text`
  font-size: 16px;
  color: #343434;
`;

export const deleteButton = styled.TouchableOpacity`
  background-color: #fff;
  width: 30px;
  height: 30px;
  border-radius: 12px;
  justify-content: center;
  align-items: center;
`;
