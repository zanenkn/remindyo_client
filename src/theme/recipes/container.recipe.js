import { defineRecipe } from '@chakra-ui/react';

export const containerRecipe = defineRecipe({
  variants: {
    variant: {
      default: {
        paddingInline: 0,
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});
