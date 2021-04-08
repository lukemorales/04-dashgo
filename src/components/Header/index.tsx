import {
  Center,
  Flex,
  Text,
  Heading,
  Input,
  Icon,
  HStack,
  Box,
  Avatar,
} from '@chakra-ui/react';
import { RiNotificationLine, RiSearchLine, RiUserLine } from 'react-icons/ri';

export const Header = () => (
  <Center>
    <Flex w="100%" maxW={1480} h="20" mt="4" px="6" align="center">
      <Heading
        as="h1"
        w="64"
        fontSize="3xl"
        fontWeight="bold"
        letterSpacing="tight"
      >
        dashgo
        <Text as="span" ml="1" color="pink.500">
          .
        </Text>
      </Heading>

      <Flex
        as="label"
        flex="1"
        py="4"
        px="8"
        ml="6"
        maxW={400}
        bg="gray.800"
        color="gray.200"
        alignSelf="center"
        position="relative"
        borderRadius="full"
      >
        <Input
          px="4"
          mx="4"
          color="gray.50"
          variant="unstyled"
          placeholder="Buscar na plataforma"
          _placeholder={{ color: 'gray.400' }}
        />
        <Icon as={RiSearchLine} fontSize="20" />
      </Flex>

      <Flex align="center" ml="auto">
        <HStack
          spacing="4"
          mx="8"
          pr="8"
          py="1"
          color="gray.300"
          borderRightWidth={1}
          borderColor="gray.700"
        >
          <Icon as={RiNotificationLine} fontSize="20" />
          <Icon as={RiUserLine} fontSize="20" />
        </HStack>

        <Flex align="center">
          <Box mr="4" textAlign="right">
            <Text as="strong" display="block">
              Luke Morales
            </Text>
            <Text as="span" color="gray.300" fontSize="sm">
              lukemorales@live.com
            </Text>
          </Box>

          <Avatar
            size="md"
            name="Luke Morales"
            src="https://github.com/lukemorales.png"
          />
        </Flex>
      </Flex>
    </Flex>
  </Center>
);
