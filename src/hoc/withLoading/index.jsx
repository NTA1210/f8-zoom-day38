import { Loading } from "@/components";

function withLoading(Component) {
  return function WrappedComponent({ isLoading, ...props }) {
    if (isLoading) {
      return <Loading />;
    }
    return <Component {...props} />;
  };
}

export default withLoading;
