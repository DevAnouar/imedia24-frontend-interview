import React from 'react'
import {FormControl, Input, InputLabel} from "material-ui";
import {css} from 'emotion';

const styles = {
  label: css({
    textTransform: 'uppercase',
    fontSize: 'x-large !important',
    letterSpacing: '0.1em',
    color: '#757575 !important'
  }),
  input: css`
      padding-top: 1em;
      padding-bottom: 1em;
      &.MuiInput-underline-170::after {
        background-color: #757575 !important; 
      }
      `
}

function TextField({ fullWidth, id, name, disabled, value, onChange, inputRef }) {
  const moveCaretAtEnd = e => {
    const temp_value = e.target.value
    e.target.value = ''
    e.target.value = temp_value
  }

  return (
    <FormControl fullWidth={fullWidth}>
      <InputLabel htmlFor={id} className={styles.label} shrink>
        {name}
      </InputLabel>
      <Input inputProps={{ ref: inputRef, onFocus: moveCaretAtEnd }} id={id} name={name} disabled={disabled} value={value} onChange={onChange} className={styles.input} />
    </FormControl>
  )
}

export default TextField