import React from "react";

const UserContext = React.createContext();

export default UserContext;

/*

***when we want to pass data form userContext Provider to the component we wrap it inside <UserContext/> so we can pass the data to that component

<UserContext/>
<Login/>
<Logout/>
<Data/>

<UserContext/>

*/
