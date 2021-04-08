import { ListItem, Link, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons';

type MenuEntryProps = {
  title: string;
  icon: IconType;
};

export const MenuEntry = ({ title, icon }: MenuEntryProps) => (
  <ListItem>
    <Link display="flex" alignItems="center">
      <Icon as={icon} fontSize="20" />

      <Text as="span" ml="4" fontWeight="medium">
        {title}
      </Text>
    </Link>
  </ListItem>
);
