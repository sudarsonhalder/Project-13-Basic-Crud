import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";


const Home = () => {
  const [users, setUser] = useState([]);
  const [id, setId] = useState("");
  const [isSearch, setisSearch] = useState(false);
  const [allValues, setAllValues] = useState({
 
  _id : '',
  name : '',          
  email:  '',         
 });

  useEffect(() => {
    loadUsers();
  }, []);
  const loadUsers = async () => {
    setisSearch(false) ;
    const result = await axios.get("http://localhost:5000/users");
    setUser(result.data.reverse());
  };

  const deleteUser = async id => {
    await axios.delete(`http://localhost:5000/delete/${id}`);
    loadUsers();
  };
  const handleSubmit = async (evt) => {
    setisSearch(true) ;
    evt.preventDefault();
    const result1 = await axios.get(`http://localhost:5000/user/${id}`);
    setAllValues(result1.data);
  };
  
  let UserStyles = {
    marginTop: '10px',
  marginLeft: '535px',
  }  ;
  return (
    <div className="container">
      <div className="py-4">
        <div className='row '>
        <h1>Registered Users</h1>
        <div style= {UserStyles}>
          <form 
          onSubmit={handleSubmit}
          className="form-inline my-2 my-lg-0 ">
          <div className="form-group">
      <input 
       type="text"
       name="id"
       value={id}
       onChange={e => setId(e.target.value)}
       className="form-control"  
       placeholder="Search"
       required
            >
       </input> 
       </div>
      <button 
      className="btn btn-outline-success my-2 my-sm-0 " type="submit">Search</button> 
      </form>
      </div>
    </div>
        <table class="table border shadow">
          <thead class="thead-dark">
            <tr>
              <th scope="col">#</th>
              <th scope="col">User Id</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th>Action</th>
            </tr>
          </thead>

          {isSearch == false? 

          <tbody>
            {users.map((user, index) => (
              <tr>
                <th scope="row">{index + 1}</th>
                <td>{user._id.$oid}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>
                  <Link
                    class="btn btn-danger"
                    onClick={() => deleteUser(user._id.$oid)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
          

         :
                    <tbody>
                    {/* {users.json()((user) => ( */}
                      <tr>
                         <th scope="row">1</th>
                        <td>{allValues._id.$oid}</td>
                        <td>{allValues.name}</td>
                        <td>{allValues.email}</td>
                        <td>
                          <Link
                            class="btn btn-danger"
                            onClick={() => deleteUser(allValues._id.$oid)}
                          >
                            Delete
                          </Link>
                        </td>
                      </tr>
                  </tbody>
}

          

        </table>
      </div>
    </div>
  );
};

export default Home;