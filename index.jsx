"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = require("react");
var ReactDOM = require("react-dom");
var App = /** @class */ (function (_super) {
    __extends(App, _super);
    function App() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.state = {
            value: '',
        };
        return _this;
    }
    App.prototype.componentDidMount = function () {
        var event3 = new Event('change', {
            'bubbles': true,
            'cancelable': true,
        });
        var selectEle = document.querySelector('#select');
        selectEle.value = '1';
        selectEle.dispatchEvent(event3);
    };
    App.prototype.handleChange = function (evt) {
        this.setState({
            value: evt.target.value,
        });
    };
    App.prototype.render = function () {
        return (<form>
        <select onChange={this.handleChange.bind(this)} value={this.state.value} id='select'>
          <option value='1'>1</option>
          <option value='2'>2</option>
        </select>
      </form>);
    };
    return App;
}(React.Component));
ReactDOM.render(<App />, document.getElementById('app'));
