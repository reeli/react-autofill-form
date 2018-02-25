import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AutoFill } from './autofill';
import { autoFillConfig } from './autofillConfig';

class App extends React.Component {
  state = {
    value: '',
  };

  handleChange(evt: React.ChangeEvent<any>) {
    this.setState({
      value: evt.target.value,
    });
  }

  onBtnClick = (e: React.MouseEvent<any>) => {
    e.preventDefault();
    const fill = new AutoFill(autoFillConfig);
    fill.start();
  };

  render() {
    return (
      <form>
        <div>
          <input type="text" placeholder="type username here..." name="username"/>
        </div>
        <div>
          <input type="password" placeholder="type password here..." name="password"/>
        </div>
        <select onChange={this.handleChange.bind(this)} value={this.state.value} name="birthday">
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
        </select>
        <div>
          <button onClick={this.onBtnClick}>Click here to auto fill select</button>
        </div>
      </form>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));