import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { AutoFill } from './autofill';
import { autoFillConfig } from './autofillConfig';

class App extends React.Component {
  state = {
    selected: '',
    flag: false
  };

  handleChange(evt: React.ChangeEvent<any>) {
    this.setState({
      selected: evt.target.value,
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
          <input
            type="text"
            placeholder="type username here..."
            name="username"
            onChange={() => {
              console.log('change triggered!');
            }}
          />
        </div>
        <div>
          <input
            type="password"
            placeholder="type password here..."
            name="password"
          />
        </div>
        <select
          name="birthday"
          onChange={this.handleChange.bind(this)}
          value={this.state.selected}
        >
          <option value='1990'>1990</option>
          <option value='1991'>1991</option>
          <option value='1992'>1992</option>
          <option value='1993'>1993</option>
          <option value='1994'>1994</option>
        </select>
        <div>
          <button onClick={this.onBtnClick}>Click here to auto fill select</button>
        </div>
        <div>
          <button onClick={()=>{
            this.setState({flag: !this.state.flag})
            console.log("button clicked!")
          }} data-testid={"basic-button"}>Button Element</button>
          {
            this.state.flag && (
              <div>
                <button onClick={()=>{console.log("button1 clicked!")}} data-testid={"basic-button-1"}>button1</button>
                <button onClick={()=>{console.log("button2 clicked!")}} data-testid={"basic-button-2"}>button1</button>
              </div>
            )
          }
        </div>
      </form>
    )
  }
}

ReactDOM.render(<App/>, document.getElementById('app'));
