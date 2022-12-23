import { useEffect } from 'react';

const ErrorInfo = ({ errorMessage }) => {
  useEffect(() => {
    throw new Error(errorMessage);
  }, []);

  return null;
}

export default ErrorInfo;
