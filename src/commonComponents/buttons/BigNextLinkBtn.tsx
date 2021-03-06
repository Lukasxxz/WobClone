import { Link } from 'react-router-dom';
import styles from './BigLinkBtn.module.scss';

const { btn, nextBtn } = styles;

export interface BigNextLinkBtnProps {
  linkPath: any,
  clickHandler: () => void,
}

const BigNextLinkBtn: React.FC<BigNextLinkBtnProps> = ({ linkPath, clickHandler, children }) => {
  return <Link to={linkPath} onClick={clickHandler} className={`${btn} ${nextBtn}`}>{children}</Link>;
}

export default BigNextLinkBtn;