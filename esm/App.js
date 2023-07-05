import _slicedToArray from "@babel/runtime/helpers/slicedToArray";
import { useState } from 'react';
import './App.css';
import Button from './components/Button';
function App() {
  var _useState = useState(0),
    _useState2 = _slicedToArray(_useState, 2),
    count = _useState2[0],
    setCount = _useState2[1];
  return /*#__PURE__*/React.createElement(React.Fragment, null, /*#__PURE__*/React.createElement("h1", null, "Vite + React"), /*#__PURE__*/React.createElement("div", {
    className: "card"
  }, /*#__PURE__*/React.createElement("button", {
    onClick: function onClick() {
      return setCount(function (count) {
        return count + 1;
      });
    }
  }, "count is ", count), /*#__PURE__*/React.createElement("p", null, "Edit ", /*#__PURE__*/React.createElement("code", null, "src/App.jsx"), " and save to test HMR")), /*#__PURE__*/React.createElement("p", {
    className: "read-the-docs"
  }, "Click on the Vite and React logos to learn more"), /*#__PURE__*/React.createElement(Button, null));
}
export default App;