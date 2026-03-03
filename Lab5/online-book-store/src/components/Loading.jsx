import Spinner from "react-bootstrap/Spinner";

export default function Loading() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        backgroundColor: "rgba(255, 255, 255, 0.8)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 9999,
      }}
    >
      <Spinner
        animation="border"
        variant="primary"
        style={{ width: "4rem", height: "4rem" }}
      />
    </div>
  );
}
