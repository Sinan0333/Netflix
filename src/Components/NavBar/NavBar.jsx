import React,{useState,useEffect} from 'react'
import '../NavBar/NavBar.css'

function NavBar() {

  const [scrolled, setScrolled] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <img className='logo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix" />
        <ul className='head-elements'>
            <li className='head-element'>Home</li>
            <li className='head-element'>TvShows</li>
            <li className='head-element'>Movies</li>
            <li className='head-element'>News&Popular</li>
            <li className='head-element'>My List</li>
            <li className='head-element'>Browse By Languages</li>
        </ul>
        <i className="fa-solid fa-magnifying-glass"></i>
    </div>
  )
}

export default NavBar
