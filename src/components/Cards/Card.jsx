import React from 'react';
import './Card.scss';

function Card(){
    return(
        <div className="Card">
            <img src='...' alt='....' />
            <div>
                <h5>Card title</h5>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque itaque quis placeat sequi pariatur beatae expedita, odio quidem repellat dolores cumque quos dicta modi ad fugiat consequatur numquam, asperiores ex.
                    Molestias repellat, mollitia ipsa itaque impedit voluptatum labore. Alias id neque explicabo vel tenetur ad ducimus facilis? Sint, odit nesciunt ducimus in nostrum, veritatis, recusandae maxime maiores libero quaerat doloremque!
                </p>
                <a href="#" >
                    Go somewhere
                </a>
            </div>
        </div>
    )
}
export default Card;