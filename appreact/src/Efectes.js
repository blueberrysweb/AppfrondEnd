import { useRef } from "react";

export default function SayHello() {
  const inputRef = useRef();
  const onClick = () => {
    alert(`Hola ${inputRef.current.value}`);
  };

  return (
    <>
      Nom: <input ref={inputRef} />
      <br />
      <button onClick={onClick}>Say Hello</button>
    </>
  );
}
