import {
  Checkbox,
  Flex,
  IconButton,
  Input,
  Select,
  Text,
} from "@chakra-ui/react";
import React, { useState } from "react";
import { MdDeleteOutline } from "react-icons/md";

interface CardTaskProps {
  textTask: string;
  onDelete: () => void;
  onComplete: () => void;
  completed: boolean;
}

export default function CardTask({
  textTask,
  onDelete,
  onComplete,
  completed,
}: CardTaskProps) {
  return (
    <>
      <Flex
        bgColor={!completed ? "#49a6fd" : "#79b4ec"}
        justify={"space-between"}
        py={4}
        px={2}
        rounded={5}
        align={"center"}
      >
        <Text
          color={"whitesmoke"}
          fontSize={"large"}
          letterSpacing={0.3}
          textDecoration={completed ? "line-through" : ""}
        >
          {textTask}
        </Text>
        <Flex gap={2} align={"center"}>
          <Checkbox onChange={onComplete} />
          <IconButton
            onClick={onDelete}
            variant={"ghost"}
            color={"red.400"}
            aria-label="Search database"
            icon={<MdDeleteOutline size={20} />}
          />
        </Flex>
      </Flex>
    </>
  );
}
