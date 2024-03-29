import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { useCallback } from 'react';
import { isMobileBrowser } from '../utils';

interface ToggleProps {
    checked: boolean;
    disabled?: boolean;
    onChange: (on: boolean) => void;
    id?: string;
}

const useStyles = makeStyles((theme: any) => {
    return {
        container: {
            position: 'relative',
            backgroundColor: theme.palette.ui05,
            borderRadius: '12px',
            width: '40px',
            height: '24px',
            border: 0,
            outline: 0,
            cursor: 'pointer',
            transition: '.3s',
            display: 'inline-block',

            '&.disabled': {
                backgroundColor: theme.palette.ui05,
                cursor: 'default',

                '& .toggle': {
                    backgroundColor: theme.palette.ui03
                }
            },

            '&.is-mobile': {
                height: '32px',
                width: '50px',
                borderRadius: '32px'
            }
        },

        containerOn: {
            backgroundColor: theme.palette.action01
        },

        toggle: {
            width: '16px',
            height: '16px',
            position: 'absolute',
            top: '4px',
            left: '4px',
            backgroundColor: theme.palette.ui10,
            borderRadius: '100%',
            transition: '.3s',

            '&.is-mobile': {
                width: '24px',
                height: '24px'
            }
        },

        toggleOn: {
            left: '20px',

            '&.is-mobile': {
                left: '22px'
            }
        },

        checkbox: {
            height: 0,
            width: 0
        }
    }
})

const Toggle = ({ id, checked, disabled, onChange}: ToggleProps) => {
    const styles = useStyles();
    const isMobile = isMobileBrowser();

    const change = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
        onChange(e.target.checked);
    }, []);

    return <label
        className={clsx(styles.container, checked && styles.containerOn, isMobile && 'is-mobile', disabled && 'disabled')}>
        <input type="checkbox" {...(id ? { id } : {})} disabled={disabled} className={styles.checkbox} checked={checked} onChange={change} />
        <div className={clsx('toggle', styles.toggle, checked && styles.toggleOn, isMobile && 'is-mobile')}/>
    </label>
};

export default Toggle;
