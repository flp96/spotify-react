import React from "react";
import '../Sidebar/Sidebar.css';
import logoSpotify from '../assets/icons/logo-spotify.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHouse } from '@fortawesome/free-solid-svg-icons';
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { faBook } from "@fortawesome/free-solid-svg-icons";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";


export const Sidebar = () => {
    return (
        <div class="sidebar">
    <nav class="sidebar__navigation">
      <div class="logo">
        <a href="">
          <img src={logoSpotify} alt="Logo" />
        </a>
      </div>
      <ul>
        <li>
          <a href="">
            <span class="fa fa-home"><FontAwesomeIcon icon={faHouse} /></span>
            <span>Início</span>
          </a>
        </li>
        <li>
          <a href="">
            <span class="fa fa-search"><FontAwesomeIcon icon={faSearch} /></span>
            <span>Buscar</span>
          </a>
        </li>
      </ul>
    </nav>

    <div class="library">
      <div class="library__content">
        <button class="library__button">
          <span class="fa fas fa-book"><FontAwesomeIcon icon={faBook}/></span>
          <span>Sua biblioteca</span>
        </button>
        <span class="fa fa-plus"><FontAwesomeIcon icon={faPlus} /></span>
      </div>

      <section class="section-playlist">
        <div class="section-playlist__content">
          <span class="text title">Crie sua primeira playlist</span>
          <span class="text subtitle">É fácil, vamos te ajudar.</span>
          <button class="section-playlist__button">
            <span>Criar playlist</span>
          </button>
        </div>
      </section>

      <div class="cookies">
        <a href="">Cookies</a>
      </div>

      <div class="languages">
        <button class="languages__button">
          <span class="fa fa-globe"><FontAwesomeIcon icon={faGlobe}/></span>
          <span>Português do Brasil</span>
        </button>
      </div>
    </div>
  </div>
    )
}

