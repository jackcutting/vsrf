import React, { Component } from 'react';
import { StandaloneSearchBox } from 'react-google-maps/lib/components/places/StandaloneSearchBox';

class Sidebar extends Component {
	constructor(props) {
		super(props);

		this.state = {
			searchBox: null
		};
	}

	showAddrComp(component, suffix) {
		if (component.trim() !== '') {
			return <span>{component}{suffix}</span>
		}
	}

	showTelephone(tel) {
		if (tel.trim() !== '') {
			return <span><abbr title="Telephone">tel</abbr>: {tel}</span>
		}
	}

	renderLocations() {
		return this.props.stores.map(store => this.renderLocation(store))
	}

	renderLocation(store) {
		let locationClass = 'single-location';

		if (this.props.activeStore === store.id) {
			locationClass += ' active';
		}

		return (
			<div key={store.id} className={locationClass} onClick={() => this.props.onLocationClick(store)}>
				<p style={{ marginTop: '0px'}}><strong>{store.type} {store.name}</strong></p>
				<address>
					{this.showAddrComp(store.street, ',')} {this.showAddrComp(store.town, ',')} {this.showAddrComp(store.postcode, <br />)}
					{this.showTelephone(store.phone)}
				</address>
			</div>
		);
	}

	render() {
		return (
			<div className="sidebar">
				<div className="search-wrapper">
					<div className="search-form">
						<StandaloneSearchBox
							ref={ref => this.props.setRef(ref)}
							bounds={{south: 34.5614, west: -8.8988999, north: 60.91569999999999, east: 33.9165549}}
							onPlacesChanged={this.props.onPlacesChanged}
						>
							<input
								type="text"
								placeholder="Search your location"
								style={{
									boxSizing: 'border-box',
									border: '1px solid transparent',
									width: '100%',
									height: '32px',
									padding: '0 12px',
									borderRadius: '3px',
									boxShadow: '0 2px 6px rgba(0, 0, 0, 0.3)',
									fontSize: '14px',
									outline: 'none',
									textOverflow: 'ellipses',
								}}
							/>
						</StandaloneSearchBox>
					</div>
				</div>
				<div className="locations-wrapper">
					{this.renderLocations()}
				</div>
			</div>
		);
	}
}

export default Sidebar;
