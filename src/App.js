import logo from './logo.svg';
import './App.css';
import './effect.scss'
import {Button} from "antd";

function App() {
  return (
    <div className="App">
      <div className="background">
        <nav>
          <div className="navWrapper">
            <a href="" id="logo">Gino-Chiuuuuu</a>
            <div className="right">
              <div id="nav-icon" id="menuIcon">
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className="overlay">
                <div className="overlayContent">
                  <a href="#" id="services">Services</a>
                  <a href="#" id="work">Our work</a>
                  <a href="#" id="contact">Contact</a>
                  <p>Copyright 2018</p>
                </div>
              </div>
            </div>
          </div>
        </nav>
        <div className="header">
          <div className="headerWrapper">
            <h3>津津</h3>
            <h1> Have A <br/> Nice Day </h1>
            <div className="circle blue"></div>
            <div className="square red"></div>
            <div className="triangle green">
              <svg xmlns="http://www.w3.org/2000/svg" xlink="http://www.w3.org/1999/xlink"
                   viewBox="0 0 177.893 177.893">
                <defs>
                  <linearGradient id="a" x1="0.5" x2="0.5" y2="1" gradientUnits="objectBoundingBox">
                    <stop offset="0" stop-color="#3dbed5"/>
                    <stop offset="1" stop-color="#3dd55a"/>
                  </linearGradient>
                  <filter id="b" x="0" y="0" width="177.893" height="177.893" filterUnits="userSpaceOnUse">
                    <feOffset dx="3" dy="3" input="SourceAlpha"/>
                    <feGaussianBlur stdDeviation="7.5" result="c"/>
                    <feFlood flood-color="#3dd55a" flood-opacity="0.396"/>
                    <feComposite operator="in" in2="c"/>
                    <feComposite in="SourceGraphic"/>
                  </filter>
                </defs>
                <g className="b" transform="matrix(1, 0, 0, 1, 0, 0)">
                  <path className="a" d="M136.727,21104.928l-50.222,100h100Z"
                        transform="translate(-8978.23 -19029.24) rotate(-25)"/>
                </g>
              </svg>
            </div>
            <div className="circle orange"></div>
          </div>
        </div>
      </div>

      <div className="section services">
        <div className="sectionWrapper">
          <h6>最好的时光</h6>
          <h2>To Be Continued ...</h2>
          <div className="square blue"></div>
          <div className="grid">
            <div className="card">
              <h3>ToDo List</h3>
              <a className="effect effect-2"
                 href="https://sd23asko51.feishu.cn/docx/doxcnAbwstafF9I3u4GHW0A0ehh"
                 target="https://sd23asko51.feishu.cn/docx/doxcnAbwstafF9I3u4GHW0A0ehh">Click Me</a>
            </div>
            <div className="card">
              <h3>Unfinished Game</h3>
              <a className="effect effect-2"
                 href="http://124.70.151.55:3000/"
                 target="http://124.70.151.55:3000/">Click Me</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
