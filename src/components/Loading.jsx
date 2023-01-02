function Loading({ text }) {
  return (
    <div className="container text-center mt-5">
      <h5 className="text-dark mt-1">{text}</h5>
      <div className="row p-2">
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status">
            <span className="visually-hidden">Loading...</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Loading;
