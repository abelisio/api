import React, { useState, useContext } from 'react';
import GithubContext from '../../context/github/githubContext';
import AlertContext from '../../context/alert/alertContext';

const Search = () => {
  const githubContext = useContext(GithubContext);
  const alertContext = useContext(AlertContext);
  const [text, setText] = useState('');

  const onSubmit = e => {
    e.preventDefault();
    if (text === '') {
      alertContext.setAlert('Please enter something', 'light');
    } else {
      githubContext.searchUsers(text);
      setText('');
    }
  };

  const onChange = e => setText(e.target.value);

  return (
    <div >
      <form onSubmit={onSubmit} className='form'>
        <input
          type='text'
          name='text'
          placeholder='Digite o nome do usuário...'
          value={text}
          onChange={onChange}
        />
        <input
          type='submit'
          value='Buscar'
          className='btn btn btn-primary'
        />
      </form>
      {githubContext.users.length > 0 && (
        <button
          className='btn btn btn-info'
          onClick={githubContext.clearUsers}
        >
          Limpar
        </button>
      )}
    </div>
  );
};

export default Search;
