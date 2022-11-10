import React, {useState} from 'react';
import UserForm from "./UserForm/UserForm";
import Users from "./Users/Users";

import type {UsersType} from "./types";

function App() {
  const [users, setUsers] = useState<UsersType[]>([
    {id: 'admin', name: 'Dima', email: 'lomoka@bk.ru', active: false, type: 'admin'}
  ]);

  const addUser = (user: UsersType) => {
    setUsers(prev => [...prev, user])
  }

  return (
    <div className="App">
      <header className='navbar navbar-expand-lg navbar-dark bg-primary mb-3'>
        <div className="container-fluid">
          <h3 className='text-white'>User</h3>
        </div>
      </header>
      <main className='container-fluid'>
        <div className="row">
          <div className="col">
            <UserForm onSubmit={addUser}/>
          </div>
          <div className="col">
            <Users users={users}/>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
