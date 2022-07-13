import {makeStyles} from '@material-ui/core';
import { withPixelLineHeight } from '../utils';
import Icon from '../icons/components/Icon';

interface ButtonProps {
  text?: string;

  icon?: Object;

  type?: 'primary' | 'secondary' | 'tertiary' | 'destructive';

  onClick: () => void;

  disabled?: boolean;
}

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      backgroundColor: theme.palette.action01,
      color: theme.palette.text01,
      borderRadius: theme.shape.borderRadius,
      padding: '10px 16px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: 0,
      ...withPixelLineHeight(theme.typography.bodyShortBold),
      transition: 'background .2s',
      cursor: 'pointer',

      '&:hover': {
        backgroundColor: theme.palette.action01Hover
      },

      '&:active': {
        backgroundColor: theme.palette.action01Active
      },

      '&:focus': {
        outline: 0,
        boxShadow: `0px 0px 0px 2px ${theme.palette.focus01}`
      }
    },

    primary: {},

    secondary: {
      backgroundColor: theme.palette.action02,
      color: theme.palette.text04,

      '&:hover': {
        backgroundColor: theme.palette.action02Hover
      },

      '&:active': {
        backgroundColor: theme.palette.action02Active
      }
    },

    tertiary: {
      backgroundColor: theme.palette.action03,

      '&:hover': {
        backgroundColor: theme.palette.action03Hover
      },

      '&:active': {
        backgroundColor: theme.palette.action03Active
      }
    },

    destructive: {
      backgroundColor: theme.palette.actionDanger,

      '&:hover': {
        backgroundColor: theme.palette.actionDangerHover
      },

      '&:active': {
        backgroundColor: theme.palette.actionDangerActive
      }
    },

    disabled: {
      backgroundColor: theme.palette.disabled01,
      color: theme.palette.text03,

      '&:hover': {
        backgroundColor: theme.palette.disabled01,
        color: theme.palette.text03,
      },

      '&:active': {
        backgroundColor: theme.palette.disabled01,
        color: theme.palette.text03,
      }
    }
  }
})

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  text,
  icon,
  type = 'primary',
  disabled,
  onClick
}: ButtonProps) => {
  const styles = useStyles();
  return (
    <button
      type="button"
      className={`${styles.button} ${styles[type]} ${disabled ? styles.disabled : ''}`}
      disabled={disabled}
      onClick={onClick}
      >
      {icon && <Icon src={icon} color="#fff" />}
      {text}
    </button>
  );
};
