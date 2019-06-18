import React from 'react';
import axios from 'axios';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/styles';

import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Button from '@material-ui/core/Button';



const searchStyles = {
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '80%',
    margin: '0 auto',
  },
  input: {
    marginLeft: 8,
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    width: 1,
    height: 28,
    margin: 4,
  }
};

const buttonStyles = theme => ({
  button: {
    margin: theme.spacing(1),
  },
  input: {
    display: 'none',
  },
});


class Result extends React.Component  {
  constructor(props) {
    super (props);
    this.state = {result:[], inputValue: ""};
  }

  refreshResults () {
    this.callService();
  }

  componentDidMount() {
    if (this.state.inputValue !== '') {
        this.callService();
    }
  }

  callService() {
    axios.get('http://api.languagelayer.com/detect?access_key=14d5efc052e57cfacead244bb773ab18&query='+ encodeURIComponent(this.state.inputValue))
  .then(response => {
      let results = response.data.results.map(x =>
        <div key ={x.language_code}>
          <h3>{this.state.inputValue}</h3>
          <h2>{x.language_name}</h2>
          <p>{x.percentage}</p>
          <p>{x.probability}</p>
        </div>
      )
      this.setState({result:results})
    })
  }

  updateInputValue(evt) {
     this.setState({
       inputValue: evt.target.value
     });
   }

  render() {
    const {classes} =this.props;
    return(
      <div>
      <Paper className={classes.root}>
        <InputBase
          className={classes.input}
          id='input'
          placeholder= "Please, enter yout text"
          inputProps={{ 'aria-label': 'Please, enter yout text' }}
          value={this.state.inputValue}
          onChange={evt => this.updateInputValue(evt)}
        />
        <Button variant="contained" color="secondary" className={classes.button} id='btn' onClick={() => this.refreshResults()}>
        Detect
        </Button>
     </Paper>

      <div сlassname="div_center">{this.state.result}</div>
    </div>
  )
  }
}


Result.propTypes = {
  classes: PropTypes.object.isRequired};


export default withStyles(searchStyles,buttonStyles)(Result);
