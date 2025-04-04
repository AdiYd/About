import './components.css';
import { debug } from '../pages/home';
import { useState } from 'react';

const DBG_PROPS = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
}

let arrDown =
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="M480-360 280-560h400L480-360Z" />
    </svg>;

let arrUp =
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="currentColor">
        <path d="m280-400 200-200 200 200H280Z" />
    </svg>;

function DataSection({
    title = '',
    childrens,
    serial,
    isPDF = false,
    extentedMenu = false,
    callBack = (...args) => { debug('callBack with params: ', args, DBG_PROPS) },
    ...props }) {
    const [isActive, setActive] = useState(false);

    return (
        <div key={title} className="dataContainer">
            <div className={`text-start ${!isPDF ? 'dataWrapper' : ''}`}>
                <div className='flex'>
                    {<h3 className='mx-2 mb-2'>{title}</h3>}
                    {(extentedMenu && !isPDF) &&
                        <a
                            // href="#"
                            className='moreDetails'
                            title={isActive ? 'Less skills' : 'More skills'}
                            onClick={() => { setActive(p => !p); callBack(p => !p) }}>
                            {isActive ? arrUp : arrDown}
                        </a>}
                </div>
                {childrens}
            </div>
        </div>
    )
}

export default DataSection;
