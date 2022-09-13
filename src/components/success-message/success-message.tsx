function SuccessMessage(): JSX.Element {
  return (
    <div
      data-testid="error-message"
      style={{
        position: "fixed",
        bottom: "30px",
        left: "30px",
        padding: "10px",
        backgroundColor: "#13c321",
        color: "white",
        borderRadius: "5px",
        zIndex: "100",
      }}
    >
      {`Order successfully sent!`}
    </div>
  );
}

export default SuccessMessage;
