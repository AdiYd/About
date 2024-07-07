import { useState } from "react";
import { Margin, usePDF } from 'react-to-pdf';
import DataSection from "../components/dataSection";
import '../App.css';
import '../components/components.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
    faGithub, faReact, faPython, faInstagram, faHtml5, faAppStore,
    faCss3, faJs, faGooglePay, faNodeJs, faBootstrap, faNpm, faWhatsapp,
    faGoogle,
    faLinkedin
} from '@fortawesome/free-brands-svg-icons';
import {
    faBrain, faWallet, faDatabase,
    faEnvelope, faFilePdf, faRightLeft,
    faLock, faServer, faCode,
    faUser,
    faLocationDot,
    faEarthAmerica
} from '@fortawesome/free-solid-svg-icons';
import selfie from '../img/AdiY.png';
import tau from '../img/TAU_university_logo_ENG.png';
import tau2 from '../img/TAU_Logo.png';
import udemyLogo from '../img/udemyLogo.svg';
import sedg from '../img/sedg.svg';
import coursera from '../img/coursera.svg';
import openai from '../img/openai.svg';
import mathMentor from '../img/MathMentor.png';


export default function Home({ ...props }) {
    const [update, setUpdate] = useState(false);
    const [reactSpin, setReactSpin] = useState(true);
    const [pdfMode, setPdfMode] = useState(false);
    const [skillMode, setSkillMode] = useState(false);
    const { toPDF, targetRef } = usePDF({ filename: 'AdiYehuda-CVS.pdf', page: { margin: 8 } })
    var pdfContainer, skillSet;
    const skillsDict = {
        CSS: faCss3,
        faPython,
        faGithub,
        HTML: faHtml5,
        faInstagram,
        JS: faJs,
        faReact,
        faGooglePay,
        faBootstrap,
        faNodeJs,
        Google: faGoogle,
        faNpm,
        faLock,
        faServer,
        faAppStore,
        faCode,
        Payment: faWallet,
        faDatabase,
        AI: faBrain,
        Auth: faUser,
        'REST API': faRightLeft,
        'Open AI': openai
    }

    const skillsColorsDict = {
        CSS: '#1572B6',
        faPython: '#3776AB',
        faGithub: 'black',
        HTML: '#E34F26',
        faInstagram: '#dd2a7b',
        JS: '#F7DF1E',
        faReact: '#61dbfb',
        faGooglePay: 'red',
        faBootstrap: '#7952b3',
        faNodeJs: 'rgb(153, 204, 125)',
        Google: '#4285F4',
        faNpm: 'rgb(203, 0, 0)',
        Payment: '#8B4513',
        faAppStore: '#0D96F6',
        faDatabase: '#008080',
        AI: '#FFB6C1',
        faUser: ''
    }

    const generalList = {
        'Title #1': 'Some text',
        'Title #2': 'Some text',
        'Title #3': 'Some text',
        'Title #4': 'Some text',
    }

    function downloadPdf() {
        debug('Generating pdf file...');
        setSkillMode(0);
        setPdfMode(true);
    }


    let list = ({ key, dictList = generalList, style = {}, arrow = true } = {}) =>
        <ul
            style={style}
            key={key ? key : Math.random() * 1000}>
            {Object.keys(dictList).map((item, index) => (
                <li key={index + item + key}
                    id={`${arrow ? 'arrow' : ''}`}
                    className='list' >
                    <span className="listContainer grid columns">
                        <div className="listHeaderDiv">
                            {dictList[item].head}
                            {/* <p className="listHeader"></p> */}
                        </div>
                        <div className="listTextDiv">
                            {dictList[item].body}
                            {/* <p className="listText"> </p> */}
                        </div>
                    </span>
                </li>
            ))
            }
        </ul>

    if (skillMode) {
        skillSet = <>
            <fieldset
                style={{ border: pdfMode ? 'none' : '' }}
                className="skillzFieldSet">
                {!pdfMode && <legend className="legend">
                    Front-end
                </legend>}
                {['JS', 'HTML', 'faReact', 'CSS', 'faBootstrap'].map((item, indx) => (
                    skillsDict[item] && <div key={indx + item}
                        title={item.startsWith('fa') ? item.slice(2) : item}
                        // id={`${item === 'faReact' ? 'reactBackground' : ''}`}
                        // onMouseLeave={item === 'faReact' ? () => { setReactSpin(p => !p) } : () => { }}
                        className='skill-box boxShadow tCenter'>
                        <FontAwesomeIcon
                            id={item}
                            color={skillsColorsDict[item]}
                            className={`fontAwsome ${!pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''}`}
                            size="lg"
                            icon={skillsDict[item]} />
                        <span className="skillName">{item.startsWith('fa') ? item.slice(2) : item}</span>
                    </div>))}
            </fieldset>
            <fieldset
                style={{ border: pdfMode ? 'none' : '' }}
                className="skillzFieldSet">
                {!pdfMode && <legend className="legend">
                    Back-end
                </legend>}
                {['faDatabase', 'faServer', 'faNodeJs', 'faNpm', 'faCode', 'faPython', 'REST API', 'AI'].map((item, indx) => (
                    <div key={indx + item}
                        title={item.startsWith('fa') ? item.slice(2) : item}
                        className="skill-box boxShadow tCenter">
                        <FontAwesomeIcon
                            id={item}
                            className={`fontAwsome`}
                            size="lg"
                            color={skillsColorsDict[item]}
                            icon={skillsDict[item]} />
                        <span
                            id={item === 'REST API' ? 'restAPI' : ''}
                            className="skillName">{item.startsWith('fa') ? item.slice(2) : item}</span>
                    </div>))}
            </fieldset>
            <fieldset
                style={{ border: pdfMode ? 'none' : '' }}
                className="skillzFieldSet">
                {!pdfMode && <legend className="legend">
                    APIs
                </legend>}
                {['faInstagram', 'Payment', 'faAppStore', 'Auth', 'Open AI',
                    'faGithub', 'Google'].map((item, indx) => (
                        item !== 'Open AI' ? <div key={indx + item}
                            title={item.startsWith('fa') ? item.slice(2) : item}
                            className="skill-box boxShadow tCenter">
                            <FontAwesomeIcon
                                id={item}
                                className={`fontAwsome`}
                                color={skillsColorsDict[item]}
                                size="lg"
                                icon={skillsDict[item]} />
                            <span className="skillName">{item.startsWith('fa') ? item.slice(2) : item}</span>
                        </div> :
                            <div key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className="skill-box boxShadow tCenter">
                                <img
                                    className={`openAI`}
                                    style={{ height: '1.5em' }}
                                    src={skillsDict[item]}
                                />
                                <span className="skillName">{item.startsWith('fa') ? item.slice(2) : item}</span>
                            </div>
                    ))}
            </fieldset>
        </>
    }
    else {
        skillSet = <>
            {['faDatabase', 'faServer', 'REST API', 'faReact', 'faPython', 'AI', 'faNodeJs'].map((item, indx) => (
                skillsDict[item] && <div key={indx + item}
                    title={item.startsWith('fa') ? item.slice(2) : item}
                    // id={`${item === 'faReact' ? 'reactSkill' : ''}`}
                    // onMouseLeave={item === 'faReact' ? () => { setReactSpin(p => !p) } : () => { }}
                    className={`skill-box tCenter ${pdfMode ? '' : 'boxShadow'}`}>
                    <FontAwesomeIcon
                        id={item}
                        color={skillsColorsDict[item]}
                        className={`fontAwsome ${!pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''}`}
                        size="lg"
                        icon={skillsDict[item]} />
                    <span
                        id={item === 'REST API' ? 'restAPI' : ''}
                        className="skillName">{item.startsWith('fa') ? item.slice(2) : item}</span>
                </div>))}
        </>
    }

    let skills = skillSet && <div key={'Skillz'} className="skills-container">
        {skillSet}
    </div>

    let edDict = {
        frs: {
            head: <p>The Ultimate React Course 2024 for Web Applications |
                <i className="subTitle">Udemy, Coursera </i></p>,
            body: <p>Advanced Topics of web application development with <i className="detailH">React</i>, <i className="detailH">Next.js</i> and other front end tools</p>,
        },
        sec: {
            head: <p>The Complete 2023 Web Development Bootcamp |
                <i className="subTitle">Udemy, Dr. Angela Yu</i></p>,
            body: <p>Fundamental and advanced topics of web development - <i className="detailH">CSS</i>, <i className="detailH">HTML</i>, <i className="detailH">JS</i>,<i className="detailH">Express server</i>,
                <i className="detailH">Node.js</i>, Jquery and DOM manipulation, <i className="detailH">SQL</i> and <i className="detailH">NoSQL</i></p>,
        },
        thr: {
            head: <p>Python Developer - from zero to mastery |<i className="subTitle">Udemy, Andrei Neagoie</i></p>,
            body: <p>Advanced Python - <i className="detailH">Servers</i>, <i className="detailH">RestAPI</i> ,<i className="detailH">AI models</i>, <i className="detailH">Numpy</i>, <i className="detailH">TensorFlow</i> and <i className="detailH">Pandas</i> for machine learning, <i className="detailH">files manipulation</i>,
                <i className="detailH">Automations</i>, <i className="detailH">Selenium web driver</i>, <i className="detailH">tkinter</i>, <i className="detailH">Plotly</i> and more.</p>,
        },
        fur: {
            head: <p>B.sc Engineering |
                <i className="subTitle">Tel Aviv University, 2014-2019</i> </p>,
            body:
                < section >
                    Electrical Engineer and Computers Majors:
                    <ul className="majorsList">
                        <li><i className="majors">Computers & Programming-</i> Advanced python programming, C++, Networks, Encryption, Operating Systems and Algorithms </li>
                        <li><i className="majors">Electromagnetic radiation -</i> EM spactrum, waves, Maxwell's equations, EM waves propagation and interference </li>
                        <li><i className="majors">Control systems -</i> Control systems, feedback Loop, logic blocks </li>

                    </ul>
                </section >
        }
    }

    let education = <div key={'Education'} className="eduContainer">
        {!pdfMode && <span className="educationImg">
            <a href="https://english.tau.ac.il/" className="boxShadow">
                <img src={tau}
                    id={pdfMode ? 'pdfImg' : ''}
                    title="Tel-Aviv university"
                    alt='Tel-Aviv university Logo' />
            </a>
            <a href='https://www.udemy.com/' className="boxShadow">
                <img src={udemyLogo}
                    id={pdfMode ? 'pdfImg' : ''}
                    title="Udemy"
                    alt='Udemy Logo' />
            </a>
            <a href='https://www.coursera.com/' className="boxShadow">
                <img src={coursera}
                    id={pdfMode ? 'pdfImg' : ''}
                    title="Coursera"
                    alt='Coursera Logo' />
            </a>
        </span>}
        {list({ key: 'EducationList', style: { marginTop: '0px' }, dictList: edDict })}
    </div>

    let experienceDict = {
        frs: {
            head: <p>Full stack Web Application developer |<i className="subTitle">Self employed and freelance</i></p>,
            body: <p>Developing scalable, visual and functional web pages, stores, platforms and applications.
                <br />Including custome UX/UI and functionality, combined with strong backend code, server, APIs and automation tools.
                <br />Deploying applications according to your exact needs, with flexible frontend and backend design that will adjust to your traffic and buisness requirements.
                <br />Using various advanced tools, assisted with AI tips for UX/UI and content suggestions, to provide a professional, modern, vibrant and playful applications.
                <br />
                <i className="detailH">User authentication</i>,
                <i className="detailH">forms</i>,
                <i className="detailH">Google cloud</i>,
                <i className="detailH">NPM & PIP packages</i>,
                <i className="detailH">AI tools</i>,
                <i className="detailH">Image and file processing</i>,
                <i className="detailH">RESTfull APIs</i>,
                <i className="detailH">Request</i>,
                <i className="detailH">Queries</i>,
                <i className="detailH">DB</i> </p>,
        },
        sec: {
            head: <p>Senior HW engineer, product development | <i className="subTitle"> Solaredge R&D, 2019-2023  </i></p>,
            body: <p>Digital and Analog board design, product R&D from PRD to MVP and production. Including <i className="detailH"> HW-SW architecture and interface</i>.
                <br />Designing of PS, analog and logic circuits, digital HW: DSP, RAM, wierless, SPI and other functional micro-chips.
                <br />Developed a complete product that can be added to a solar inverter (as external feature) and provide energy managment capabilities, energy storage and back up on demand, power metering, consumption data, electrical islanding and more.
                <br />During the development proccess as a hands-on senior engineer, I managed most of the multidiciplenary aspects of product development
                Including:  Mechanics, Testing and automations (Python and C#), SW / Embedded, Integration between products, ATE and QnR support.
                <br />Also provided full support for manufacturing batches and multipule visits to the production line for ramp up
            </p>,
        },
        thr: {
            head: <p>Teaching Assitant | <i className="subTitle"> Tel Aviv University, 2019  </i></p>,
            body: <p>
                Teaching Assistant in the Engineering Faculty at Tel Aviv University.
                Frontal lectures to a first-year students focusing on foundational courses in Mathematics and Physics.
                <br />Also lectured several official courses for engineering students under the TAU Student Association.
            </p>,
        },
        fur: {
            head: <p>Math and Physics Tutor | <i className="subTitle"> Frontal lectures, 2016-2019 </i> </p>,
            body: <p>Leading groups of high-school students to their final exams</p>
        }
    }

    let experience = <div key={'Experience'} className="expContainer">
        {!pdfMode && <span className="educationImg">
            <a href='https://investors.solaredge.com/' className="boxShadow">
                <img src={sedg}
                    id={pdfMode ? 'pdfImg' : ''}
                    title="SolarEdge"
                    alt='SolarEdge Logo' />
            </a>
            <a href="https://english.tau.ac.il/" className="boxShadow">
                <img src={tau2}
                    id={pdfMode ? 'pdfImg' : ''}
                    className="tauLogo"
                    title="Tel-Aviv university"
                    alt='Tel-Aviv university Logo' />

            </a>
            <a href='#' className="boxShadow">
                <img src={mathMentor}
                    id={pdfMode ? 'pdfImg' : ''}
                    className="mathMentorLogo"
                    title="Math Mentor"
                    alt='Math Mentor Logo' />
            </a>
        </span>}
        {list({ key: 'ExperienceList', style: { marginTop: '0px' }, dictList: experienceDict })}
    </div>

    let aboutMe =
        <div key={'About me'} className="aboutMe" >
            {!pdfMode && <div id='profileImg' className="boxShadow">
                <img src={selfie} alt="Adi Yehuda picture" title="Adi Yehuda picture" />
                {/* <div style={{ padding: '2em', background: 'transparent' }}>
                    <FontAwesomeIcon icon={faUser} size="2xl" />
                </div> */}
            </div>}
            <div className="flex personalPropsContainer" style={{ alignItems: 'center' }} >
                <div className="flex center personalProps">
                    <FontAwesomeIcon icon={faUser} size='sm' />
                    <p>35 y/o, Male</p>
                </div>
                <p style={{ margin: '0em 0.8em', fontWeight: 'bold' }}>|</p>
                <div className="flex center personalProps">
                    <FontAwesomeIcon icon={faLocationDot} size='sm' />
                    <p>Tel-Aviv, Remote</p>
                </div>
                <p style={{ margin: '0em 0.8em', fontWeight: 'bold' }}>|</p>
                <div className="flex center personalProps">
                    <FontAwesomeIcon icon={faEarthAmerica} size='sm' />
                    <p>EN - excellent , HE - native</p>
                </div>
            </div>
            <p key='About me' >
                Since I started my journy at Tel Aviv University as an highly motivated, self-learner student and developer, my passion was to develop new and innovative ideas.
                Always looking to increase my knowladge and proficiency in SW and product development.
                <br />
                Currently as <i className="detailH">self-employed and freelance</i> I wish to provide high quality <i className="detailH">Web and SW services.</i>
                <br /> My goal is to <i className="detailH">initiate, cooperate or provide services</i> for an innovative, digital and vibrant ideas, <i className="detailH">startups</i> or businesses that require web pages, platforms or applications. as well as SW solutions for businesses, retails and private customers.
                <br /> Including automations, image and file proccessing, users managment, AI integration and data base.
                <br /> My agenda is to provide a great UX and a costume, scalable and flexible design that will adjust to your buisness requirements now and in the future.
            </p>

        </div>

    let contactMeDict = {
        Email: {
            icon: faEnvelope,
            color: '#D14836',
            data: 'YdDevelops@gmail.com',
            link: 'mailto: YdDevelops@gmail.com'
        },
        Linkedin: {
            icon: faLinkedin,
            color: '#0077B5',
            data: 'Adi Yehuda',
            link: 'https://www.linkedin.com/in/adi-yehuda-27969612b/'
        },
        Whatsapp: {
            icon: faWhatsapp,
            color: '#25D366',
            data: '+972-527242775',
            link: 'https://wa.me/972527242775'
        }
    }

    let ContactMe = <div key='Contact me' className="contactMe">
        <ul>
            {Object.keys(contactMeDict).map((item, indx) => (
                <li key={item + indx} className='list contactList' title={item} >
                    <a href={contactMeDict[item].link}
                        className="grid columns contactMeLink">
                        <FontAwesomeIcon
                            color={contactMeDict[item].color}
                            icon={contactMeDict[item].icon} />
                        &nbsp; &nbsp; &nbsp;
                        {contactMeDict[item].data}

                    </a>
                </li>))}
        </ul>
    </div>

    let floatingContact = <div className="floatingContact">
        <a
            href={contactMeDict.Email.link}
            className="floatingLinks boxShadow" title="Mail me">
            <FontAwesomeIcon
                size="xl"
                color={contactMeDict.Email.color}
                icon={contactMeDict.Email.icon} />
        </a>
        <a
            href={contactMeDict.Linkedin.link}
            className="floatingLinks boxShadow" title="Linkedin">
            <FontAwesomeIcon
                size="xl"
                color={contactMeDict.Linkedin.color}
                icon={contactMeDict.Linkedin.icon} />
        </a>
        <a
            href={contactMeDict.Whatsapp.link}
            className="floatingLinks boxShadow shakeHover" title="Whatsapp me">
            <FontAwesomeIcon
                size="xl"
                color={contactMeDict.Whatsapp.color}
                icon={contactMeDict.Whatsapp.icon} />
        </a>
    </div>

    let blockDict = {
        'About Me': [aboutMe],
        'Education': [education],
        'Professional Experience': [experience],
        'Skills': [skills],
        'Contact Me': [ContactMe]
    }

    if (pdfMode) {
        setTimeout(() => {
            toPDF();
            setTimeout(() => {
                setPdfMode(false);
            }, 10)
        }, 10)
    }

    return (
        <div
            ref={targetRef}
            className={`main ${pdfMode ? 'pdfContainer' : ''}`}>
            <div
                className='flex center'
                style={{ alignItems: 'center' }}>
                <h1> Adi Yehuda - Resume</h1>
                {!pdfMode && <span
                    title="Download pdf"
                    onClick={() => downloadPdf()}
                    className="pdf">
                    <FontAwesomeIcon icon={faFilePdf} />
                </span>}
            </div>
            {Object.keys(blockDict).map((item, indx) => (
                <div key={indx + item} >
                    <DataSection
                        key={item + indx}
                        extentedMenu={item === 'Skills'}
                        callBack={setSkillMode}
                        isPDF={pdfMode}
                        childrens={blockDict[item]}
                        title={item} />
                </div>
            ))}
            {!pdfMode && floatingContact}
        </div>
    )
}


export const debug = (...args) => {
    console.log(...args);

}