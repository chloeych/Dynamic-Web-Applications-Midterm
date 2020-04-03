import React from 'react'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSeedling, faSun} from '@fortawesome/free-solid-svg-icons';

const Icon = ({dietItems}) => {
        switch (dietItems) {
            case 'Peanut-Free': 
                return <FontAwesomeIcon icon={faSun}/>
            case 'Tree-Nut-Free': 
                return <FontAwesomeIcon icon={faSun}/>
            case 'Sugar-Conscious': 
                return <FontAwesomeIcon icon={faSun}/>
            case 'Vegetarian': 
                return <FontAwesomeIcon icon={faSun}/>
            case 'Peanut-Free':
                return <FontAwesomeIcon icon={faSun}/>
            default: 
                return <FontAwesomeIcon icon={faSeedling}/>
        }
    };

function Restrictions({ dietItems }){
    return (
        <div className = "restrictions_image">
            <Icon dietItems={dietItems}/>
        </div>
    );
}


export default Restrictions;