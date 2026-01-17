import './components.css';
import { debug } from '../pages/home';
import { useState, useRef, useEffect } from 'react';
import {motion, useInView} from 'framer-motion';

const DBG_PROPS = {
    color: 'red',
    fontWeight: 'bold',
    fontSize: 16
}

let arrDown =
    <svg xmlns="http://www.w3.org/2000/svg" height="30px" viewBox="0 -960 960 960" width="30px" fill="currentColor">
        <path d="M480-360 280-560h400L480-360Z" />
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
    const [, setUpdate] = useState(false);
    const ref = useRef(null);
    const isInView = useInView(ref);

    useEffect(() => {
        setUpdate(p => !p);
    }, [isPDF]);

    return (
        <div key={title} className="dataContainer">
            <div className={`text-start ${!isPDF ? 'dataWrapper' : ''}`}>
                <div onClick={extentedMenu && !isPDF ? () => { setActive(p => !p); callBack(p => !p) } : undefined} className='flex items-start gap-3 justify-between cursor-pointer'>
                    {<h3 className='mx-2 mb-2 flex items-center gap-1'>{title}
                    {/* {extentedMenu && !isPDF &&
                    <div
                        className={`moreDetails  ${isActive ? 'rotate-180' : ''}`}
                        title={isActive ? 'Less skills' : 'More skills'}>
                        {arrDown}
                    </div>} */}
                    </h3>}
                    {(extentedMenu && !isPDF) &&
                        <div className='btn btn-sm  text-xs flex items-center rounded-md select-none text-center'>
                            {isActive ? 'See less' : 'See more'}
                            <div
                                className={`moreDetails relative -top-0.5 ${isActive ? 'rotate-180' : ''}`}
                                title={isActive ? 'Less skills' : 'More skills'}>
                                {arrDown}
                            </div>
                        </div>
                        }
                </div>
                {isPDF ? childrens :<motion.div
                    ref={ref}
                    initial={{
                        opacity: 0,
                    }}
                    animate={{
                        opacity: isInView ? 1 : 0,
                    }}
                    viewport={{ once: false, margin: '0px 0px -100px 0px' }}
                    transition={{ duration: 1 }}
                    className='overflow-x-hidden* overflow-y-visible'
                >
                    {childrens}
                </motion.div>}
            </div>
        </div>
    )
}

export default DataSection;
