import React, { Component } from 'react'
import { Divider, Grid } from "material-ui"
import { css } from 'emotion'
import InterviewComponentHeader from "../components/InterviewComponentHeader";

const styles = {
  root: css({
    flexGrow: '1',
    margin: '0 auto',
    maxWidth: '60%',
    marginTop: '1em',
    background: 'white'
  }),
  header: {
    divider: css({
      margin: '0em 1em !important'
    })
  }
}

class InterviewComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeActive: false
    }

    this.handleChangeClick = this.handleChangeClick.bind(this)
  }

  handleChangeClick() {
    this.setState({
      changeActive: true
    })
  }

  render() {
    const { changeActive } = this.state

    return (
      <Grid container className={styles.root} direction="column" justify="center" spacing={0}>
        <Grid item>
          <InterviewComponentHeader onChangeClick={this.handleChangeClick} changeActive={changeActive} />
          <Divider className={styles.header.divider} />
        </Grid>
        <Grid item>

        </Grid>
        <Grid item>

        </Grid>
      </Grid>
    )
  }
}

export default InterviewComponent