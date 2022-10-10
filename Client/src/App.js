import { useState } from "react";
import "./App.css";

const App = () => {
  const [values, setValues] = useState();

  const handleChangeValues = (value) => {
    setValues((prevValue) => ({
      ...prevValue,
      [value.target.name]: value.target.value,
    }));
  };

  const handleClickBullton = () => {
    console.log(values);
  };

  return (
    <div className="app--container">
      <div className="registe--container">
        <h1 className="register--title">Scrim Shop</h1>

        <input
          type="text"
          name="name"
          placeholder="Nome"
          className="register--input"
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="cost"
          placeholder="Preço"
          className="register--input"
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="category"
          placeholder="Categoria"
          className="register--input"
          onChange={handleChangeValues}
        />

        <input
          type="text"
          name="Alert"
          placeholder="Alertas"
          className="register--input"
          onChange={handleChangeValues}
        />

        <button
          className="register--button"
          onClick={() => handleClickBullton()}
        >
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default App;
