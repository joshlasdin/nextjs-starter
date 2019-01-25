import React from 'react';
import PropTypes from 'prop-types';

const TestWrapper = ({ children }) => <div>{children}</div>;

TestWrapper.propTypes = {
    children: PropTypes.node,
};

TestWrapper.defaultProps = {
    children: null,
};

export default TestWrapper;
