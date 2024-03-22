import { Divider, Flex, Heading } from "@chakra-ui/react";


export default function Header() {
  return (
    <>
      <Flex align={"center"} direction={'column'} py={2} px={4} >
        <Heading fontFamily={'sans-serif'}>TaskList</Heading>
        <Divider />
      </Flex>
    </>
  );
}
