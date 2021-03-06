import React from 'react';
import { makeStyles } from "@material-ui/core";
import { isMobileBrowser, withPixelLineHeight } from '../utils';
import Icon from '../icons/components/Icon';
import { IconCheckMark, IconHorizontalLine } from '../icons/svg';
import BaseTheme from '../BaseTheme';
import clsx from 'clsx';

interface CheckboxProps {
    checked: boolean;
    label: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    indeterminate?: boolean;
    disabled?: boolean;
}

const useStyles = makeStyles((theme: any) => {
    return {
        formControl: {
            ...withPixelLineHeight(theme.typography.bodyLongRegular),
            color: theme.palette.text01,
            display: 'inline-flex',
            alignItems: 'center',

            '&.is-mobile': {
                ...withPixelLineHeight(theme.typography.bodyLongRegularLarge),

            }
        },

        activeArea: {
            display: 'grid',
            placeContent: 'center',
            width: '24px',
            height: '24px',
            backgroundColor: 'transparent',
            marginRight: '15px',
            position: 'relative',

            '& input[type="checkbox"]': {
                appearance: 'none',
                backgroundColor: 'transparent',
                margin: 0,
                font: 'inherit',
                color: theme.palette.icon03,
                width: '18px',
                height: '18px',
                border: `2px solid ${theme.palette.icon03}`,
                borderRadius: '3px',
                cursor: 'pointer',

                display: 'grid',
                placeContent: 'center',

                '&::before': {
                    content: 'url("")',
                    // content: 'url("data:image/svg+xml,%3Csvg width=\'12\' height=\'10\' viewBox=\'0 0 12 10\' fill=\'none\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M1.94839 5.04724C1.73143 4.81109 1.37968 4.81109 1.16272 5.04724C0.945761 5.28339 0.945761 5.66628 1.16272 5.90243L3.8458 8.82289C4.06316 9.05948 4.41572 9.05897 4.6325 8.82176L10.8383 2.03117C11.0547 1.7944 11.0538 1.41152 10.8362 1.17599C10.6187 0.940459 10.267 0.941469 10.0506 1.17824L4.2376 7.53898L1.94839 5.04724Z\' fill=\'white\' stroke=\'white\'/%3E%3C/svg%3E%0A")',
                    width: '18px',
                    height: '18px',
                    opacity: 0,
                    backgroundColor: theme.palette.action01,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: 0,
                    borderRadius: '3px',
                    transition: '.2s'
                },

                '&:checked::before': {
                    opacity: 1
                },

                '&:disabled': {
                    backgroundColor: theme.palette.ui03,
                    borderColor: theme.palette.ui04,

                    '&::before': {
                        backgroundColor: theme.palette.ui04,
                    }
                },

                '&:checked+.checkmark': {
                    opacity: 1
                }
            },

            '& .checkmark': {
                position: 'absolute',
                left: '3px',
                top: '3px',
                opacity: 0,
                transition: '.2s'
            },

            '&.is-mobile': {
                width: '40px',
                height: '40px',

                '& input[type="checkbox"]': {
                    width: '24px',
                    height: '24px',

                    '&::before': {
                        width: '24px',
                        height: '24px'
                    }
                },

                '& .checkmark': {
                    left: '11px',
                    top: '10px'
                }
            },
        },
    }
});

const Checkbox = ({checked, label, onChange, indeterminate, disabled}: CheckboxProps) => {
    const styles = useStyles();
    const isMobile = isMobileBrowser();

    return <div className={clsx(styles.formControl, isMobile && 'is-mobile')}>
        <label className={clsx(styles.activeArea, isMobile && 'is-mobile')}>
            <input type="checkbox" name="checkbox" checked={checked} disabled={disabled} onChange={onChange} />
            <Icon
                className="checkmark"
                // @ts-ignore
                color={disabled ? BaseTheme.palette.icon03 : BaseTheme.palette.icon01}
                size={18}
                src={indeterminate ? IconHorizontalLine : IconCheckMark} />
        </label>
        <label>{label}</label>
    </div>
}

export default Checkbox;