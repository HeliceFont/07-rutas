import React from 'react'
import { Routes, NavLink, Route, BrowserRouter, Link, Navigate } from 'react-router-dom'
import { Inicio } from '../components/Inicio'
import { Contacto } from '../components/Contacto'
import { Articulos } from '../components/Articulos'
import { Persona } from '../components/Persona'
import { PanelControl } from '../components/PanelControl'
import { InicioPanel } from '../components/panel/InicioPanel'
import { Acerca } from '../components/panel/Acerca'
import { Crear } from '../components/panel/Crear'
import { Gestion } from '../components/panel/Gestion'

export const RouterPrincipal = () => {
  return (
    <div>
    <BrowserRouter>
    <h1>Cabecera</h1>
    <hr/>
    {/* MENU DE NAVEGACION */}
    <nav>
      <ul>
        <li>
          <NavLink to="/inicio"
          // Función anonima,
          // seleccionamos con la desectruturación de objetos el parametro isActive
          // si isActive es true imprime estilo activado, si no ""vacio es nada 
          // aunque se le pueden añadir estilos
            className = {
              ({isActive})=> isActive ? "activado" : "" 
            }>
              Inicio
          </NavLink>
        </li>

        <li>
          <NavLink to="/contacto"
          // Función anonima,
          // seleccionamos con la desectruturación de objetos el parametro isActive
          // si isActive es true imprime estilo activado, si no ""vacio es nada 
          // aunque se le pueden añadir estilos
            className = {
              ({isActive})=> isActive ? "activado" : "" }>
              Contacto
              </NavLink>
        </li>

        <li>
          <NavLink to="/articulos"
          className = {
            ({isActive})=> isActive ? "activado" : "" 
          }>Artículos</NavLink>
        </li>
        <li>
          <NavLink to="/panel"
          className = {({isActive})=> isActive ? "activado" : "" }>
              Panel de control
          </NavLink>
        </li>
      </ul>
    </nav>

    
    <hr/>
    <section>
      <Routes>
          {/* Cargar componentes */}
          {/*  Aqui se carga el componente que coincide con el path */}
          <Route path='/' element={<Inicio/>}></Route>
          <Route path='/inicio' element={<Inicio/>}></Route>
          <Route path='/contacto' element={<Contacto/>}></Route>
          <Route path='/articulos' element={<Articulos/>}></Route>
          <Route path='/persona/:nombre/:apellido' element={<Persona/>}></Route>
          <Route path='/redirigir'element={<Navigate to="/persona/nombre/apellido"/>}></Route>
          <Route path="/panel/*" element={<PanelControl/>}>
            <Route path="inicio" element={<InicioPanel/>}></Route>
            <Route path="crear-articulos" element={<Crear/>}></Route>
            <Route path="gestion-usuarios" element={<Gestion/>}></Route>
            <Route path="acerca-de" element={<Acerca/>}></Route>
          </Route>
          {/* el asterisco indica cualquier ruta que no esté definida */}
          <Route path='*' element={(
                                <>
                                <h1>console.error(404);</h1>
                                <strong>Esta pagina no existe</strong>
                                <br />
                                <Link to="/inicio">Volver al inicio</Link>
                                </>
                                )}>
          </Route>
          
      </Routes>
    </section>
    <hr />
      <footer>
        Este es el pie de página
      </footer>
    </BrowserRouter>
    </div>
  )
}
































// import React from 'react'
// // Para crear rutas, para acceder a los enlaces(link) 
// // para configurar todas las rutas y lo importamos a la librería que nos permite hacer eso react-router-dom
// import { Routes, Route, Link, BrowserRouter } from 'react-router-dom'
// import { Inicio } from '../components/Inicio'
// import { Contacto } from '../components/Contacto'
// import { Articulos } from '../components/Articulos'

// export const RouterPrincipal = () => {
//   return (
//     <>
//     {/* // configuració de las rutas */}
//     <browserRouter>
//     {/* Podemos imprimir un componente dentro de element */}
//       <Routes>
//         <Route path='/' element={<Inicio/>}></Route>
//         <Route path='/inicio' element={<Inicio/>}></Route>
//         <Route path='/contacto' element={<Contacto/>}></Route>
//         <Route path='/articulos' element={<Articulos/>}></Route>
//       </Routes>
//       </browserRouter>
//       </>
    
//   )
// }
