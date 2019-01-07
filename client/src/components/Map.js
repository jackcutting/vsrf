import React from 'react';
import { GoogleMap, withGoogleMap } from 'react-google-maps';

const Map = withGoogleMap((props) =>
	<GoogleMap
		ref={ref => props.setRef(ref)}
		defaultZoom={12}
		defaultCenter={{ lat: 53.809075, lng: -1.552258 }}
	>
		{props.children}
	</GoogleMap>
);

export default Map;
