import Linha from "./Linha";

export default function Tabuleiro() {
  return <div>{geraLinhas(8)}</div>;

  function geraLinhas(numero) {
    const lista = [];
    for (let index = 0; index < numero; index++) {
      if (index % 2 === 0) {
        lista.push(<Linha preta />);
      } else {
        lista.push(<Linha />);
      }
    }
    return lista;
  }
}
