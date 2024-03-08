"use client";

import React, { useRef } from "react";
import Image from "next/image";
import logo from "../../../public/logo.png";
import Button from "../Button/Button";
import styled from "styled-components";
import { FaRocket, FaWallet } from "react-icons/fa";
import { Abril_Fatface } from "next/font/google";
import hover3d from "../../utils/hover";

const abril = Abril_Fatface({
  subsets: ["latin"],
  weight: "400",
});

function Header() {
  const hero = useRef<HTMLDivElement>(null);

  const hoverHero = hover3d(hero, {
    x: 30,
    y: -40,
    z: 30,
  });

  const imageHover = hover3d(hero, {
    x: 20,
    y: -5,
    z: 11,
  });

  return (
    <HeaderStyled ref={hero}>
      <nav>
        <div className="logo">
          <Image src={logo} alt="logo" width={50} />
          <h2>UNESQUO</h2>
        </div>
        <ul className="nav-items">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Events</a>
          </li>
          <li>
            <a className="ixHxFg" href="/genesis"
              target="_blank" rel="noreferrer noopener">
              <div className="btn special">Genesis<svg width="79" height="46" viewBox="0 0 79 46"
                fill="none" xmlns="http://www.w3.org/2000/svg">
                <g filter="url(#filter0_f_618_1123)">
                  <path d="M42.9 2H76.5L34.5 44H2L42.9 2Z" fill="url(#paint0_linear_618_1123)"></path>
                </g>
                <defs>
                  <filter id="filter0_f_618_1123" x="0" y="0" width="78.5" height="46" filterUnits="userSpaceOnUse"
                    color-interpolation-filters="sRGB">
                    <feFlood flood-opacity="0" result="BackgroundImageFix"></feFlood>
                    <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"></feBlend>
                    <feGaussianBlur stdDeviation="1" result="effect1_foregroundBlur_618_1123"></feGaussianBlur>
                  </filter>
                  <linearGradient id="paint0_linear_618_1123" x1="76.5" y1="2.00002" x2="34.5" y2="44"
                    gradientUnits="userSpaceOnUse">
                    <stop stop-color="white" stop-opacity="0.6"></stop>
                    <stop offset="1" stop-color="white" stop-opacity="0.05"></stop>
                  </linearGradient>
                </defs>
              </svg>
              </div>
            </a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <Button name="Connect Wallet" icon={<FaWallet />} />
        </ul>
      </nav>
      <div className="header-content">
        <div className="text-content">
          <h1 className={abril.className}>
            Buy, collect, and sell extraordinary NFTs
          </h1>
          <p>
            Acquire expertise in navigating the rapidly evolving and
            exhilarating NFT landscape, unveil the highly sought-after NFTs, and
            comprehend the possible advantages and disadvantages of acquiring,
            amassing, and vending these exceptional digital assets.
          </p>
          <div className="buttons">
            <Button
              name="Get Started"
              background="#f2994a"
              color="#fff"
              border="1px solid #f2994a"
              icon={<FaRocket />}
            />
            <Button name="Learn More" />
          </div>
        </div>
        <div className="image-content">
          <div
            className="image"
            style={{
              transform: hoverHero.transform,
            }}
          >
            <Image
              src="/images/monkey.png"
              width={600}
              height={600}
              alt="hero"
              style={{
                transform: imageHover.transform,
              }}
            />
          </div>
        </div>
      </div>
    </HeaderStyled>
  );
}

const HeaderStyled = styled.header`
  nav {
    padding: 0 4rem;
    min-height: 10vh;
    border-bottom: 1px solid var(--color-border);
    display: flex;
    justify-content: space-between;
    align-items: center;
    .logo {
      display: flex;
      align-items: center;
      gap: 1rem;
      cursor: pointer;
    }

    .input {
      flex: 2;
      display: flex;
      justify-content: center;
      input {
        width: 55%;
        padding: 0.6rem 0.8rem;
        border-radius: 8px;
        background-color: #161616;
        border: 1px solid var(--color-border);
        &::placeholder {
          color: var(--color-border);
          font-weight: 500;
        }
      }
    }

    .nav-items {
      display: flex;
      align-items: center;
      gap: 2rem;
      li {
        transition: all 0.2s ease-in-out;

        .ixHxFg:not(:disabled):hover {
          filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
      }
      
      .ixHxFg:not(:disabled) {
          cursor: pointer;
      }
      
      .ixHxFg.wrapper_special {
          filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
      }
      
      a:hover,
      a:focus {
          color: rgb(124, 127, 255);
      }
      
      .ixHxFg {
          margin-top: 20px;
          display: inline-block;
          max-width: 100%;
          height: 20px;
          transition: all 0.2s ease 0s;
      }
      
      a {
          color: rgb(64, 221, 255);
          transition: color 0.2s ease 0s;
      }
      
      a {
          color: inherit;
          text-decoration: none;
          width: -webkit-max-content;
          width: -moz-max-content;
          width: max-content;
      }
      
      .ixHxFg .btn {
          border: none;
          border-radius: 2px;
          clip-path: polygon(12px 0px, 100% 0px, 100% 72%, calc(100% - 12px) 100%, 0px 100%, 0px 12px);
          color: rgb(23, 15, 30);
          font-family: "JetBrains Mono", monospace;
          font-size: 16px;
          font-weight: 500;
          // line-height: 24px;
          display: inline-block;
          overflow: hidden;
          padding: 8px 18px;
          text-decoration: none;
          transition: all 0.2s ease 0s;
      }
      
      .ixHxFg .special:hover {
          transform: rotate(2deg);
          border: 1px solid rgb(124, 127, 255);
      }
      
      .ixHxFg .special {
          filter: drop-shadow(rgba(255, 215, 77, 0.6) -1px -1px 2px) drop-shadow(rgba(124, 127, 255, 0.6) 1px 1px 2px);
          color: rgb(23, 15, 30);
          animation: 2s ease 0s infinite alternate none running jNbght;
          background: linear-gradient(90deg, rgb(255, 215, 77) 0%, rgb(64, 221, 255) 30%, rgb(124, 127, 255) 85%) 0% 0% / 200% 100%;
      }
      
      @keyframes jNbght {
          0% {
              background-position: 10% 10%;
          }
          50% {
              background-position: 0% 0%;
          }
          100% {
              background-position: 100% 100%;
          }
      }
      
      .ixHxFg:not(:disabled) {
          cursor: pointer;
      }
      
      a:hover,
      a:focus {
          color: rgb(124, 127, 255);
      }
      
      a {
          color: rgb(64, 221, 255);
          transition: color 0.2s ease 0s;
      }
      
      a {
          color: inherit;
          text-decoration: none;
          width: -webkit-max-content;
          width: -moz-max-content;
          width: max-content;
      }

        &:hover {
          color: white;
          transform: scale(1.1);
        }
      }
    }
  }

  .header-content {
    padding: 0 10rem 5rem 10rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 4rem;
    min-height: calc(100vh - 10vh);

    .text-content {
      > h1 {
        font-size: clamp(2rem, 5vw, 5rem);
        color: #f2994a;
        transition: all 0.01s linear;
        padding-bottom: 1.5rem;
      }

      .buttons {
        display: flex;
        gap: 1rem;
        margin-top: 2.5rem;
      }
    }

    .image-content .image {
      padding: 1rem;
      border-radius: 8px;
      background-color: var(--color-bg);
      border: 1px solid var(--color-border);

      img {
        border-radius: 8px;
      }
    }
  }
`;

export default Header;
