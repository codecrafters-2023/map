// components/GoogleMap.js

import React, { useRef, useState } from "react";
import {
    GoogleMap,
    LoadScript,
    DirectionsService,
    Marker,
    DirectionsRenderer,
    Autocomplete,
} from "@react-google-maps/api";

const center = { lat: 48.8584, lng: 2.2945 };

function GoogleMaps() {
    const [map, setMap] = useState(null);
    const [searchBox, setSearchBox] = useState(null);
    const [direction, setDirection] = useState(null);
    const [distance, setDistance] = useState("");
    const [duration, setDuration] = useState("");

    // /** @type React.MutableRefObject<HTMLInputElement> */
    const originRef = useRef();

    console.log(originRef);

    // /** @type React.MutableRefObject<HTMLInputElement> */
    const destinationRef = useRef();

    const handleMapLoad = (map) => {
        setMap(map);
    };

    async function calculateRoute() {
        if (originRef.current.value === "" || destinationRef.current.value === "") {
            return;
        }

        // eslint-disable-next-line no-undef
        const directionService = new google.maps.DirectionsService();
        const result = await directionService.route({
            origin: originRef.current.value,
            destination: destinationRef.current.value,
            // eslint-disable-next-line no-undef
            travelMode: google.maps.TravelMode.DRIVING,
        });

        setDirection(result);
        setDistance(result.routes[0].legs[0].distance.text);
        setDuration(result.routes[0].legs[0].duration.text);
    }

    return (
        <LoadScript
            googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}
            libraries={["places"]}
        >
            {/* <GoogleMap
                center={{ lat: 0, lng: 0 }}
                zoom={5}
                mapContainerStyle={{ width: "100%", height: "100vh" }}
                options={{
                    zoomControl: false,
                    streetViewControl: false,
                    mapTypeControl: false,
                    fullscreenControl: false,
                }}
                onLoad={handleMapLoad}
            >
                <Marker position={center} />
                {direction && <DirectionsRenderer directions={direction} />}
            </GoogleMap> */}
            {/* <StandaloneSearchBox
          onLoad={onSearchBoxLoad}
          // onPlacesChanged={onPlacesChanged}
        > */}
            {/* <Autocomplete>
                <input
                    type="text"
                    placeholder="Search for a place"
                    ref={originRef}
                    style={{
                        boxSizing: "border-box",
                        border: "1px solid transparent",
                        width: "240px",
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "3px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                        fontSize: "14px",
                        outline: "none",
                        textOverflow: "ellipses",
                        marginBottom: "10px",
                    }}
                />
            </Autocomplete>
            <Autocomplete>
                <input
                    type="text"
                    placeholder="Search for a place"
                    ref={destinationRef}
                    style={{
                        boxSizing: "border-box",
                        border: "1px solid transparent",
                        width: "240px",
                        height: "32px",
                        padding: "0 12px",
                        borderRadius: "3px",
                        boxShadow: "0 2px 6px rgba(0, 0, 0, 0.3)",
                        fontSize: "14px",
                        outline: "none",
                        textOverflow: "ellipses",
                        marginBottom: "10px",
                    }}
                />
            </Autocomplete> */}
            {/* </StandaloneSearchBox> */}

            {/* <div>{distance}</div>
            <div>{duration}</div>

            <button onClick={calculateRoute}>Search</button>
            <button onClick={() => map.panTo(center)}>Center</button> */}
        </LoadScript>
    );
}

export default GoogleMaps;
