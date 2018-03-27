import React from "react";
import {Button, Grid, Icon, Slide, Typography} from "material-ui"
import { css } from 'emotion'

const styles = {
  container: css({
    flexGrow: '1',
    padding: '2em',
    paddingRight: '1em'
  }),
  title: css({
    textTransform: 'uppercase',
    fontWeight: 'bold !important',
    color: '#424242 !important',
    textAlignLast: 'left'
  }),
  buttons: {
    base: css({
      textTransform: 'lowercase !important',
      fontSize: 'large !important',
      letterSpacing: '0.1em',
      color: '#424242 !important',
    }),
    get changeNotActive() {
      return css`
        ${this.base}
        &:hover {
          background-color: white;
        }
      `
    },
    get changeActive() {
      return css`
        ${this.base}
        color: #1DE9B6 !important;
        &:hover {
          background-color: white;
        }
        `
    },
    get clear() {
      return css`
        ${this.base}
        border-left: 0.15rem #424242 solid !important;
        border-radius: 0 !important;
        padding-left: 0.6em !important;
        &:hover {
          background-color: white;
        }
        `
      },
    icon: css({
      marginRight: '12'
    })
  }
}

const HeaderActions = ({ onChangeClick, onClearClick, changeActive }) =>
  <Grid container direction="row" justify="flex-end" spacing={0} wrap="nowrap">
    <Grid item>
      <Button onClick={onChangeClick}
              disableRipple
              className={ changeActive ? styles.buttons.changeActive : styles.buttons.changeNotActive }
              variant="flat"
              size="medium">
        <Icon className={styles.buttons.icon}>create</Icon>
        ändern
      </Button>
    </Grid>
    <Grid item>
      <Slide direction="left" in={changeActive} mountOnEnter unmountOnExit>
        <Button onClick={onClearClick} disableRipple className={styles.buttons.clear} variant="flat" size="medium">
          <Icon className={styles.buttons.icon}>close</Icon>
          löschen
        </Button>
      </Slide>
    </Grid>
  </Grid>

const InterviewComponentHeader = props => {
  const { onChangeClick, onClearClick, changeActive } = props

  return (
    <Grid container className={styles.container} direction="row" alignItems="center" spacing={0}>
      <Grid item xs={12} sm={6}>
        <Typography variant="headline" className={styles.title}>
          rechnung
        </Typography>
      </Grid>
      <Grid item xs={12} sm={6}>
        <HeaderActions onChangeClick={onChangeClick} onClearClick={onClearClick} changeActive={changeActive} />
      </Grid>
    </Grid>
  )
}

export default InterviewComponentHeader