import {Link} from 'react-router-dom'

const Nav = ()=>{
    return <section className="Nav">
        <Link to='/reviews'>Reviews</Link>
        <Link to='/categories'>Categories</Link>
        <Link to='/users'>Users</Link>
        </section>
}

export default Nav;