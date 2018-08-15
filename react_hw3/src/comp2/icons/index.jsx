import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.css';

const Icon = ({icon}) => (
    <svg className={styles.symbol} viewBox="0 0 32 32">
        <path d={icon} />
    </svg>
);

Icon.propTypes = {
    icon: PropTypes.string.isRequired,
};

export default Icon;