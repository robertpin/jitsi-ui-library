import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { isMobileBrowser, withPixelLineHeight } from '../utils';

interface TabProps {
    tabs: Array<{
        id: string;
        label: string;
        countBadge?: number;
        accessibilityLabel: string;
        disabled?: boolean;
    }>;
    onChange: (id: string) => void;
    selected: string;
    accessibilityLabel: string;
}

const useStyles = makeStyles((theme: any) => {
    return {
        container: {
            display: 'flex'
        },

        tab: {
            ...withPixelLineHeight(theme.typography.bodyShortBold),
            color: theme.palette.text02,
            flex: 1,
            padding: '14px',
            background: 'none',
            border: 0,
            appearance: 'none',
            borderBottom: `1px solid ${theme.palette.ui05}`,
            transition: 'color, border-color 0.2s',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',

            '&:hover': {
                color: theme.palette.text01,
                borderColor: theme.palette.ui10
            },

            '&:focus': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`,
                border: 0,
                color: theme.palette.text01,
            },

            '&.selected': {
                color: theme.palette.text01,
                borderColor: theme.palette.action01
            },

            '&:disabled': {
                color: theme.palette.text03,
                borderColor: theme.palette.ui05
            },

            '&.is-mobile': {
                ...withPixelLineHeight(theme.typography.bodyShortBoldLarge)
            }
        },

        badge: {
            ...withPixelLineHeight(theme.typography.labelBold),
            color: theme.palette.text04,
            padding: `0 ${theme.spacing(1)}px`,
            borderRadius: '100%',
            backgroundColor: theme.palette.warning01,
            marginLeft: `${theme.spacing(2)}px`
        }
    }
});


const Tabs = ({
    tabs,
    onChange,
    selected,
    accessibilityLabel
}: TabProps) => {
    const classes = useStyles();
    const isMobile = isMobileBrowser();

    const handleChange = useCallback((e: React.MouseEvent<HTMLButtonElement>) => {
        onChange(e.currentTarget.id);
    }, []);

    return <div aria-label={accessibilityLabel} className={classes.container} role='tablist'>
        {tabs.map(tab => (
            <button
                className={clsx(classes.tab, selected === tab.id && 'selected', isMobile && 'is-mobile')}
                key={tab.id}
                aria-label={tab.accessibilityLabel}
                aria-selected={selected === tab.id}
                id={tab.id}
                onClick={handleChange}
                disabled={tab.disabled}
                role="tab">
                {tab.label}
                {tab.countBadge && <span className={classes.badge}>{tab.countBadge}</span>}
            </button>
        ))}
    </div>
};

export default Tabs;
