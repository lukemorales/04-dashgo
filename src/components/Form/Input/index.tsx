import { useState } from 'react';

import { RiEyeLine, RiEyeOffLine } from 'react-icons/ri';
import {
  FormLabel,
  FormControl,
  Input as ChakraInput,
  InputGroup,
  InputProps,
  Stack,
  InputRightElement,
  IconButton,
} from '@chakra-ui/react';

export const Input = (props: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const { id, type, name, placeholder, ...attrs } = props;

  const inputId = id ?? name;

  const handlePasswordVisibility = () =>
    setIsPasswordVisible((prevState) => !prevState);

  return (
    <FormControl id={inputId}>
      <Stack spacing="1">
        {placeholder && <FormLabel htmlFor={inputId}>{placeholder}</FormLabel>}

        <InputGroup>
          <ChakraInput
            id={inputId}
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
                icon={isPasswordVisible ? <RiEyeOffLine /> : <RiEyeLine />}
              />
            </InputRightElement>
          )}
        </InputGroup>
      </Stack>
    </FormControl>
  );
};
