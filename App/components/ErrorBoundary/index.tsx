import React from 'react';
import Error from 'components/Error';

const ErrorBoundary: React.FC = () => <Error message="something_went_wrong" statusCode={500}/>;

export default ErrorBoundary;
