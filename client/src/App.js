import React, { Component } from 'react';
import Modal from 'react-modal';
import Header from './components/Header';
import MapContainer from './components/MapContainer';
import Sidebar from './components/Sidebar';
import './App.css';

Modal.setAppElement('#root');

class App extends Component {
	constructor(props) {
		super(props);

		this.state = {
			closestStores: [],
			showModal: false,
			activeStore: null
		}

		this.mapRef = null;
		this.searchRef = null

		this.handleOpenModal = this.handleOpenModal.bind(this);
		this.handleCloseModal = this.handleCloseModal.bind(this);
	}

	componentDidMount() {
		navigator.geolocation.getCurrentPosition((pos) => {
			if (this.state.closestStores.length >= 1) 
				return;

			const latlng = {
				lat: pos.coords.latitude,
				lng: pos.coords.longitude
			}

			this.updatePosition(latlng);
		});
	}

	setMapRef(ref) {
		this.mapRef = ref;
	}

	setSearchRef(ref) {
		this.searchRef = ref;
	}

	setActiveStore(store) {
		this.setState({ activeStore: store });
		this.panMap({
			lat: parseFloat(store.latitude),
			lng: parseFloat(store.longitude)
		});
	}

	onPlacesChanged() {
		const places = this.searchRef.getPlaces();

		const latlng = {
			lat: places[0].geometry.location.lat(),
			lng: places[0].geometry.location.lng()
		}

		this.updatePosition(latlng);
	}

	panMap(latlng) {
		this.mapRef.panTo(latlng);
	}

	updatePosition(latlng) {
		fetch(`/api/storefinder?lat=${latlng.lat}&lng=${latlng.lng}`)
			.then(res => res.json())
			.then(closestStores => {
				this.setState({ closestStores, activeStore: null });
			});
		this.panMap(latlng);
	}

	handleOpenModal () {
		this.setState({ showModal: true });
	}

	handleCloseModal () {
		this.setState({ showModal: false });
	}

	render() {
		return (
			<div className="App">
				<Header
					modalOpen={this.handleOpenModal.bind(this)}
				/>
				<div className="container">
					<MapContainer
						stores={this.state.closestStores}
						setRef={ref => this.setMapRef(ref)}
					/>
					<Sidebar
						stores={this.state.closestStores}
						setRef={ref => this.setSearchRef(ref)}
						onPlacesChanged={this.onPlacesChanged.bind(this)}
						onLocationClick={(store) => this.setActiveStore(store)}
						activeStore={this.state.activeStore !== null ? this.state.activeStore.id : null}
					/>
				</div>
				<Modal 
					isOpen={this.state.showModal}
					contentLabel="About Vegan Sausage Roll Finder"
					onRequestClose={this.handleCloseModal}
					className="Modal"
					overlayClassName="Overlay"
				>
					<h2>About Vegan Sausage Roll Finder</h2>
					<p>Vegan Sausage Roll Finder was born because there was no easy way to find out where the nearest Greggs vegan sausage roll was without scrolling through a long list on Greggs' terms and conditions.</p>
					<p>Either allow the site to use your location, or use the location search box and the map will show you the closest 10 Greggs stores around you.</p>
					<p>Disclaimer: VSRF does not store any personal information and, most importantly, does not track users using the site.</p>
					<h3>Technology</h3>
					<p>This site was built over a weekend as a method to learn some <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer">ReactJS</a>, <a href="https://expressjs.com/" target="_blank" rel="noopener noreferrer">ExpressJS</a> while employing a <a href="https://www.postgresql.org/" target="_blank" rel="noopener noreferrer">Postgresql</a> database. VSRF is hosted on <a href="https://www.heroku.com/" target="_blank" rel="noopener noreferrer">Heroku</a>, and the code can be found on Github at <a href="https://github.com/jackcutting/vsrf" target="_blank" rel="noopener noreferrer">https://github.com/jackcutting/vsrf</a>.</p>
					<p>If you would like to contact the creator, tweet me: <a href="https://twitter.com/jackcutting" target="_blank" rel="noopener noreferrer">https://twitter.com/jackcutting</a></p>

					<button onClick={this.handleCloseModal}>Close</button>
				</Modal>
			</div>
		);
	}
}

export default App;
