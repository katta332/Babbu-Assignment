// App.js
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const fetchData = () => {
    fetch(`https://reqres.in/api/users?page=1`)
      .then((response) => response.json())
      .then((actualData) => {
        console.log(actualData);
        setData(actualData.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App">
<div>
    </div>
      <tbody>
        <tr>
          <th>Id</th>
          <th>Email</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Image</th>
        </tr>
        {data.map((item, index) => (
          <tr key={index}>
            <td>{item.id}</td>
            <td>{item.email}</td>
	    <td>{item.first_name}</td>
            <td>{item.last_name}</td>
	   <td>
		<img src={item. avatar} alt="" height={100}/>
	   </td>
          </tr>
        ))}
      </tbody>

    </div>
  );
}

export default App;