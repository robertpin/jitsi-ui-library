import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React from 'react';
import Icon from '../icons/components/Icon';
import { isMobileBrowser } from '../utils';

interface IProps {
    accessibilityLabel: string;
    icon: any;
    onClick: () => void;
}

const useStyles = makeStyles((theme: any) => {
    return {
        button: {
            cursor: 'pointer',
            padding: '2px',
            backgroundColor: theme.palette.action03,
            border: 0,
            outline: 0,
            borderRadius: `${theme.shape.borderRadius}px`,

            '&:hover': {
                backgroundColor: theme.palette.ui02
            },

            '&:focus': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`
            },

            '&:active': {
                backgroundColor: theme.palette.ui03
            },

            '&.is-mobile': {
                padding: '10px'
            }
        }
    };
});

const ClickableIcon = ({ accessibilityLabel, icon, onClick }: IProps) => {
    const styles = useStyles();
    const isMobile = isMobileBrowser();

    return (
        <button
            aria-label = { accessibilityLabel }
            className = { clsx(styles.button, isMobile && 'is-mobile') }
            onClick = { onClick }>
            <Icon
                size = { 24 }
                src = { icon } />
        </button>
    );
};

export default ClickableIcon;
