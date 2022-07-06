import { createMuiTheme } from '@material-ui/core/styles';
import { font, colors, colorMap, spacing, shape, typography, breakpoints } from './Tokens';

function createColorTokens(colorMap: any, colors: any): Object {
    return Object.entries(colorMap)
        .reduce((result, [token, value]: [token: any, value: any]) =>
            Object.assign(result, { [token]: colors[value] || value }), {});
}

/**
 * Creates a MUI theme based on local UI tokens.
 *
 * @param {Object} arg - The ui tokens.
 * @returns {Object}
 */
function createWebTheme({ font, colors, colorMap, shape, spacing, typography, breakpoints }: any) {
    return createMuiTheme({
        props: {
            // disable ripple effect on buttons globally
            MuiButtonBase: {
                disableRipple: true
            }
        },

        // use token spacing array
        spacing
    }, {
        palette: createColorTokens(colorMap, colors),
        shape,
        typography: {
            font,
            ...typography
        },
        breakpoints
    });
}

export default createWebTheme({
    font,
    colors,
    colorMap,
    spacing,
    shape,
    typography,
    breakpoints
});
