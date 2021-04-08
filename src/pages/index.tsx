import { Button, Center, Flex, Stack } from '@chakra-ui/react';

import { Input } from '../components';

export default function Home() {
  return (
    <Center w="100vw" h="100vh">
      <Flex
        as="form"
        w="100%"
        maxW={360}
        bg="gray.800"
        p="8"
        borderRadius={8}
        flexDir="column"
      >
        <Stack spacing="4">
          <Input placeholder="E-mail" name="email" type="email" />

          <Input placeholder="Senha" name="password" type="password" />
        </Stack>

        <Button type="submit" mt="6" colorScheme="pink" size="lg">
          Entrar
        </Button>
      </Flex>
    </Center>
  );
}
