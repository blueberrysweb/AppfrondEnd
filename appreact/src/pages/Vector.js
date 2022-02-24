export default function Vector() {
  let llista = [22, 4, 55, 6, 34, 2, 3, 3];

  let numMayor = Math.max(...llista);
  let numMenor = Math.min(...llista);
  /*afegeix un element nou a un array*/
  llista.splice(2, 0, 2);
  /* treu els elements repetits d'un array */
  const llistaArr = [...new Set(llista)];

  const llistarepe = llistaArr.filter((item) => !llista.includes(item));
  console.log(llistarepe);

  let suma = 0;
  let Mitjana = 0;

  for (let i = 0; i < llista.length; i++) {
    suma += llista[i];
    Mitjana = suma / llista.length;
  }

  return (
    <>
      <label>comprovar el num major d'un array</label>
      <br />
      {numMayor}
      <br />
      <label>comprovar el num menor d'un array</label>
      <br />
      {numMenor}
      <br />
      <label>Suma d'un array</label>
      <br />
      {suma}
      <br />
      <label>Mitjana d'un array</label>
      <br />
      {Mitjana}
      <br />
      <label>Afegir un nou enter en un array</label>
      <br />
      {llista}
      <br />
      <label>Treure els repetits en un array</label>
      <br />
      {llistaArr}
      <br />
      <label>Treure els repetits en un array</label>
      <br />
      {llistarepe}
    </>
  );
}
