import { Link, Outlet } from 'react-router-dom';
import './NavBar.css';

export default function NavBar() {
  return (
    <div>
      <nav>
        <Link to='/'>Home</Link>
        <Link to='/counter'>Counter</Link>
        <Link to='/table'>Table Antd</Link>
        <Link to='/todo'>Todo</Link>
        <Link to='/example'>Example</Link>
        {/* <Link to='/example1'>Example1</Link> */}
        <Link to='/example2'>Example2</Link>
        <Link to='/example3'>Example3</Link>
        <Link to='/ellipsis'>Ellipsis</Link>
      </nav>
      <br />
      <Outlet />
    </div>
  );
}
