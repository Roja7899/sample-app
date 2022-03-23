import React, { useEffect, useState } from "react";
import "./Display.css";

export default function Display() {
  const [store, setStore] = useState("");
  useEffect(() => {
    if (store === "") LoadData();
  }, [store]);
  const LoadData = async () => {
    const response = await fetch("https://reqres.in/api/users").catch(
      (error) => {
        throw error;
        
      }
    );
    const data = await response.json();
    console.log(response, data);
    console.log(data.data);

    setStore(data.data);
    // console.log(store);
  };
  console.log(store);

  return (
    <div id="outer">
      <table className="table ">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Email</th>
            <th scope="col">First_Name</th>
            <th scope="col">Last_name</th>
            <th scope="col">Avatar</th>
          </tr>
        </thead>
        <tbody>
          {store &&
            store.length > 0 &&
            store.map((row) => {
              return (
                <tr key={row.id}>
                  <th scope="row">{row.id}</th>
                  <td>{row.email}</td>
                  <td>{row.first_name}</td>
                  <td>{row.last_name}</td>
                  <td>
                    <img src={row.avatar} alt={row.name} />
                  </td>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}
