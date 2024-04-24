import { Link } from 'react-router-dom';

function MainNavigation(){
    return (
    <header>
        <div>React Learning Project</div>
        <nav>
            <ul>
                <li>
                    <Link to='/'>ALl Meetups</Link>
                </li>
                <li>
                    <Link to='/new-meetup'>Add New Meetup</Link>
                </li>
                <li>
                    <Link to='/favorites'>My Favorites</Link>
                </li>
            </ul>
        </nav>
    </header>
    );
}

export default MainNavigation;