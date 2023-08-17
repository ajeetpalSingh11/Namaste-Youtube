const Fallback = ({ error, resetErrorBoundary }) => {
  return (
    <div role="alert">
      <p>Something went wrong:</p>
      <pre style={{ color: "red" }}>{error.message}</pre>
    </div>
  );

  // Call resetErrorBoundary() to reset the error boundary and retry the render.
};

export default Fallback;
