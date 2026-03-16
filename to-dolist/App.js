import React, { useState } from "react";
import { FlatList, Alert } from "react-native";
import { StatusBar } from "expo-status-bar";
import * as S from "./styled"; // importa todos os estilos como 'S'

export default function App() {
  const [task, setTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  // 2. Função para Adicionar
  function handleAddTask() {
    if (task.trim() === "") return;

    const newTask = {
      id: Date.now().toString(),
      name: task,
      priority: task.toLowerCase().includes("urgente"),
    };

    setTaskList([...taskList, newTask]);
    setTask("");
  }
  function handleDelTask(id) {
    setTaskList((prev) => prev.filter((tarefa) => tarefa.id !== id));
  }

  return (
    <S.Container>
      <StatusBar style="auto" />
      <S.Title>✧。To-do list *☆</S.Title>

      <S.InputContainer>
        <S.Input
          placeholder="Nova tarefa..."
          value={task}
          onChangeText={setTask}
          underlineColorAndroid="transparent"
          disableFullscreenUI={true}
          autoCorrect={false}
        />
        <S.AddButton onPress={handleAddTask}>
          <S.TaskText style={{ color: "#ab4972" }}>+</S.TaskText>
        </S.AddButton>
      </S.InputContainer>

      <FlatList
        data={taskList}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <S.TaskCard priority={item.priority}>
            <S.TaskText>{item.name}</S.TaskText>
            <S.deleteButton
              onPress={() => handleDelTask(item.id)}
              style={{ color: "#ab4972" }}
            >
              x
            </S.deleteButton>
          </S.TaskCard>
        )}
      />
    </S.Container>
  );
}
