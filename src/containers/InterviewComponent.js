import React, { Component } from 'react'
import { Divider, Grid } from "material-ui"
import { css } from 'emotion'
import InterviewComponentHeader from "../components/InterviewComponentHeader"
import InterviewComponentForm from "../components/InterviewComponentForm"
import {connect} from "react-redux";
import {changeInputValue, clearForm} from "../actions";
import {getInputValues} from "../selectors";

const styles = {
  root: css({
    flexGrow: '1',
    margin: '0 auto',
    maxWidth: '60%',
    marginTop: '1em',
    marginBottom: '1em',
    background: 'white'
  }),
  header: {
    divider: css({
      margin: '0em 1em !important'
    })
  }
}

const mapStateToProps = state => ({
  inputValues: getInputValues(state)
})

const mapDispatchToProps = dispatch => ({
  changeInputValue: (inputName, inputValue) => dispatch(changeInputValue(inputName, inputValue)),
  clearForm: () => dispatch(clearForm())
})

class ConnectedInterviewComponent extends Component {
  constructor(props) {
    super(props)
    this.state = {
      changeActive: false,
      changedInput: null
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleClear = this.handleClear.bind(this)
    this.handleSave = this.handleSave.bind(this)
    this.handleAbort = this.handleAbort.bind(this)
    this.handleInputChange = this.handleInputChange.bind(this)
  }

  handleChange() {
    this.setState({
      changeActive: true
    })
  }

  handleClear() {
    this.props.clearForm()
  }

  handleSave(e) {
    e.preventDefault()
    const { inputValues } = this.props

    let preventSave = false
    Object.keys(inputValues).forEach( key => {
      if (inputValues[key].length === 0)
        preventSave = true
    })
    if (preventSave) {
      return
    }

    console.log("Saving...\n", inputValues)
  }

  handleAbort() {
    console.log("Aborted")
  }

  handleInputChange(e) {
    const { changeInputValue } = this.props
    const { name, value } = e.target

    changeInputValue(name, value)
    this.setState({
      changedInput: name
    })
  }

  componentDidUpdate(prevProps, prevState) {
    const { changedInput } = this.state
    if (changedInput) {
      switch (changedInput) {
        case 'strasse':
          this.strasse.focus()
          break
        case 'nr':
          this.nr.focus()
          break
        case 'zusatz':
          this.zusatz.focus()
          break
        case 'plz':
          this.plz.focus()
          break
        case 'ort':
          this.ort.focus()
          break
        default:
      }
    }
  }

  render() {
    const { changeActive } = this.state
    const { inputValues } = this.props

    return (
      <Grid container className={styles.root} direction="column" justify="center" spacing={0}>
        <Grid item>
          <InterviewComponentHeader onChangeClick={this.handleChange} onClearClick={this.handleClear} changeActive={changeActive} />
          <Divider className={styles.header.divider} />
        </Grid>
        <Grid item>
          <InterviewComponentForm disabled={!changeActive}
                                  inputValues={inputValues}
                                  onInputChange={this.handleInputChange}
                                  onSaveClick={this.handleSave}
                                  onAbortClick={this.handleAbort}
                                  inputRef={{
                                    strasse: input => this.strasse = input,
                                    nr: input => this.nr = input,
                                    zusatz: input => this.zusatz = input,
                                    plz: input => this.plz = input,
                                    ort: input => this.ort = input
                                  }} />
        </Grid>
      </Grid>
    )
  }
}

const InterviewComponent = connect(mapStateToProps, mapDispatchToProps)(ConnectedInterviewComponent)

export default InterviewComponent