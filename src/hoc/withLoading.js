// Dependencies
import React from 'react';

// Utils
import { getDisplayName } from 'utils/hoc';

// Shared components
import Loader from 'shared-components/Loader';

export const withLoading = (WrappedComponent) => {
  class WithLoading extends React.Component {
    constructor(props) {
      super(props);
    }

    render() {
      if (this.props.isFetching) return <Loader />;
      return <WrappedComponent {...this.props} />;
    }
  };

  WithLoading.displayName = `WithLoading(${getDisplayName(WrappedComponent)})`;

  return WithLoading;
}
