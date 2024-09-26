// import React from "react";

// async function Fetchdata() {
//   const res = await fetch("https://jsonplaceholder.typicode.com/todos");
//   const data = await res.json();
//   return data;
// }
// export default async function Home() {
//   const data = await Fetchdata();

//   return (
//     <div>
//       <h1>Welcome to Home page</h1>
//       {data.map((item) => (
//         <p key={item.id}>{item.title}</p>
//       ))}
//     </div>
//   );
// }

import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="container">
      <h1>Welcome to Home page</h1>
      <Link href="/list">
        <button className="btn btn-primary mr-2">View Todos</button>
      </Link>
      <Link href="/counter">
        <button className="btn btn-secondary mr-2">View Counter</button>
      </Link>
      <Link href="/api">
        <button className="btn btn-primary mr-2">View Products</button>
      </Link>
      <Link href="/calculator">
        <button className="btn btn-secondary mr-2">View Calculator</button>
      </Link>
    </div>
  );
};

export default Home;
