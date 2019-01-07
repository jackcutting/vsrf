import React, { Component } from 'react';

class Header extends Component {
	render() {
		return (
			<header>
				<div className="logo-wrapper">
					<h1><span className="desktop">Vegan Sausage Roll Finder</span><span className="mobile">VSRF</span></h1>
				</div>
				<div className="menu-wrapper">
					<ul>
						<li><button onClick={() => this.props.modalOpen()}>About</button></li>
					</ul>
				</div>
			</header>
		);
	}
}

export default Header;
