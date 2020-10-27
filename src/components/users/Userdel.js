import React, { Fragment, useEffect, useContext } from 'react';
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const Userdel = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, repos, getUserRepos } = githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
  }, []);

  const {  login   } = user;

  function deletelogin(login) {
    const itensCopy = Array.from(login);
    itensCopy.splice(login, 1);
    getUser(itensCopy);
  }

  return (
    
      
          <h1>{login}</h1>
       
  );
};

export default Userdel;
