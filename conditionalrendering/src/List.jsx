import "./App.css";
import { User } from "./User";

function List() {
  // const names = ["Rahul", "Ankita", "Nupur", "Abhishek", "Aditi"];

  // return (
  //   <div className="List">
  //     {names.map((name, key) => {
  //       return <h1 key={key}>{name}</h1>;
  //     })}
  //   </div>
  // );

  const users = [
    { name: "rahul", age: 23 },
    { name: "ankita", age: 21 },
    { name: "abhishek", age: 23 },
  ];

  return (
    <div className="list">
      {users.map((user, key) => {
        return <User name={user.name} age={user.age} />;
        // <div key={key}>
        //   {user.name} {user.age}
        // </div>
      })}
    </div>
  );
}

export default List;
