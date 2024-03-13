export default function Casas(props) {
  return (
    <div
      style={{
        height: "50px",
        width: "50px",
        backgroundColor: props.preta ? "black" : "white",
      }}
    ></div>
  );
}
