export default function Fruits() {
//   const fruits = ["Apple", "Mango", "Banana", "Orange", "Pineapple"];
const fruits = [
    {name:"Apple", price:10},
    {name:"Mango", price:20},
    {name:"Banana", price:5},
    {name:"Orange", price:15},
    {name:"Pineapple", price:30},
]
  return (
    <div>
        <ul>
      {fruits.map((fruit) => (
        <li key={fruit.name}>{fruit.name} {fruit.price}</li>
      ))}
      </ul>
    </div>
  );
}
