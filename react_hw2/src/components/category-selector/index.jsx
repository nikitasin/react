import React from 'react';
import Select from 'react-select';
import styles from './styles.css';

const CategorySelector = props => <Select className={styles.category} {...props} />;

// const CategorySelector = ({ value, options, onChange }) => (
//   <select value={value} onChange={evt => onChange(evt.target.value)}>
//     {options.map(opt => (
//       <option key={opt.value} value={opt.value}>
//         {opt.label}
//       </option>
//     ))}
//   </select>
// );

export default CategorySelector;