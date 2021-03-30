import React, { useEffect, useState } from 'react';
import {
  MapContainer as LeafletMap,
  TileLayer,
  Marker,
  Popup,
} from 'react-leaflet';
import Leaflet from 'leaflet';

import { Link } from 'react-router-dom';
import api from '../../services/api';
import { Pvds } from '../../types/Pvds';

import Sidebar from '../../components/Sidebar/Sidebar';

import 'leaflet/dist/leaflet.css';
import { Container } from './styles';

import mapMakerImg from '../../assets/maker.png';
import logo from '../../assets/logo.png';

const Dashboard: React.FC = () => {
  const [pvds, setPvds] = useState<Pvds[]>([]);

  useEffect(() => {
    api
      .get('/pdvs', {
        params: {
          ne_lat: 10,
          ne_lng: -30,
          sw_lat: -30,
          sw_lng: -70,
        },
      })
      .then((response) => {
        const responsePvds = response.data;

        const successCode = response.data.code;
        const successMessage = response.data.msg;

        console.log(successCode);
        console.log(successMessage);

        setPvds(responsePvds.data);
      })
      .catch((error) => {
        const errCode = error.response.data.code;
        const errMessage = error.response.data.msg;

        console.log(errCode);
        console.log(errMessage);
      });
  }, []);

  const mapIcon = Leaflet.icon({
    iconUrl: mapMakerImg,
    iconSize: [48, 52],
    iconAnchor: [29, 68],
    popupAnchor: [-5, -53],
  });

  return (
    <>
      <Sidebar />
      <Container>
        <LeafletMap
          center={[-23.5262907, -46.6710592]}
          style={{ width: '100%', height: '100%' }}
          zoom={14}
        >
          <TileLayer
            url={`https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`}
          />

          {pvds.map((pvd) => {
            return (
              <Marker
                icon={mapIcon}
                position={[pvd.lat, pvd.lng]}
                key={pvd.name}
              >
                <Popup closeButton={false} minWidth={240} className="map-popup">
                  <div>
                    <h1>{pvd.name}</h1>
                    <p>{pvd.street}</p>
                    <p>
                      {pvd.city} - {pvd.uf}
                    </p>
                    <Link to="/informations">
                      <span>Mais informações</span>
                    </Link>
                  </div>

                  <div>
                    <img
                      src={pvd.image_url === null ? logo : pvd.image_url}
                      alt="Logo das lojas"
                    />
                  </div>
                </Popup>
              </Marker>
            );
          })}
        </LeafletMap>
      </Container>
    </>
  );
};

export default Dashboard;
