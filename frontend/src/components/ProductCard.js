import React from 'react';
import styled from 'styled-components';
import { SiVisa, SiGooglepay, SiPaypal } from 'react-icons/si';
import ToggleButton from './ToggleButton';

const ProductCard = () => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="image-container">
          {/* Online status indicator (green dot) */}
          <span className={`status-dot online`} aria-label={'online'} />
          <div className="toggle-wrapper">
            <ToggleButton />
          </div>
          <svg viewBox="0 0 1921 1081" xmlnsXlink="http://www.w3.org/1999/xlink" xmlns="http://www.w3.org/2000/svg" className="svg">
            <defs>
              <radialGradient gradientUnits="objectBoundingBox" gradientTransform="translate(0.219) scale(0.563 1)" r="1.204" cy="0.5" cx="0.5" id="radial-gradient">
                <stop stopColor="#fff" offset={0} />
                <stop stopColor="#bcbcbc" offset={1} />
              </radialGradient>
            </defs>
            <g transform="translate(-121.5 -92.5)" id="hoodie">
              <rect fill="url(#radial-gradient)" strokeWidth={1} strokeMiterlimit={10} stroke="#fff" transform="translate(122 93)" height={1080} width={1920} data-name="Rectangle 83" id="Rectangle_83" />
            </g>
          </svg>
        </div>
        <label className="favorite">
          <input defaultChecked type="checkbox" />
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#000000">
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </label>
        <div className="content">
          <div className="brand">بطائق إلكترونية مسبقة الدفع</div>
          <div className="product-name">بطاقة دفع رقمية جاهزة للاستخدام الفوري</div>
          <div className="loading-indicator">
            <div className="dot"></div>
            <div className="dot"></div>
            <div className="dot"></div>
          </div>
          <div className="color-size-container">
            <div className="colors">
              <ul className="colors-container">
                <li className="payment-card visa" aria-label="Visa">
                  <div className="card-icon real-icon visa"><SiVisa size={20} color="#1434CB"/></div>
                </li>
                <li className="payment-card google" aria-label="Google Pay">
                  <div className="card-icon real-icon google"><SiGooglepay size={20} color="#4285F4"/></div>
                </li>
                <li className="payment-card paypal" aria-label="PayPal">
                  <div className="card-icon real-icon paypal"><SiPaypal size={20} color="#003087"/></div>
                </li>
              </ul>
            </div>
          </div>
          <div className="rating">
            <svg viewBox="0 0 99.498 16.286" xmlns="http://www.w3.org/2000/svg" className="svg four-star-svg">
              <path fill="#fc0" transform="translate(-0.001 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" id="star-svgrepo-com" />
              <path fill="#fc0" transform="translate(20.607 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-2" />
              <path fill="#fc0" transform="translate(41.215 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-3" />
              <path fill="#fc0" transform="translate(61.823 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-4" />
              <path fill="#e9e9e9" transform="translate(82.431 -1.047)" d="M9.357,1.558,11.282,5.45a.919.919,0,0,0,.692.5l4.3.624a.916.916,0,0,1,.509,1.564l-3.115,3.029a.916.916,0,0,0-.264.812l.735,4.278a.919.919,0,0,1-1.334.967l-3.85-2.02a.922.922,0,0,0-.855,0l-3.85,2.02a.919.919,0,0,1-1.334-.967l.735-4.278a.916.916,0,0,0-.264-.812L.279,8.14A.916.916,0,0,1,.789,6.576l4.3-.624a.919.919,0,0,0,.692-.5L7.71,1.558A.92.92,0,0,1,9.357,1.558Z" data-name="star-svgrepo-com" id="star-svgrepo-com-5" />
            </svg>
            (29,062)
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card {
    --accent-color: #ffd426;
    position: relative;
    width: 240px;
    background: white;
    border-radius: 1rem;
    padding: 0.3rem;
    padding-bottom: 5rem;
    box-shadow: rgba(100, 100, 111, 0.2) 0px 50px 30px -20px;
    transition: all 0.5s ease-in-out;
    direction: rtl;
  }

  .card .image-container {
    position: relative;
    width: 100%;
    height: 130px;
    border-radius: 0.7rem;
    border-top-left-radius: 4rem;
    margin-bottom: 1rem;
  }

  .card .image-container .status-dot {
    position: absolute;
    top: 6px;
    left: 8px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    box-shadow: 0 0 0 2px #ffffff;
  }
  .card .image-container .status-dot.online { background: #22c55e; }
  .card .image-container .status-dot.offline { background: #9ca3af; }

  .card .image-container .svg { height: 100%; width: 100%; border-radius: inherit; }

  .card .image-container .toggle-wrapper {
    position: absolute;
    left: 20px;
    bottom: -20px;
    z-index: 4;
    transform: scale(0.55);
    transform-origin: left bottom;
  }

  .card .favorite {
    position: absolute;
    width: 14px;
    height: 14px;
    top: 8px;
    left: 8px;
    cursor: pointer;
  }
  .card .favorite input { position: absolute; opacity: 0; width: 0; height: 0; }
  .card .favorite input:checked ~ svg { animation: circle-bounce 0.3s; fill: #22c55e; filter: drop-shadow(0px 2px 3px rgba(34, 197, 94, 0.4)); }
  .card .favorite svg { fill: #d1d5db; transition: all 0.2s ease; }

  .card .content { padding: 0 0.8rem; margin-bottom: 1rem; }
  .card .content .brand { font-weight: 900; color: #a6a6a6; text-align: right; }
  .card .content .product-name { font-weight: 700; color: #666; font-size: 0.7rem; margin-bottom: 0.5rem; text-align: right; }

  .card .content .loading-indicator { display: flex; justify-content: flex-end; align-items: center; gap: 0.2rem; margin-bottom: 1rem; padding: 0.3rem 0; }
  .card .content .loading-indicator .dot { width: 4px; height: 4px; border-radius: 50%; background-color: #22c55e; animation: typing-dots 1.4s infinite ease-in-out; }
  .card .content .loading-indicator .dot:nth-child(1) { animation-delay: -0.32s; }
  .card .content .loading-indicator .dot:nth-child(2) { animation-delay: -0.16s; }
  .card .content .loading-indicator .dot:nth-child(3) { animation-delay: 0; }

  .card .content .color-size-container { display: flex; justify-content: space-between; text-transform: uppercase; font-size: 0.7rem; font-weight: 700; color: #a8a8a8; gap: 2rem; margin-bottom: 1.5rem; }
  .card .content .color-size-container > * { flex: 1; }

  .card .content .color-size-container .colors .colors-container {
    list-style-type: none;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-between;
    gap: 0.3rem;
    font-size: 0.5rem;
    margin-top: 0.2rem;
  }
  .card .content .color-size-container .colors .colors-container .payment-card { height: 18px; position: relative; cursor: pointer; transition: transform 0.2s ease; }
  .card .content .color-size-container .colors .colors-container .payment-card:hover { transform: scale(1.1); }
  .card .content .color-size-container .colors .colors-container .payment-card .card-icon { height: 100%; width: auto; border-radius: 3px; box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2); }
  .card .content .color-size-container .colors .colors-container .payment-card .real-icon { display: flex; align-items: center; justify-content: center; background: white; padding: 2px 6px; border-radius: 4px; }
  .card .content .color-size-container .colors .colors-container .payment-card.visa .real-icon svg,
  .card .content .color-size-container .colors .colors-container .payment-card.google .real-icon svg,
  .card .content .color-size-container .colors .colors-container .payment-card.paypal .real-icon svg { width: 28px; height: 16px; }

  .card .content .rating { color: #a8a8a8; font-size: 0.6rem; font-weight: 700; display: flex; align-items: center; gap: 0.5rem; }
  .card .content .rating svg { height: 12px; }

  .card:hover { transform: scale(1.03); }

  @keyframes typing-dots { 0%, 80%, 100% { transform: scale(1); opacity: 0.5; } 40% { transform: scale(1.2); opacity: 1; } }
  @keyframes circle-bounce { 0% { transform: scale(1); } 50% { transform: scale(1.3); } 100% { transform: scale(1); } }
`;

export default ProductCard;