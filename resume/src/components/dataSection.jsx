import './components.css';
import { debug } from '../pages/home';
import { useState } from 'react';

const DBG_PROPS = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
}

let arrDown =
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
        <path d="M480-360 280-560h400L480-360Z" />
    </svg>;

let arrUp =
    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#000000">
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
            <div className={`tStart ${!isPDF ? 'dataWrapper' : ''}`}>
                <div className='flex'>
                    {<h3 className='darkBlue'>{title}</h3>}
                    {(extentedMenu && !isPDF) &&
                        <a
                            className='moreDetails darkBlue'
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
