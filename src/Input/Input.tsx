import { makeStyles } from "@material-ui/core";
import clsx from "clsx";
import React, { useCallback } from "react";
import Icon from "../icons/components/Icon";
import { IconCloseCircle } from "../icons/svg";
import { isMobileBrowser, withPixelLineHeight } from "../utils";

interface InputProps {
    label?: string;
    value: string;
    onChange: (value: string) => void;
    bottomLabel?: string;
    disabled?: boolean;
    error?: boolean;
    type?: 'text' | 'email' | 'number' | 'password';
    placeholder?: string;
    clearable?: boolean;
    icon?: any;
}

const useStyles = makeStyles((theme: any) => {
    return {
        inputContainer: {
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

        fieldContainer: {
            position: 'relative',
            display: 'flex'
        },

        input: {
            backgroundColor: theme.palette.ui03,
            color: theme.palette.text01,
            ...withPixelLineHeight(theme.typography.bodyShortRegular),
            padding: '10px 16px',
            borderRadius: theme.shape.borderRadius,
            border: 0,
            height: '40px',
            boxSizing: 'border-box',
            width: '100%',

            '&::placeholder': {
                color: theme.palette.text02
            },

            '&:focus': {
                outline: 0,
                boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`
            },

            '&:disabled': {
                color: theme.palette.text03
            },

            '&.is-mobile': {
                height: '48px',
                padding: '13px 16px',
                ...withPixelLineHeight(theme.typography.bodyShortRegularLarge)
            },

            '&.error': {
                boxShadow: `0px 0px 0px 2px ${theme.palette.textError}`
            }
        },

        icon: {
            position: 'absolute',
            top: '10px',
            left: '16px'
        },

        iconInput: {
            paddingLeft: '46px'
        },

        clearableInput: {
            paddingRight: '46px'
        },

        clearIcon: {
            position: 'absolute',
            right: '16px',
            top: '10px',
            cursor: 'pointer'
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

const Input = ({
    label,
    value,
    onChange,
    bottomLabel,
    disabled,
    error,
    type = 'text',
    placeholder,
    clearable = false,
    icon
}: InputProps) => {
    const styles = useStyles();
    const isMobile = isMobileBrowser();

    const handleChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => onChange(e.target.value), []);

    const clearInput = useCallback(() => onChange(''), []);
    return <div className={styles.inputContainer}>
        {label && <span className={clsx(styles.label, isMobile && 'is-mobile')}>{label}</span>}
        <div className={styles.fieldContainer}>
            {icon && <Icon className={styles.icon} size={20} src={icon} />}
            <input
                type={type}
                className={clsx(styles.input, isMobile && 'is-mobile',
                    error && 'error', clearable && styles.clearableInput, icon && styles.iconInput)}
                placeholder={placeholder}
                disabled={disabled}
                value={value}
                onChange={handleChange}
            />
            {clearable && value !== '' && <Icon className={styles.clearIcon} onClick={clearInput} size={20} src={IconCloseCircle}/>}
        </div>
        {bottomLabel && (
            <span className={clsx(styles.bottomLabel, isMobile && 'is-mobile', error && 'error')}>
                {bottomLabel}
            </span>
        )}
    </div>
}

export default Input;
