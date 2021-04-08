import { useState } from 'react';

import { FiEyeOff, FiEye } from 'react-icons/fi';
import {
  FormLabel,
  Input as ChakraInput,
  InputGroup,
  InputProps,
  Stack,
  Text,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';

export const Input = (props: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { id, type, name, placeholder, ...attrs } = props;

  const handlePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <FormLabel htmlFor={id ?? name}>
      <Stack spacing="1">
        {placeholder && <Text>{placeholder}</Text>}

        <InputGroup alignItems="center">
          <ChakraInput
            id={id ?? name}
            size="lg"
            name={name}
            type={isPasswordVisible ? 'text' : type}
            bg="gray.900"
            variant="filled"
            focusBorderColor="pink.500"
            _hover={{
              bg: 'gray.900',
            }}
            {...attrs}
          />

          {type === 'password' && (
            <InputRightElement top="50%" transform="translateY(-50%)">
              <IconButton
                onClick={handlePasswordVisibility}
                variant="ghost"
                colorScheme="darkAlpha"
                aria-label="Mostrar senha"
                icon={isPasswordVisible ? <FiEyeOff /> : <FiEye />}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Stack>
    </FormLabel>
  );
};
