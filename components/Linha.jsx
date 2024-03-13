import Casas from "./Casas";

export default function Linha(props) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      {geraCasas(8, props)}
    </div>
  );
}

export function geraCasas(numero, props) {
  const lista = [];
  for (let index = 0; index < numero; index++) {
    if (index % 2 === 0) {
      lista.push(<Casas preta={props.preta} />);
    } else {
      lista.push(<Casas preta={!props.preta} />);
    }
  }
  return lista;
}
