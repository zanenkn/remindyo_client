import { defineRecipe } from '@chakra-ui/react';

export const linkRecipe = defineRecipe({
  variants: {
    variant: {
      default: {
        color: 'primary.900',
        _hover: {
          textDecoration: 'underline',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
