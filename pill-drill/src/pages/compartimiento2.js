import React from 'react'
import CenteredContainer from '../components/CenteredContainer';
import style from '../styles/compartimiento1.module.css';
import Image from 'next/image'
import Link from 'next/link';
const compartimiento2 = () => {
  return (
    <div>
      <div  className={style.img}>
      <Image width={400} height={750} src="/Image/compartimiento2.png" alt="Imagen comp1" /> 
      </div>
      <CenteredContainer> 
      <form className="form-container">
      <div className={style.label}>
      <div className="form-group">
        <label htmlFor="name">Nombre de la pastilla: </label>
        <input type="text" id="NOMBRE" name="name" />
      </div> <br/>
      <div className="form-group">
        <label htmlFor="Hoarario">Horario en el que se toma:</label>
        <input type="horario" id="horario" name="hoararios" />
      </div> <br/>
      <div className="form-group">
        <label htmlFor="cuanto">Por cuantos dias se toma?</label>
        <input type="dias" id="dias" name="dias" />
        <label htmlFor="dias">Todos los dias?</label>
        <input type="checkbox" value="yes" /> SI
      </div><br/>
      <div className="form-group">
        <label htmlFor="Alarma">Deseas usar una alarma?</label>
        <input type="checkbox" value="yes" /> SI
        <input type="checkbox" value="yes" /> NO
        
      </div>
      </div>
      <div className={style.guardar}>
        <Link href="/compartimiento">
            <div className={style.labelguardar}>Guardar</div>
        </Link>
        </div>

    </form>
      </CenteredContainer>

    </div>
  )
}

export default compartimiento2
