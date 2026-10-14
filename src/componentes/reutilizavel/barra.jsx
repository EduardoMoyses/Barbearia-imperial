import { useState } from "react";
import styles from "./barra.module.css";
import { NavLink } from "react-router-dom";

function BarraPages() {
    const [hover, setHover] = useState("");

    const getClass = (isActive, path) => {
        return `${styles.item} ${
            hover
                ? hover === path
                    ? styles.active
                    : ""
                : isActive
                ? styles.active
                : ""
        }`;
    };

    return (
        <div className={styles.container}>

            <NavLink
                to="/"
                end
                onMouseEnter={() => setHover("/")}
                onMouseLeave={() => setHover("")}
                className={({ isActive }) => getClass(isActive, "/")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-house-door" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293z"/>
                </svg>
                <p>Início</p>
            </NavLink>

            <NavLink
                to="/servicos"
                onMouseEnter={() => setHover("/servicos")}
                onMouseLeave={() => setHover("")}
                className={({ isActive }) => getClass(isActive, "/servicos")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-scissors" viewBox="0 0 16 16">
                    <path d="M3.5 3.5c-.614-.884-.074-1.962.858-2.5L8 7.226 11.642 1c.932.538 1.472 1.616.858 2.5L8.81 8.61l1.556 2.661a2.5 2.5 0 1 1-.794.637L8 9.73l-1.572 2.177a2.5 2.5 0 1 1-.794-.637L7.19 8.61zm2.5 10a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0m7 0a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0"/>
                </svg>
                <p>Serviços</p>
            </NavLink>

            <NavLink
                to="/sobre"
                onMouseEnter={() => setHover("/sobre")}
                onMouseLeave={() => setHover("")}
                className={({ isActive }) => getClass(isActive, "/sobre")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"/>
                </svg>
                <p>Sobre</p>
            </NavLink>

            <NavLink
                to="/contato"
                onMouseEnter={() => setHover("/contato")}
                onMouseLeave={() => setHover("")}
                className={({ isActive }) => getClass(isActive, "/contato")}
            >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                    <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                    <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"/>
                </svg>
                <p>Contato</p>
            </NavLink>

        </div>
    );
}

export default BarraPages;