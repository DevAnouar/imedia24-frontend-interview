import React from 'react'
import {Button, Grid} from "material-ui"
import { css } from 'emotion'
import TextField from "./TextField";

const styles = {
  root: css({
    flexGrow: '1',
    margin: '0 auto',
    maxWidth: '75%',
    marginTop: '2.75em'
  }),
  textFieldsContainer: css({
    flexGrow: '1',
    marginTop: '1.5em !important'
  }),
  actions: {
    container: css({
      flexGrow: '1',
      marginTop: '1.5em !important',
      marginBottom: '1.5em !important'
    }),
    base: css`
      padding: 0.6em 2.5em;
      font-size: x-large !important;
      font-weight: normal;
      letter-spacing: 0.1em;
      color: #757575 !important;
      border: solid 2px;
      &:hover {
        background-color: white;
      }
    `,
    get abort() {
      return css`
        ${this.base}
      `
    },
    get save() {
      return css`
        ${this.base}
        color: #1DE9B6 !important;
      `
    }
  }
}

function InterviewComponentForm({ disabled, onInputChange, inputValues, inputRef, onSaveClick, onAbortClick }) {
  return (
    <Grid container
          direction="column"
          className={styles.root}
          justify="center"
          spacing={0}
          component={ (props) => <form {...props} onSubmit={onSaveClick} /> }>
      <Grid item>
        <TextField id="strasse" name="strasse" disabled={disabled} value={inputValues.strasse} onChange={onInputChange} inputRef={inputRef.strasse} fullWidth />
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.textFieldsContainer} alignItems="center" spacing={40} wrap="nowrap">
          <Grid item xs={3}>
            <TextField id="nr" name="nr" disabled={disabled} value={inputValues.nr} onChange={onInputChange} inputRef={inputRef.nr} fullWidth />
          </Grid>
          <Grid item xs={9}>
            <TextField id="zusatz" name="zusatz" disabled={disabled} value={inputValues.zusatz} onChange={onInputChange} inputRef={inputRef.zusatz} fullWidth />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.textFieldsContainer} alignItems="center" spacing={40} wrap="nowrap">
          <Grid item xs={3}>
            <TextField id="plz" name="plz" disabled={disabled} value={inputValues.plz} onChange={onInputChange} inputRef={inputRef.plz} fullWidth />
          </Grid>
          <Grid item xs={9}>
            <TextField id="ort" name="ort" disabled={disabled} value={inputValues.ort} onChange={onInputChange} inputRef={inputRef.ort} fullWidth />
          </Grid>
        </Grid>
      </Grid>
      <Grid item>
        <Grid container direction="row" className={styles.actions.container} alignItems="center" spacing={40} wrap="nowrap">
          <Grid item xs={6}>
            <Button type="button" onClick={onAbortClick} variant="flat" size="large" disableRipple className={styles.actions.abort}>
              abbrechen
            </Button>
          </Grid>
          <Grid item xs={6}>
            <Button type="submit" variant="flat" size="large" disableRipple disableFocusRipple className={styles.actions.save}>
              speichern
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  )
}

export default InterviewComponentForm