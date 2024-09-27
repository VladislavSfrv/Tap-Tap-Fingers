import { Link } from "react-router-dom";
import "./header.css"
import AccountCircle from '@mui/icons-material/AccountCircle';
import { ThemeSwitchButton } from "../ThemeSwitchButton/ThemeSwitchButton";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../../redux/Slices/themeSwitchSlice";
import { useEffect } from "react";


function Header({ headerNav }) {
    const theme = useSelector((state) => state.theme.theme);
    const dispatch = useDispatch();

    // Load theme from local storage on component mount
    useEffect(() => {
        dispatch(toggleTheme(localStorage.getItem('theme')));
    }, [dispatch])

    // Update theme in local storage on theme change
    useEffect(() => {
       setTimeout(() => {
        if (localStorage.getItem('theme') === 'dark') {
            document.querySelector('.MuiButtonBase-root').classList.add('Mui-checked');
        }else if(localStorage.getItem('theme') === 'light'){
            document.querySelector('.MuiButtonBase-root').classList.remove('Mui-checked');
        }
       }, 10)
    }, [theme])

    // Function to toggle theme on button click  - Redux action is dispatched here
    const switchTheme = (() => {
        dispatch(toggleTheme(theme));
    });

    // Render Header component with navigation links and theme switcher  - Theme is passed as a prop
    return (
        <header className={`header ${theme}-theme`}>
            <ul>
                {headerNav.map((navItem) => (
                    <li key={crypto.randomUUID()}>
                        <Link className="dark-theme" to={navItem.url}>{navItem.icon}{navItem.title}</Link>
                    </li>
                ))}
                <Link className="dark-theme" to="/profile">
                    <AccountCircle />Login/Register
                </Link>
                <ThemeSwitchButton onClick={() => switchTheme()} />
            </ul>
            {console.log(theme)}
        </header>
    );
}

export default Header;