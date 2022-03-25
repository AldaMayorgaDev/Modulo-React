import React from 'react';

/* Para importar un modulo de css es: 
    import styles from './nombre.module.css';

*/

import styles from './index.module.css';


function ModuleStyles() {
    return (
        <div >
            <p className={styles.className1}>Parrafo que recibe estilos desde un ModuleStyle</p>
            <p className={styles.otherClassName}> Este parrafo toma estilos de una clase dentro de un ModuleStyle</p>
        </div>
    )
}

export default ModuleStyles;