import { Link } from 'react-router-dom';
import styles from './User.module.scss';

const { userIcon, userIconWrapper } = styles;

function User() {
  return (
    <div className={userIconWrapper}>
      <Link to="/sign-page" className={userIcon}>
        <svg id="i-user" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="currentcolor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
          <path d="M22 11 C22 16 19 20 16 20 13 20 10 16 10 11 10 6 12 3 16 3 20 3 22 6 22 11 Z M4 30 L28 30 C28 21 22 20 16 20 10 20 4 21 4 30 Z" />
        </svg>
      </Link>
    </div>
  );
}

export default User;