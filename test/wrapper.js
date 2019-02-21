import React from 'react';
import PropTypes from 'prop-types';
import { MockedProvider } from 'react-apollo/test-utils';

const TestWrapper = ({ mocks, children }) => (
    <MockedProvider mocks={mocks} addTypeName={false}>
        {children}
    </MockedProvider>
);

TestWrapper.propTypes = {
    mocks: PropTypes.arrayOf(
        PropTypes.shape({
            request: PropTypes.shape({
                query: PropTypes.string,
            }),
            result: PropTypes.shape({
                data: PropTypes.shape({}),
            }),
        })
    ),
    children: PropTypes.node,
};

TestWrapper.defaultProps = {
    mocks: [],
    children: null,
};

export default TestWrapper;
