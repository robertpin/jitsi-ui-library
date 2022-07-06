import { ThemeProvider } from '@material-ui/core/styles';
import * as React from 'react';
import BaseTheme from './BaseTheme';


function JitsiThemeProvider(props: any) {
    return <ThemeProvider theme={BaseTheme}>{props.children}</ThemeProvider>;
}

export default JitsiThemeProvider;
