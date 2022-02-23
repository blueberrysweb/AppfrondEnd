export default function Vector() {
  let llista = [22, 4, 55, 6, 34, 2, 3, 3];

  let numMayor = Math.max(...llista);
  let numMenor = Math.min(...llista);
  llista.splice(2, 0, 2);

  const llistaArr = [...new Set(llista)];

  let suma = 0;
  let Mitjana = 0;

  for (let i = 0; i < llista.length; i++) {
    suma += llista[i];
    Mitjana = suma / llista.length;
  }

  return (
    <>
      {numMayor}
      <br />
      {numMenor}
      <br />
      {suma}
      <br />
      {Mitjana}
      <br />
      <ul>
        <li>{llista}</li>
      </ul>

      <br />
      {llistaArr}
    </>
  );
}
