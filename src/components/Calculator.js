/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useState } from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../scss/calculator.scss';
import calculate from '../logic/calculate';

const Buttons = (props) => {
  const { cols, value, change } = props;

  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <td colSpan={cols} onClick={(e) => change(e)} className="buttons">
      {' '}
      {value}
      {' '}
    </td>
  );
};

Buttons.propTypes = {
  cols: PropTypes.number.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  change: PropTypes.func.isRequired,
};

const TrElement = (props) => {
  const {
    iter, cols, value, event,
  } = props;
  const buttons = [];
  let firstRow = 'firstRow';
  for (let i = 0; i < iter; i += 1) {
    buttons.push(<Buttons cols={cols[i]} value={value[i]} change={event} />);
    if (iter === 1) {
      firstRow = 'firstRow';
    } else {
      firstRow = 'otherRow';
    }
  }

  return <tr className={`${firstRow} row`}>{buttons}</tr>;
};

TrElement.propTypes = {
  iter: PropTypes.number.isRequired,
  cols: PropTypes.arrayOf(PropTypes.number).isRequired,
  value: PropTypes.arrayOf(PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ])).isRequired,
  event: PropTypes.func.isRequired,
};
function Calc() {
  const [resultState, setResultState] = useState({
    total: 0,
    next: null,
    operation: null,
  });

  const change = (value) => {
    const calculateResult = calculate(resultState, value.target.textContent);
    setResultState({ ...calculateResult });
  };
  return (
    <table className="calc">
      <tbody className="calc-body">
        <tr className="firstRow row">
          <td colSpan={4} className="buttons result">
            <p className="output">
              { resultState.total }
              {' '}
              { resultState.operation }
              {' '}
              { resultState.next }
            </p>
          </td>
        </tr>

        <TrElement iter={4} cols={[1, 1, 1, 1]} value={['AC', '+/-', '%', '÷']} event={change} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={['7', '8', '9', 'x']} event={change} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={['4', '5', '6', '-']} event={change} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={['1', '2', '3', '+']} event={change} />
        <TrElement iter={3} cols={[2, 1, 1]} value={['0', '.', '=']} event={change} />

      </tbody>

    </table>
  );
}

export default Calc;
