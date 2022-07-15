import { makeStyles } from "@material-ui/core";
import React from "react";
import { isMobileBrowser, withPixelLineHeight } from "../utils";

interface InputProps {
    label?: string;
    value?: string;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
    bottomLabel?: string;
    disabled?: boolean;
    error?: boolean;
    type?: 'text' | 'email' | 'number' | 'password';
    placeholder?: string;
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

        input: {
            backgroundColor: theme.palette.ui03,
            color: theme.palette.text01,
            ...withPixelLineHeight(theme.typography.bodyShortRegular),
            padding: '10px 16px',
            borderRadius: theme.shape.borderRadius,
            border: 0,
            height: '40px',
            boxSizing: 'border-box',

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
    placeholder
}: InputProps) => {
    const styles = useStyles();
    const isMobile = isMobileBrowser();
    return <div className={styles.inputContainer}>
        {label && <span className={`${styles.label} ${isMobile ? 'is-mobile' : ''}`}>{label}</span>}
        <input
            type={type}
            className={`${styles.input} ${isMobile ? 'is-mobile' : ''} ${error ? 'error' : ''}`}
            placeholder={placeholder}
            disabled={disabled}
            value={value}
            onChange={onChange}
        />
        {bottomLabel && (
            <span className={`${styles.bottomLabel} ${isMobile ? 'is-mobile' : ''} ${error ? 'error' : ''}`}>
                {bottomLabel}
            </span>
        )}
    </div>
}

export default Input;