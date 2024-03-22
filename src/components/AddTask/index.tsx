"use client";

import { Box, Button, Flex, Input, Text } from "@chakra-ui/react";
import { useEffect, useRef, useState } from "react";
import CardTask from "../CardTask";

interface TaskProps {
  uid: string;
  text: string;
  status: boolean;
}

export default function AddTask() {
  const [taskInfo, setTaskInfo] = useState({
    totalTask: 0,
    completedTask: 0,
  });
  const [orderList, setOrderList] = useState<TaskProps[]>([]);
  const [taskList, setTaskList] = useState<TaskProps[]>([]);
  const taskRef = useRef(null as any);

  const handleAddTask = () => {
    const value = taskRef.current?.value;
    setTaskList((prev) => [
      ...prev,
      {
        uid: Math.random().toString(36).substr(2, 9),
        text: value,
        status: false,
      },
    ]);
  };

  const updateTaskInfo = () => {
    setTaskInfo({
      totalTask: taskList.length,
      completedTask: taskList.filter((t) => t.status === true).length,
    });
    setOrderList(taskList.sort((a, b) => (a.status < b.status ? -1 : 1)));
  };

  const handleCompleteTask = (uid: string) => {
    setTaskList((prev) =>
      prev.map((task) => {
        if (task.uid === uid) {
          return { ...task, status: !task.status };
        }
        return task;
      })
    );

    updateTaskInfo();
  };

  useEffect(() => {
    updateTaskInfo();
  }, [taskList]);

  return (
    <>
      <Box justifyContent={"center"} px={[2, 10, 40]}>
        <Flex justify={"space-between"} py={2}>
          <Text fontWeight={"bold"}>
            Total de Tarefas: {taskInfo.totalTask}
          </Text>
          <Text fontWeight={"bold"}>
            Tarefas concluidas: {taskInfo.completedTask}
          </Text>
        </Flex>
        <Flex direction={["column", "row"]} gap={4}>
          <Input borderColor={"gray.400"} ref={taskRef} />
          <Button px={10} colorScheme="blue" onClick={handleAddTask}>
            Add
          </Button>
        </Flex>
        <Flex direction={"column"} gap={2} pt={4} px={15}>
          {orderList.map((task) => (
            <CardTask
              key={task.uid}
              textTask={task.text}
              completed={task.status}
              onDelete={() =>
                setTaskList(taskList.filter((t) => t.uid !== task.uid))
              }
              onComplete={() => handleCompleteTask(task.uid)}
            />
          ))}
        </Flex>
      </Box>
    </>
  );
}
