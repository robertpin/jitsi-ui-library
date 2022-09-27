import { makeStyles } from '@material-ui/core';
import clsx from 'clsx';
import React, { ReactElement, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Button from '../Button/Button';
import ClickableIcon from '../ClickableIcon/ClickableIcon';
import { IconClose } from '../icons/svg';
import { withPixelLineHeight } from '../utils';

const useStyles = makeStyles((theme: any) => {
    return {
        container: {
            width: '100%',
            height: '100%',
            position: 'fixed',
            top: 0,
            left: 0,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start'
        },

        backdrop: {
            position: 'absolute',
            width: '100%',
            height: '100%',
            top: 0,
            left: 0,
            backgroundColor: theme.palette.ui02,
            opacity: 0.75
        },

        modal: {
            zIndex: 1,
            backgroundColor: theme.palette.ui01,
            border: `1px solid ${theme.palette.ui03}`,
            boxShadow: '0px 4px 25px 4px rgba(20, 20, 20, 0.6)',
            borderRadius: `${theme.shape.borderRadius}px`,
            display: 'flex',
            flexDirection: 'column',
            height: 'auto',
            minHeight: '200px',
            maxHeight: '560px',
            marginTop: '64px',

            '&.medium': {
                width: '400px'
            },

            '&.large': {
                width: '664px'
            },

            '@media (max-width: 448px)': {
                width: '100% !important',
                maxHeight: 'initial',
                height: '100%',
                margin: 0,
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0
            }
        },

        header: {
            width: '100%',
            padding: '24px',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'space-between'
        },

        title: {
            color: theme.palette.text01,
            ...withPixelLineHeight(theme.typography.heading5),
            margin: 0,
            padding: 0
        },

        content: {
            height: 'auto',
            overflowY: 'auto',
            width: '100%',
            boxSizing: 'border-box',
            padding: '0 24px',
            overflowX: 'hidden',

            '@media (max-width: 448px)': {
                height: '100%'
            }
        },

        footer: {
            width: '100%',
            boxSizing: 'border-box',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
            padding: '24px',

            '& button:last-child': {
                marginLeft: '16px'
            },
        }
    }
});

interface DialogProps {
    title?: string;
    titleKey?: string;
    description?: string;
    size?: 'large' | 'medium';
    onCancel: () => void;
    ok?: {
        key: string;
        disabled?: boolean;
    };
    cancelKey?: string;
    children?: ReactElement|ReactElement[];
    onSubmit: () => void;
}

const Dialog = ({
    title,
    titleKey,
    description,
    size = 'medium',
    onCancel,
    children,
    ok,
    cancelKey,
    onSubmit
}: DialogProps) => {
    const classes = useStyles();
    const {t} = useTranslation();

    const handleKeyDown = useCallback((e: KeyboardEvent) => {
        if(e.key === 'Escape') {
            onCancel();
        }
    }, []);

    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        return () => window.removeEventListener('keydown', handleKeyDown)
    }, []);

    return <div className={classes.container}>
        <div className={classes.backdrop} onClick={onCancel}></div>
        <div
            role='dialog'
            aria-labelledby={title ?? t(titleKey ?? '')}
            aria-describedby={description}
            aria-modal={true}
            className={clsx(classes.modal, size)}>
            <div className={classes.header}>
                <p className={classes.title}>{title ?? t(titleKey ?? '')}</p>
                <ClickableIcon accessibilityLabel={t('dialog.close')} icon={IconClose} onClick={onCancel} />
            </div>
            <div className={classes.content}>{children}</div>
            <div className={classes.footer}>
                {cancelKey && <Button accessibilityLabel={t(cancelKey)} onClick={onCancel} text={t(cancelKey)} type='tertiary' />}
                {ok && <Button accessibilityLabel={t(ok.key)} disabled={ok.disabled} onClick={onSubmit} text={t(ok.key)} />}
            </div>
        </div>
    </div>
};

export default Dialog;
