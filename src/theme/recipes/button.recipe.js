import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    display: 'flex',
  },
  variants: {
    variant: {
      solid: {
        bg: 'primary.600',
        color: 'white',
        _hover: {
          bg: 'primary.700',
        },
      },
      outline: {
        bg: 'white',
        borderWidth: '2px',
        borderColor: 'primary.600',
        color: 'primary.600',
        _hover: {
          bg: 'primary.100',
        },
      },
    },
  },
  defaultVariants: {
    variant: 'solid',
  },
});
