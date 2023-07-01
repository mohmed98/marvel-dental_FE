import { Logo } from './Logo';
import { Nav } from './Nav';
import { Cta } from './Cta';

const Header = () => {
	return (
		<header role="banner">
			<Logo />
			<Nav />
			<Cta />
		</header>
	);
};

export default Header;
