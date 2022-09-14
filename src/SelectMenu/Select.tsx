import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { ChangeEvent } from 'react';
import BaseTheme from '../BaseTheme';
import Icon from '../icons/components/Icon';
import { IconArrowDown } from '../icons/svg';
import { isMobileBrowser, withPixelLineHeight } from '../utils';

interface SelectProps {
    onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
    options: Array<{
        value: number|string;
        label: string;
    }>;
    value: number|string;
    className?: string;
    label?: string;
    bottomLabel?: string;
    error?: boolean;
    disabled?: boolean;
}

const useStyles = makeStyles((theme: any) => {
    return {
        container: {
            display: 'flex',
            flexDirection: 'column',
        },

        label: {
            color: theme.palette.text01,
            ...withPixelLineHeight(theme.typography.bodyShortRegular),
            marginBottom: `${theme.spacing(2)}px`,

            '&.is-mobile': {
                ...withPixelLineHeight(theme.typography.bodyShortRegularLarge)
            }
        },

        selectContainer: {
            position: 'relative'
        },

        select: {
            backgroundColor: theme.palette.ui03,
            borderRadius: `${theme.shape.borderRadius}px`,
            width: '100%',
            ...withPixelLineHeight(theme.typography.bodyShortRegular),
            color: theme.palette.text01,
            padding: '8px 16px',
            paddingRight: '42px',
            border: 0,
            appearance: 'none',
            overflow: 'hidden',
            whiteSpace: 'nowrap',
            textOverflow: 'ellipsis',

            '&:focus': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`
            },

            '&:disabled': {
                color: theme.palette.text03
            },

            '&.is-mobile': {
                ...withPixelLineHeight(theme.typography.bodyShortRegularLarge),
                padding: '12px 16px',
                paddingRight: '46px',
            },

            '&.error': {
                boxShadow: `0px 0px 0px 2px ${theme.palette.textError}`
            }
        },

        icon: {
            position: 'absolute',
            top: '8px',
            right: '8px',
            pointerEvents: 'none',

            '&.is-mobile': {
                top: '12px',
                right: '12px'
            }
        },

        bottomLabel: {
            marginTop: `${theme.spacing(2)}px`,
            ...withPixelLineHeight(theme.typography.labelRegular),
            color: theme.palette.text02,

            '&.is-mobile': {
                ...withPixelLineHeight(theme.typography.bodyShortRegular)
            },

            '&.error': {
                color: theme.palette.textError
            }
        }
    }
})

const Select = ({ onChange, options, className, label, bottomLabel, error, disabled }: SelectProps) => {
    const classes = useStyles();
    const isMobile = isMobileBrowser();

    return <div className={classes.container}>
        {label && <span className={clsx(classes.label, isMobile && 'is-mobile')}>{label}</span>}
        <div className={classes.selectContainer}>
            <select className={clsx(classes.select, isMobile && 'is-mobile', className, error && 'error')} onChange={onChange} disabled={disabled}>
                {options.map(option => <option key={option.value} value={option.value}>{option.label}</option>)}
            </select>
            <Icon // @ts-ignore
                color={disabled ? BaseTheme.palette.icon03 : BaseTheme.palette.icon01}
                className={clsx(classes.icon, isMobile && 'is-mobile')}
                size={22}
                src={IconArrowDown} />
        </div>
        {bottomLabel && (
            <span className={clsx(classes.bottomLabel, isMobile && 'is-mobile', error && 'error')}>
                {bottomLabel}
            </span>
        )}
    </div>
}

export default Select;
