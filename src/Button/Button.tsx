import React from 'react';
import {makeStyles} from '@material-ui/core';

interface ButtonProps {
  /**
   * Is this the principal call to action on the page?
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: 'small' | 'medium' | 'large';
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

const useStyles = makeStyles((theme: any) => {
  return {
    button: {
      backgroundColor: theme.palette.warning01
    }
  }
})

/**
 * Primary UI component for user interaction
 */
export const Button = ({
  primary = false,
  size = 'medium',
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const styles = useStyles();
  return (
    <button
      type="button"
      className={styles.button}
      {...props}
    >
      {label}
    </button>
  );
};
