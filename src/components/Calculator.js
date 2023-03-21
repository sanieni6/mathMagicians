import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import PropTypes from 'prop-types';
import '../scss/calculator.scss';

const Buttons = (props) => {
  const { cols, value } = props;

  return (
    <td colSpan={cols} className="buttons">
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
};

const TrElement = (props) => {
  const { iter, cols, value } = props;
  const buttons = [];
  let firstRow = 'firstRow';
  for (let i = 0; i < iter; i += 1) {
    buttons.push(<Buttons cols={cols[i]} value={value[i]} />);
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
};
function Calc() {
  return (
    <table className="calc">
      <tbody className="calc-body">
        <TrElement iter={1} cols={[4]} value={['0']} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={['AC', '+/-', '%', '/']} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={[7, 8, 9, 'x']} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={[4, 5, 6, '-']} />
        <TrElement iter={4} cols={[1, 1, 1, 1]} value={[1, 2, 3, '+']} />
        <TrElement iter={3} cols={[2, 1, 1]} value={[0, '.', '=']} />

      </tbody>

    </table>
  );
}

export default Calc;
