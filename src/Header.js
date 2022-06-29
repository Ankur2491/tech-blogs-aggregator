
   
import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import './Header.css';
import Dash from './Dash';
const HeaderLink = ({ page, selected }) => {
  const title = page.charAt(0).toUpperCase() + page.slice(1);
  let className = selected ? 'headerlink-no-link ' : '';
  className += 'headerlink-title';

  return (
    <Link to={`/${page}`} className={className}>
      {title}
      <div className={selected ? 'headerlink-dot-active' : 'headerlink-dot'}>
        •
      </div>
    </Link>
  );
};

const Header = () => {
  const [items, setItems] = useState([]);
  const page = useParams().page || 'company';
  return (
    <div>
    <div className='header'>
      <HeaderLink page='company' selected={page === 'company'} />
      <HeaderLink page='individual' selected={page === 'individual'} />
      <HeaderLink page='product' selected={page === 'product'} />
      |<a href="https://www.linkedin.com/in/ankur-sharma-341446b1/" target="_blank">My LinkedIn</a>
    </div>
    <Dash page={page}/>
    </div>
  );
};

export default Header;