import { Text, Stack, Box, List } from '@chakra-ui/react';

import { AUTOMATION_MENU, GENERAL_MENU } from './constants';
import { MenuEntry } from './MenuEntry';

export const Sidebar = () => (
  <Box as="aside" w="64" mr="8">
    <Stack spacing="12" align="flex-start">
      <Box>
        <Text
          fontWeight="bold"
          color="gray.400"
          fontSize="sm"
          textTransform="uppercase"
        >
          Geral
        </Text>

        <List spacing="4" mt="8" align="stretch">
          {Object.entries(GENERAL_MENU).map(([title, { icon }]) => (
            <MenuEntry title={title} icon={icon} />
          ))}
        </List>
      </Box>
      <Box>
        <Text
          fontWeight="bold"
          color="gray.400"
          fontSize="sm"
          textTransform="uppercase"
        >
          Automação
        </Text>

        <List spacing="4" mt="8" align="stretch">
          {Object.entries(AUTOMATION_MENU).map(([title, { icon }]) => (
            <MenuEntry title={title} icon={icon} />
          ))}
        </List>
      </Box>
    </Stack>
  </Box>
);
