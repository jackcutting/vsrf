import React, { Component } from 'react';
import { Marker, InfoWindow } from 'react-google-maps';
import Map from './Map';

class MapContainer extends Component {
	constructor(props) {
		super(props);

		this.state = { activeInfo: null };
	}

	toggleInfoBox(storeId) {
		this.setState({ activeInfo: this.state.activeInfo === storeId ? null : storeId });
	}

	renderMarkers() {
		return this.props.stores.map(store => {
			return (
			<Marker
				key={store.id}
				position={{ lat: parseFloat(store.latitude), lng: parseFloat(store.longitude) }}
				onClick={() => this.toggleInfoBox(store.id)}
			>
				{this.state.activeInfo === store.id && <InfoWindow onCloseClick={() => this.toggleInfoBox(store.id)}>
					<div style={{ padding: '5px' }}>
						<p style={{ marginTop: 0 }}><strong>{store.type} {store.name}</strong></p>
						<address>
							{store.street}<br />
							{store.town}<br />
							{store.postcode}<br />
							<abbr title="Telephone">tel</abbr>: {store.phone}
						</address>
					</div>
				</InfoWindow>}
			</Marker>
			)
		} );
	}

	render() {
		return (
			<div className="map-container">
				<Map
					containerElement={<div style={{ height: `100%` }} />}
					mapElement={<div style={{ height: `100%` }} />}
					setRef={ref => this.props.setRef(ref)}
				>
					{this.renderMarkers()}
				</Map>
			</div>
		);
	}
}

export default MapContainer;
