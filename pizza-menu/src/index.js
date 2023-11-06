import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  // const style={color: "red", fontSize: "40px", textTransform: "uppercase"};
  return (
    <header className="header">
      <h1>My Restaurant</h1>
    </header>
  );
}
function Menu() {
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizzas = pizzas.length;
  return (
    <div className="menu">
      <h2> Our Menu</h2>

      {numPizzas > 0 ? (
        <>
          <p>
            Authentix Italian cuisine. Six creative dishes to chose. All cooked
            with passion and love!
          </p>
          <ul className="pizzas">
            {pizzas.map(
              (pizza) => (
                <Pizza pizzaObj={pizza} />
              )
              // <Pizza
              //   name={pizza.name}
              //   photoName={pizza.photoName}
              //   ingredients={pizza.ingredients}
              // />
            )}
          </ul>
        </>
      ) : (
        <p>We have a problem in our website. Try again later! </p>
      )}
      {/*
      <Pizza
        name="Pizza Margherita "
        photoName="pizzas/margherita.jpg"
        ingredients="Tomato, mozarella"
        price={30}
      /> */}
    </div>
  );
}
// te njejten detyre po me ment e mia
function Pizza({ pizzaObj }) {
  //tbohet gri

  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div className="pizza">
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <p>{pizzaObj.soldOut ? "SOLD OUT" : pizzaObj.price}</p>
      </div>
    </li>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const openHour = 10;
  const closeHour = 18;
  // if (hour >= openHour && hour <= closeHour) alert("We are open!");
  // else alert("Sorry, we are closed!");
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>
      {/* {new Date().toLocaleTimeString()} */}
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <Close closeHour={closeHour} openHour={openHour} />
      )}
    </footer>
  );
  // return <footer>{isOpen && <p>we are open!</p>}</footer>;
  // return <footer>{new Date().toLocaleTimeString() && isOpen} </footer>;
}
function Order({ closeHour }) {
  return (
    <div className="order">
      <p>We are open until {closeHour}:00!</p>
      <button className="btn">Order</button>
    </div>
  );
}
function Close({ openHour, closeHour }) {
  return (
    <div>
      <p>Sorry you are late! We are already closed!</p>
      <p>
        Just in case we work from {openHour}:00 till {closeHour}:00
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
