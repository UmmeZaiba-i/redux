import { Link } from 'react-router-dom'


export default function NavBar() {
  return (
    <div>
      <nav>
        <ul>
            <li><Link to='/'></Link></li>
            <li><Link to='/counter'></Link></li>
        </ul>
      </nav>
    </div>
  )
}
