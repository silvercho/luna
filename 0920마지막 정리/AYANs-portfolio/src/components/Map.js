import React, { useEffect } from 'react';
import styled from 'styled-components';

import PText from './PText';

const MapStyles = styled.div`
  min-height: 400px;
  .container {
    position: relative;
    min-height: 400px;
  }
  .map__card {
    position: absolute;
    right: 10%;
    bottom: 10%;
    padding: 2rem;
    background: var(--deep-dark);
    width: 100%;
    max-width: 300px;
    border-radius: 12px;
  }
  .map__card__heading {
    font-size: 3rem;
    margin-bottom: 1rem;
  }
  .map__card__link {
    display: inline-block;
    font-size: 1.6rem;
    margin-top: 3rem;
    text-decoration: underline;
  }
  @media only screen and (max-width: 768px) {
    background-position: 80% center;
  }
  @media only screen and (max-width: 400px) {
    .map__card {
      max-width: none;
      right: auto;
    }
  }
`;
export default function Map() {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src =
      'http://dapi.kakao.com/v2/maps/sdk.js?appkey=bceccd594bb478b5533d7d2ec63f8bb0';
    script.async = true;
    script.onload = () => {
      const mapContainer = document.getElementById('map'); // 지도를 표시할 div
      const mapOptions = {
        center: new window.kakao.maps.LatLng(37.431263, 127.128403), // 지도의 중심좌표
        level: 3, // 지도의 확대 레벨
      };
      const map = new window.kakao.maps.Map(mapContainer, mapOptions); // 지도를 생성합니다
      // 마커가 표시될 위치입니다
      const markerPosition = new window.kakao.maps.LatLng(
        37.431263,
        127.128403
      );
      // 마커를 생성합니다
      const marker = new window.kakao.maps.Marker({
        position: markerPosition,
      });
      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map);
      // 아래 코드는 지도 위의 마커를 제거하는 코드입니다
      // marker.setMap(null);
    };

    // 스크립트를 `<head>` 요소에 추가하여 로드합니다.
    document.head.appendChild(script);
  }, []);

  return (
    <MapStyles>
      <div className="container" id="map">
        <div className="map__card">
          <h3 className="map__card__heading">Here is me</h3>
          <PText>GEC circle, Chittagong, Bangladesh</PText>
          <a
            className="map__card__link"
            href="https://www.google.com/maps/place/GEC+More,+Chittagong/@22.3590818,91.8195583,17z/data=!3m1!4b1!4m5!3m4!1s0x30acd89aaa8239cd:0x6e65fa00001dd59f!8m2!3d22.3590715!4d91.8215486"
            target="_blank"
            rel="noreferrer"
          >
            Open in google map
          </a>
        </div>
      </div>
      {/* <img src={MapImg} alt="Map" /> */}
    </MapStyles>
  );
}
