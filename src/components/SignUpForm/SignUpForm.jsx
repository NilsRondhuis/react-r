import { useState } from 'react';

const SignUpForm = props => {
  const [name, setName] = useState('');
  const [pass, setPass] = useState('');

  // const handleNameChange = e => {
  //   setName(e.target.value);
  // };
  // const handlePassChange = e => {
  //   setPass(e.target.value);
  // };

  const handleChange = e => {
    const { name, value } = e.target;

    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'password':
        setPass(value);
        break;
      default:
        return;
    }
  };

  return (
    <div>
      <form>
        <label>
          <p>Name</p>
          <input type="text" name="name" value={name} onChange={handleChange} />
        </label>
        <br />
        <label>
          <p>Password</p>
          <input
            type="password"
            name="password"
            value={pass}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SignUpForm;
