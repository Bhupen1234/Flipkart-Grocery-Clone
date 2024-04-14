import React, { useEffect, useState } from "react";
import Popup from "reactjs-popup";
import "./LocationToolTip.css";
import MyLocation from "../../icons/mylocation.png";

import Location from "../../icons/location.png";

// import { Divider } from 'primereact/divider';

const LocationToolTip = () => {
  const [pincode, setPincode] = useState<string>("");

  const handlePincodeChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPincode(event.target.value);
  };

  const fetchPincodeFromCoordinates = (latitude: number, longitude: number) => {
    fetch(
      `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`
    )
      .then((response) => response.json())
      .then((data) => {
        const address = data.address;
        const pincode = address.postcode;
        if (pincode) {
          setPincode(pincode);
        } else {
          console.error("Pincode not found in address:", address);
          alert(
            "Pincode not found for current location. Please enter pincode manually."
          );
        }
      })
      .catch((error) => {
        console.error("Error fetching pincode from coordinates:", error);
        alert(
          "Error fetching pincode from current location. Please enter pincode manually."
        );
      });
  };

  const fetchCurrentLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          fetchPincodeFromCoordinates(latitude, longitude);
        },
        (error) => {
          console.error("Error getting current location:", error);
          alert(
            "Unable to fetch current location. Please enter pincode manually."
          );
        }
      );
    } else {
      console.error("Geolocation is not supported by this browser.");
      alert(
        "Geolocation is not supported by this browser. Please enter pincode manually."
      );
    }
  };

  useEffect(() => {
    fetchCurrentLocation();
  }, []);

  return (
    <Popup
      trigger={(open: Boolean) => (
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h4 className="button">
            {" "}
            <img
              src={Location}
              alt="location"
              width={22}
              height={22}
              style={{ filter: "invert(100%)" }}
            />{" "}
            Delivery to Pincode {pincode}{" "}
          </h4>
        </div>
      )}
      position="bottom center"
      on={["hover", "focus"]}
      closeOnDocumentClick
      arrow={true}
    >
      <div className="toolTip-card" title="bottom center">
        <h4 className="tooltip-title">Where do you want the delivery?</h4>
        <p className="tooltip-subtitle">
          Grocery is available in selected cities.
        </p>
        <div style={{ display: "flex", gap: "8px", alignItems: "center" }}>
          <div className="pincode-input">
            <input
              type="text"
              placeholder="Enter Pincode"
              className="pincode-input-field"
              value={pincode}
              onChange={handlePincodeChange}
            />
          </div>
          <div
            className="current-location-button"
            onClick={fetchCurrentLocation}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <h4>Current Location</h4>
            <img src={MyLocation} alt="myLocation" width={22} height={22} />
          </div>
        </div>
      </div>
    </Popup>
  );
};

export default LocationToolTip;
