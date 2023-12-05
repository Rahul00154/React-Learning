/* eslint-disable react/prop-types */
import HOC from "./HOC";

const UsersList = ({ data }) => {
  // const [users, setUsers] = useState([]);
  // const [text, setText] = useState("");

  // useEffect(() => {
  //   const fetchUsers = async () => {
  //     const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //     const data = await res.json();
  //     setUsers(data);
  //     console.log(users);
  //   };
  //   fetchUsers();
  // }, []);

  const renderUser = data.map((user) => {
    return (
      <div key={user.id}>
        <p>
          <strong>{user.name}</strong>
        </p>
      </div>
    );
  });

  return (
    <div>
      <div>{renderUser}</div>
    </div>
  );
};

const SearchUsers = HOC(UsersList, "users");
export default SearchUsers;
