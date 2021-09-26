import { extendTheme, ThemeConfig } from '@chakra-ui/react';

const config: ThemeConfig = {
    initialColorMode: 'light',
    useSystemColorMode: false,
};

const Button = {
    defaultProps: {},
};

const Heading = {
    defaultProps: {
        color: 'gray.300',
    },
};

const Input = {
    defaultProps: {
        focusBorderColor: 'gray.400',
    },
};

const Th = {
    baseStyle: {
        fontFamily: 'Cerebri Sans',
        fontSize: '16px',
        fontWeight: 'normal',
        fontStyle: 'normal',
        lineHeight: '24px',
        color: '#BDAFB1',
        textTransform: 'none',
    },
};

const Tr = {
    defaultProps: {
        variants: {
            // @ts-ignore
            solid({ colorScheme }) {
                return {
                    _hover: {
                        bg: `${colorScheme}.300`,
                    },
                    _active: { bg: `${colorScheme}.200` },
                };
            },
        },
    },
};

const theme = extendTheme({
    config,
    components: {
        Button,
        Heading,
        Input,
        Tr,
        Th,
    },
});


export default theme;