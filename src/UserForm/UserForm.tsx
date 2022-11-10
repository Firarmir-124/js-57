import React, {useState} from 'react';
import {UsersType, UsersTypeMutation} from "../types";

interface Props {
  onSubmit: (user: UsersType) => void;
}

const UserForm:React.FC<Props> = ({onSubmit}) => {

  const [user, setUser] = useState<UsersTypeMutation>({
    name: '',
    email: '',
    active: false,
    type: '',
  });

  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const {name, value} = e.target;
    setUser(prev => ({...prev, [name]:value}))
  }

  const onChecked = (e: React.ChangeEvent<HTMLInputElement>) => {
    const {name, checked} = e.target;
    setUser(prev => ({...prev, [name]:checked}))
  }

  const onFormSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    onSubmit({
      id: Date.now().toString(),
      ...user,
    })
  }


  return (
    <form onSubmit={onFormSubmit}>
      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Your Name</span>
        <input onChange={onChange} value={user.name} type="text" className="form-control" name="name" id="name" placeholder="Enter your Name" required/>
      </div>

      <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">Your Email</span>
        <input onChange={onChange} value={user.email} type="email" className="form-control" name="email" id="email" placeholder="Enter your Email" required/>
      </div>

      <div style={{width: '100px'}} className="form-check form-switch mb-3 bg-dark py-3 pe-2 rounded-2">
        <input checked={user.active} onChange={onChecked} name='active' className="form-check-input" type="checkbox" role="switch" id="switch"/>
        <label className="form-check-label" htmlFor="switch"><span style={{color: user.active ? 'green' : 'red'}}>Active</span></label>
      </div>

      <div className="input-group">
        <span className='input-group-text'>Role</span>
        <select id='type' name='type' value={user.type} onChange={onChange} className="form-select" aria-label="Default select example" required>
          <option value='' disabled>Выберите роль</option>
          <option>User</option>
          <option>Editor</option>
          <option>Admin</option>
        </select>
      </div>

      <div className="form-group ">
        <button type='submit' className="btn btn-primary btn-lg mt-2">Create</button>
      </div>
    </form>
  );
};

export default UserForm;