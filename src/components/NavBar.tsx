import { Link, Outlet } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
      <nav>       
           <Link to='/'>Home</Link>
           <br />
            <Link to='/counter'>Counter</Link>    
            <br />
            <Link to='/table'>Table Antd</Link>  
            <br />
            <Link to ='/todo'>Todo</Link>  
      </nav>
      <Outlet/>
    </div>
  )
}
