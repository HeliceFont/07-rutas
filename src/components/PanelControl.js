import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'

export const PanelControl = () => {
  return (
    <div>
        <h1>PANEL DE CONTROL</h1>

        <p>Elige una de estas opciones</p>
        <nav>
            <ul>
                <li>
                    <NavLink to='/panel/inicio'>inicio</NavLink>
                </li>

                <li>
                    <NavLink to='/panel/crear-articulos'>Crear articulos</NavLink>
                </li>

                <li>
                    <NavLink to='/panel/gestion-usuarios'>Gestión de usuarios</NavLink>
                </li>

                <li>
                    <NavLink to='/panel/acerca-de'>acerca de</NavLink>
                </li>
            </ul>
        </nav>
        <div>
            {/* Cargar componentes de las subrutas o de las rutas anidadas */}
            {/* Aqui cargan los componentes de las subrutas que estamos utilizando */}
            <Outlet></Outlet>
        </div>

        
</div>
  )
}
