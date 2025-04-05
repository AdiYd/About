import { useState } from "react";
import { usePDF } from 'react-to-pdf';
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
    faDice,
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
import { AnimatePresence, motion } from "framer-motion";
import { icon } from "@fortawesome/fontawesome-svg-core";

/**
 * A refined "About Me" / Resume page for showcasing skills, education, and work experience.
 * 
 * Updated content focuses on clarity and precision, describing a background in hardware engineering,
 * extensive software expertise, and strong passion for developing innovative solutions.
 */

export default function Home({showPdf=false, ...props }) {
    const [reactSpin] = useState(true);
    const [pdfMode, setPdfMode] = useState(false);
    const [skillMode, setSkillMode] = useState(false);
    const [isRolling, setIsRolling] = useState(false);
    const [themeName, setThemeName] = useState(null);

    const changeRandomTheme = async () => {
        setIsRolling(true);
        await new Promise(resolve => setTimeout(resolve, 1000));
        const themes = [
            'light',
            'dark',
            'cupcake',
            'corporate',
            'synthwave',
            'retro',
            'cyberpunk',
            'valentine',
            'halloween',
            'garden',
            'forest',
            'aqua',
            'lofi',
            'pastel',
            'fantasy',
            'wireframe',
            'black',
            'luxury',
            'dracula',
            'cmyk',
            'autumn',
            'business',
            'acid',
            'lemonade',
            'night',
            'coffee',
            'winter',
            'caramellatte',
            'silk'
        ];
        const randomTheme = themes[Math.floor(Math.random() * themes.length)];
        setThemeName(randomTheme);
        document.documentElement.setAttribute('data-theme', randomTheme);
        setIsRolling(false);
    }


    // PDF creation references
    const { toPDF, targetRef } = usePDF({
        filename: 'AdiYehuda-CVS.pdf',
        page: { margin: 8 }
    });

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
    };

    const skillsColorsDict = {
        CSS: 'currentColor',
        faPython: 'currentColor',
        faGithub: 'currentColor',
        HTML: 'currentColor',
        faInstagram: 'currentColor',
        JS: 'currentColor',
        faReact: 'currentColor',
        faGooglePay: 'currentColor',
        faBootstrap: 'currentColor',
        faNodeJs: 'currentColor',
        Google: 'currentColor',
        faNpm: 'currentColor',
        Payment: 'currentColor',
        faAppStore: 'currentColor',
        faDatabase: 'currentColor',
        AI: 'currentColor',
        faUser: 'currentColor'
    };

    /**
     * Creates a styled list component to display various data in bullet points.
     */
    const list = ({ key, dictList = {}, style = {}, arrow = true } = {}) => (
        <ul key={key ? key : Math.random() * 1000} style={style} className="menu* card max-w-full">
            {Object.keys(dictList).map((item, index) => (
                <li
                    key={index + item + key}
                    id={`${arrow ? 'arrow' : ''}`}
                    className='list'
                >
                    <span className="listContainer* flex flex-col gap-0">
                        <div className="listHeaderDiv">
                            {dictList[item].head}
                        </div>
                        <div className="listTextDiv self-start">
                            {dictList[item].body}
                        </div>
                    </span>
                </li>
            ))}
        </ul>
    );

    function downloadPdf() {
        setSkillMode(false);
        setPdfMode(true);
    }

    // Determine the skill sets to display (expanded vs. condensed)
    let skillSet;
    if (skillMode) {
        skillSet = (
            <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 , ease: 'circInOut'}}
             key={1} className='card*'>
                <fieldset
                    style={{ border: pdfMode ? 'none' : '' }}
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge badge-lg">Frontend</legend>}
                    {['JS', 'HTML', 'faReact', 'CSS', 'faBootstrap'].map((item, indx) => (
                        skillsDict[item] && (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className='skill-box text-primary-focus'
                            >
                                <FontAwesomeIcon
                                    id={item}
                                    className={`fontAwsome  ${
                                        !pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''
                                    }`}
                                    size="lg"
                                    icon={skillsDict[item]}
                                />
                                <span className="skillName">
                                    {item.startsWith('fa') ? item.slice(2) : item}
                                </span>
                            </div>
                        )
                    ))}
                </fieldset>

                <fieldset
                    style={{ border: pdfMode ? 'none' : '' }}
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge badge-lg">Backend</legend>}
                    {['faDatabase', 'faServer', 'faNodeJs', 'faNpm', 'faCode', 'faPython', 'REST API', 'AI'].map(
                        (item, indx) => (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className="skill-box text-secondary-focus"
                            >
                                <FontAwesomeIcon
                                    id={item}
                                    className="fontAwsome"
                                    size="lg"
                                    icon={skillsDict[item]}
                                />
                                <span
                                    id={item === 'REST API' ? 'restAPI' : ''}
                                    className="skillName"
                                >
                                    {item.startsWith('fa') ? item.slice(2) : item}
                                </span>
                            </div>
                        )
                    )}
                </fieldset>

                <fieldset
                    style={{ border: pdfMode ? 'none' : '' }}
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge  badge-lg">APIs</legend>}
                    {['faInstagram', 'Payment', 'faAppStore', 'Auth', 'Open AI', 'faGithub', 'Google'].map(
                        (item, indx) =>
                            item !== 'Open AI' ? (
                                <div
                                    key={indx + item}
                                    title={item.startsWith('fa') ? item.slice(2) : item}
                                    className="skill-box text-accent-focus"
                                >
                                    <FontAwesomeIcon
                                        id={item}
                                        className="fontAwsome"
                                        size="lg"
                                        icon={skillsDict[item]}
                                    />
                                    <span className="skillName text-accent-focus">
                                        {item.startsWith('fa') ? item.slice(2) : item}
                                    </span>
                                </div>
                            ) : (
                                <div
                                    key={indx + item}
                                    title={item.startsWith('fa') ? item.slice(2) : item}
                                    className="skill-box"
                                >
                                    <img
                                        className="openAI"
                                        style={{ height: '1.5em' }}
                                        src={skillsDict[item]}
                                        alt="OpenAI logo"
                                    />
                                    <span className="skillName">
                                        {item.startsWith('fa') ? item.slice(2) : item}
                                    </span>
                                </div>
                            )
                    )}
                </fieldset>
            </motion.div>
        );
    } else {
        skillSet = (
            <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 , ease: 'circInOut'}}
            key={2} className="overflow-hidden card* w-full flex justify-center relative"> {/* Carousel container */}
                <div className="flex justify-between w-full whitespace-nowrap animate-scroll" style={{ animationDuration: `${40 * 1}s` }}> {/* Adjust duration */}
                {['faDatabase', 'faServer', 'REST API', 'faReact', 'faPython', 'AI', 'faNodeJs', 'JS', 'HTML', 'faReact', 'CSS', 'faBootstrap', 'faInstagram', 'Payment', 'faAppStore', 'Auth', 'Open AI', 'faGithub', 'Google'].map(
                    (item, indx) =>
                        skillsDict[item] && (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className={`skill-box ${pdfMode ? '' : ''}`}
                            >
                               { item !== 'Open AI' ? <FontAwesomeIcon
                                    id={item}
                                    className={`fontAwsome  ${
                                        !pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''
                                    }`}
                                    size="lg"
                                    icon={skillsDict[item]}
                                /> :
                                 <img
                                        className="openAI"
                                        style={{ height: '1.5em' }}
                                        src={skillsDict[item]}
                                        alt="OpenAI logo"
                                    />
                                }
                                <span
                                    id={item === 'REST API' ? 'restAPI' : ''}
                                    className="skillName"
                                >
                                    {item.startsWith('fa') ? item.slice(2) : item}
                                </span>
                            </div>
                        )
                )}
                {['faDatabase', 'faServer', 'REST API', 'faReact', 'faPython', 'AI', 'faNodeJs', 'JS', 'HTML', 'faReact', 'CSS', 'faBootstrap', 'faInstagram', 'Payment', 'faAppStore', 'Auth', 'Open AI', 'faGithub', 'Google'].map(
                    (item, indx) =>
                        skillsDict[item] && (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className={`skill-box ${pdfMode ? '' : ''}`}
                            >
                               { item !== 'Open AI' ? <FontAwesomeIcon
                                    id={item}
                                    className={`fontAwsome  ${
                                        !pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''
                                    }`}
                                    size="lg"
                                    icon={skillsDict[item]}
                                /> :
                                 <img
                                        className="openAI"
                                        style={{ height: '1.5em' }}
                                        src={skillsDict[item]}
                                        alt="OpenAI logo"
                                    />
                                }
                                <span
                                    id={item === 'REST API' ? 'restAPI' : ''}
                                    className="skillName"
                                >
                                    {item.startsWith('fa') ? item.slice(2) : item}
                                </span>
                            </div>
                        )
                )}
                </div>
            </motion.div>
          
        );
    }

    // Skills container
    let skills = skillSet && <div key="Skillz" className="skills-container"><AnimatePresence>{skillSet}</AnimatePresence></div>;

    // Education data
    let edDict = {
       
        first: {
            head: (
                <p className="font-medium !text-base-content">
                    AI engineering for developers &nbsp;|
                    <i className="subTitle"> Coursera / Microsoft, 2024-2025 </i>
                </p>
            ),
            body: (
                <p className="">
                    In-depth course on AI engineering, covering advanced topics in AI models, prompt engineering, AI params, optimization, prompt caching and method to improve performance. Focused on practical applications and real-world scenarios.
                    {` `} Hands on experience with various AI tools and platforms, including:
                   <i className="detailH">
                        <code>Open AI</code>,{` `}
                        <code>Claude/Anthropic</code>,{` `}
                        <code>Azure AI</code>,{` `}
                        <code>Gemini</code>,{` `}
                        <code>Co-pilots</code>,{` `}
                        <code>AI Agents</code>.{` `}
                    </i>
                    <br/>
                    In addition, built and deployed multiple projects using various AI tools and platforms, Agents and top AI models.
                </p>
            )
        },
        first2: {
            head: (
                <p className="font-medium !text-base-content">
                    Advanced React & Next.js Development &nbsp;|
                    <i className="subTitle"> Udemy / Coursera, 2024 </i>
                </p>
            ),
            body: (
                <p className="">
                    In-depth web development, with a focus on modern frameworks like&nbsp;
                    <i className="detailH">
                        <code>React</code>
                    </i>
                    &nbsp;and&nbsp;
                    <i className="detailH">
                        <code>Next.js</code>.
                    </i>
                    Strong API and cloud frameworks, server-side rendering, and scallable solutions. {` `}
                    {/* <br /> */}
                    Also covered advanced topics and best practices in web development, including professional UI/UX design, performance optimization, and security measures.
                    <i className="detailH">
                        <code>Tailwind</code>,
                        <code>ShadCN</code>,
                        <code>Ant design</code>,
                        <code>MUI</code>,
                        <code>Bootstrap</code>
                    </i>
                </p>
            )
        },
        first3: {
            head: (
                <p className="font-medium !text-base-content">
                    UI/UX and Web design &nbsp;|
                    <i className="subTitle"> Udemy courses 2024-2025 </i>
                </p>
            ),
            body: (
                <p className="">
                    multiple courses on UI/UX design and web development including various tools and techniques.
                    <i className="detailH">
                        <code>Figma</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        {/* <code>Layout and Grid systems</code>, */}
                        <code>Typhography</code>,
                        <code>Color theory</code>,
                        <code>Design patterns</code>,
                        <code>UI/UX</code>,
                        <code>Responsive design</code>
                    </i>.

                </p>
            )
        },
        second: {
            head: (
                <p className="font-medium !text-base-content">
                    The Complete Web Development Bootcamp &nbsp;|
                    <i className="subTitle"> Udemy, Dr. Angela Yu</i>
                </p>
            ),
            body: (
                <p className="">
                    Comprehensive coverage of &nbsp;
                    <i className="detailH">
                        <code>HTML</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        <code>CSS</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        <code>JavaScript</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        <code>Node.js</code>
                    </i>
                    , databases, and DOM manipulation. Built real-world projects to master
                    front-end and back-end concepts.
                </p>
            )
        },
        third: {
            head: (
                <p className="font-medium !text-base-content">
                    Python Developer: Zero to Mastery &nbsp;|
                    <i className="subTitle"> Udemy, Andrei Neagoie </i>
                </p>
            ),
            body: (
                <p className="">
                    Advanced Python programming for automation, web scraping, data analysis,
                    and basic machine learning. Gained solid understanding of libraries like
                    &nbsp;
                    <i className="detailH">
                        <code>NumPy</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        <code>Pandas</code>
                    </i>
                    ,&nbsp;
                    <i className="detailH">
                        <code>Selenium</code>
                    </i>
                    , and more.
                </p>
            )
        },
        fourth: {
            head: (
                <p className="font-medium !text-base-content">
                    B.Sc. Electrical Engineering &nbsp;|
                    <i className="subTitle"> Tel Aviv University, 2014-2019 </i>
                </p>
            ),
            body: (
                <section className="max-w-[95%]">
                    Specialized in computers, control systems, and electromagnetics:
                    <ul className="majorsList list-none border-l-2 border-accent/40 pl-4">
                        <li className="my-2">
                            <i className="majors">Computers & Programming –</i> In-depth
                            Python, C++, OS, encryption, and network protocols.
                        </li>
                        <li className="my-2">
                            <i className="majors">Electromagnetic Radiation –</i> Maxwell's
                            equations, wave propagation, and interference.
                        </li>
                        <li className="my-2">
                            <i className="majors">Control Systems –</i> Feedback loops,
                            logic blocks, and control theory fundamentals.
                        </li>
                    </ul>
                </section>
            )
        }
    };

    let education = (
        <div key="Education" className="eduContainer">
            {!pdfMode && (
                <span className="educationImg max-sm:hidden">
                    <a
                        href="https://english.tau.ac.il/"
                        className="card"
                        title="Tel Aviv University"
                    >
                        <img
                            src={tau}
                            id={pdfMode ? 'pdfImg' : ''}
                            alt="Tel-Aviv university Logo"
                            className="p-2"
                        />
                    </a>
                    <a
                        href="https://www.udemy.com/"
                        className="card"
                        title="Udemy"
                    >
                        <img
                            src={udemyLogo}
                            id={pdfMode ? 'pdfImg' : ''}
                            alt="Udemy Logo"
                            className="p-2"
                        />
                    </a>
                    <a
                        href="https://www.coursera.com/"
                        className="card"
                        title="Coursera"
                    >
                        <img
                            src={coursera}
                            id={pdfMode ? 'pdfImg' : ''}
                            alt="Coursera Logo"
                            className="p-2"
                        />
                    </a>
                </span>
            )}
            {list({ key: 'EducationList', style: { marginTop: '0px' }, dictList: edDict })}
        </div>
    );

    // Professional experience data
    let experienceDict = {
        // first: {
        //     head: (
        //         <p className="font-medium !text-base-content">
        //             Tech lead and co-founder &nbsp;|
        //             <i className="subTitle"> Webly / Taskomatic, 2024-2025 </i>
        //         </p>
        //     ),
        //     body: (
        //         <p className="">
        //             Co-founded Webly, a digital agency specializing in AI powered website engine. 
        //             Developed and maintained multiple SaaS applications, including Taskomatic, a task management tool that integrates with various platforms. 
        //             Focused on delivering high-quality solutions that enhance productivity and streamline processes.
        //         </p>
        //     )
        // },
        first2: {
            head: (
                <p className="font-medium !text-base-content">
                    SW Developer &nbsp;|
                    <i className="subTitle"> Self employed, 2023-2025 </i>
                </p>
            ),
            body: (
                <p className="">
                    Building and maintaining scalable and innovative web applications and SaaS. Delivering both intuitive UIs and robust back-end systems
                    that handle authentication, integrations, and database management. 
                    Incorporating automation and AI-driven insights to expedite development and
                    enhance the overall user experience. Skilled in 
                    <i className="detailH"><code> Cloud</code></i>, 
                    <i className="detailH"><code> AWS</code></i>, 
                    <i className="detailH"><code> Firebase</code></i>, 
                    <i className="detailH"><code> Supabase</code></i>, 
                    <i className="detailH"><code> AI APIs</code></i>,
                    {/* <i className="detailH"><code> RESTful APIs</code></i>,  */}
                    <i className="detailH"><code> Python</code></i>, and other
                    modern cloud services.
                </p>
            )
        },
        second: {
            head: (
                <p className="font-medium !text-base-content">
                    Senior HW Eng & Product lead &nbsp;|
                    <i className="subTitle"> SolarEdge R&D, 2019-2023 </i>
                </p>
            ),
            body: (
                <p className="">
                    Spearheaded design and implementation of complex digital/analog electronics
                    for global solar energy solutions. Oversaw complete product lifecycle,
                    from concept and specifications to mass production. Collaborated closely
                    with firmware, QA, and manufacturing teams. Developed rigorous testing
                    processes (Python/C#) and managed real-time data acquisition systems for
                    performance monitoring. Worked extensively on advanced power electronics,
                    wireless modules, and DSP integration.
                </p>
            )
        },
        third: {
            head: (
                <p className="font-medium !text-base-content">
                    Teaching Assistant &nbsp;|
                    <i className="subTitle"> Tel Aviv University, 2019 </i>
                </p>
            ),
            body: (
                <p className="">
                    Conducted frontal lectures for first-year engineering students in mathematics
                    and physics. Tailored lessons to clarify complex topics, driving higher exam
                    success rates. Coordinated hands-on labs, administered tests, and offered 
                    tutoring sessions for undergraduates across multiple courses.
                </p>
            )
        },
        fourth: {
            head: (
                <p className="font-medium !text-base-content">
                    Math & Physics &nbsp;|
                    <i className="subTitle"> 2016-2019 </i>
                </p>
            ),
            body: (
                <p className="">
                    Provided group tutoring to high-school students preparing for 
                    national exams. Focused on building conceptual understanding, problem-solving 
                    skills, and confidence in technical subjects.
                </p>
            )
        }
    };

    let experience = (
        <div key="Experience" className="expContainer">
            {!pdfMode && (
                <span className="educationImg">
                    <a
                        href="https://investors.solaredge.com/"
                        className="card"
                        title="SolarEdge"
                    >
                        <img
                            src={sedg}
                            id={pdfMode ? 'pdfImg' : ''}
                            alt="SolarEdge Logo"
                            className="p-2"
                        />
                    </a>
                    <a
                        href="https://english.tau.ac.il/"
                        className="card"
                        title="Tel-Aviv University"
                    >
                        <img
                            src={tau2}
                            id={pdfMode ? 'pdfImg' : ''}
                            className="tauLogo p-2"
                            alt="Tel-Aviv university Logo"
                        />
                    </a>
                    <a
                        href="#"
                        className="card"
                        title="Math Mentor">
                        <img
                            src={mathMentor}
                            id={pdfMode ? 'pdfImg' : ''}
                            className="mathMentorLogo p-2"
                            alt="Math Mentor Logo"
                        />
                    </a>
                </span>
            )}
            {list({ key: 'ExperienceList', style: { marginTop: '0px' }, dictList: experienceDict })}
        </div>
    );

    // About Me content
    let aboutMe = (
        <div key="About me" className="aboutMe">

         

            <div className="card !block p-2 pt-0">
                <div
                    className="flex flex-wrap my-4 items-center">
                    <div className="flex flex-nowrap justify-center badge bg-transparent hover:glass border-none gap-2">
                        <FontAwesomeIcon icon={faUser} size="sm" />
                        <p>36 y/o, Male</p>
                    </div>
                    <p style={{ margin: '0em 0.8em', fontWeight: 'bold' }}>|</p>
                    <div className="flex flex-nowrap justify-center badge bg-transparent hover:glass border-none gap-2">
                        <FontAwesomeIcon icon={faLocationDot} size="sm" />
                        <p>Tel-Aviv, Israel</p>
                    </div>
                    <p style={{ margin: '0em 0.8em', fontWeight: 'bold' }}>|</p>
                    <div className="flex flex-nowrap justify-center badge bg-transparent hover:glass border-none gap-2">
                        <FontAwesomeIcon icon={faEarthAmerica} size="sm" />
                        <p>EN, HE</p>
                    </div>
                </div>
                {!pdfMode && (
                    <div id="profileImg" className="w-fit relative md:-top-16 float-right avatar online">
                        <div className="w-24 mask !contents mask-hexagon">
                            <img
                                src={selfie}
                                alt="Portrait of Adi Yehuda"
                                title="Portrait of Adi Yehuda"
                            />
                        </div>
                    </div>
                )}
                <p className="text-base mb-3">
                    Passionate developer with strong technical background and a knack for creating
                    innovative, high-quality solutions. My journey began at Tel Aviv University, 
                    where I balanced between SW & HW engineering studies with an ever-growing interest 
                    in programming and web technologies.
                </p>
                <p className="text-base mb-3">
                    After several years leading product R&D in the energy sector, I focused fully on 
                    full-stack web development and started building interactive, scalable applications 
                    that streamline user experiences. My background in hardware and embedded systems 
                    equips me with a unique perspective in bridging the gap between physical devices 
                    and software solutions.
                </p>
                <p className="text-base">
                    I am driven by a desire to push boundaries, explore cutting-edge tech, and 
                    collaborate on impactful projects. Whether it's a dynamic web platform, an 
                    automation script, or an innovative AI integration—I'm always ready to deliver 
                    a tailored, future-proof product.
                </p>
            </div>
        </div>
    );

    // Contact data
    let contactMeDict = {
        Email: {
            icon: faEnvelope,
            color: 'currentColor',
            data: 'Admin@webly.digital',
            link: 'mailto: Admin@webly.digital'
        },
        github: {
            icon: faGithub,
            color: 'currentColor',
            data: 'Adi Yehuda',
            link: 'https://github.com/AdiYd' // Add your GitHub link here
        },
        Linkedin: {
            icon: faLinkedin,
            color: 'currentColor',
            data: 'LinkedIn Profile',
            link: 'https://www.linkedin.com/in/adi-yehuda-27969612b/'
        },
        Website: {
            icon: faEarthAmerica,
            color: 'currentColor',
            data: 'webly.digital',
            link: 'https://webly.digital/'
        },
        Whatsapp: {
            icon: faWhatsapp,
            color: 'currentColor',
            data: '+972-527242775',
            link: 'https://wa.me/972527242775'
        }
    };

    let ContactMe = (
        <div key="Contact me" className="card">
            <ul className="menu* p-4 rounded-box">
                {Object.keys(contactMeDict).map((item, indx) => (
                    <li key={item + indx} className=" my-1">
                        <a
                            href={contactMeDict[item].link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex text-lg max-sm:text-base text-base-content items-center gap-3 px-4 py-2 "
                        >
                            <div className=" ">
                                <FontAwesomeIcon
                                    icon={contactMeDict[item].icon}
                                />
                            </div>
                            {contactMeDict[item].data}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );

    // Floating contact panel (right corner)
    let floatingContact = (
        <div className="floatingContact">
         <div
                
                className="btn btn-circle btn-info backdrop-blur-lg btn-outline shakeHover"
                title={themeName || 'Roll the Dice'}
                onClick={changeRandomTheme}
            >
                 <FontAwesomeIcon
                    icon={faDice}
                    size="lg"
                    style={{animationDuration: '0.5s'}}
                    className={`${isRolling ? 'animate-spin' : ''}`}
                />
            </div>
            {/* <a
                href={contactMeDict.Email.link}
                className="btn btn-circle btn-primary backdrop-blur-lg btn-outline"
                title="Mail me"
            >
                <FontAwesomeIcon
                    size="lg"
                    icon={contactMeDict.Email.icon}
                />
            </a> */}
            <a
                href={contactMeDict.Linkedin.link}
                className="btn btn-circle btn-secondary backdrop-blur-lg  btn-outline"
                title="LinkedIn"
            >
                <FontAwesomeIcon
                    size="lg"
                    icon={contactMeDict.Linkedin.icon}
                />
            </a>
            <a
                href={contactMeDict.Whatsapp.link}
                className="btn btn-circle btn-success backdrop-blur-lg btn-outline shakeHover"
                title="WhatsApp me"
            >
                <FontAwesomeIcon
                    size="lg"
                    icon={contactMeDict.Whatsapp.icon}
                />
            </a>
           
        </div>
    );

    // Building the block structure of the page
    let blockDict = {
        'About Me': [aboutMe],
        'Professional Experience': [experience],
        Education: [education],
        Skills: [skills],
        'Contact Me': [ContactMe]
    };

    // Automatic PDF generation once pdfMode is set
    if (pdfMode) {
        setTimeout(() => {
            toPDF();
            setTimeout(() => {
                setPdfMode(false);
            }, 10);
        }, 10);
    }

    return (
        <div
            ref={targetRef}
            className={`main z-10  my-8 ${pdfMode ? 'pdfContainer' : ''}`}
            // data-theme="light"
        >
            <div className="flex justify-center mb-8" style={{ alignItems: 'center' }}>
                <h1 className="text-4xl font-bold">
                    Adi Yehuda 
                </h1>
                {!pdfMode && showPdf && (
                    <span
                        title="Download PDF"
                        onClick={() => downloadPdf()}
                        className="btn btn-circle btn-outline btn-primary btn-sm ml-4"
                    >
                        <FontAwesomeIcon icon={faFilePdf} />
                    </span>
                )}
            </div>

            <div id='roll-the-dice-theme' className="flex items-center text-base-content justify-center mb-8">
            <p onClick={changeRandomTheme} className="text-base hover:border-accent/40 border-primary/40 backdrop-blur-3xl border-[1px] badge badge-outline badge-lg p-4  font-bold w-fit flex items-center cursor-pointer gap-2">
              {themeName || 'Roll the Dice'}
            
                <FontAwesomeIcon
                    icon={faDice}
                    
                    style={{animationDuration: '0.5s'}}
                    className={`text-lg p-2 ${isRolling ? 'animate-spin' : ''}`}
                />
                  </p>
            </div>

            <div className="grid gap-6">
                {Object.keys(blockDict).map((item, indx) => (
                    <div key={indx + item} className="transition-all my-2 overflow-x-hidden">
                        <DataSection
                            key={item + indx}
                            extentedMenu={item === 'Skills'}
                            callBack={setSkillMode}
                            isPDF={pdfMode}
                            childrens={blockDict[item]}
                            title={item}
                        />
                    </div>
                ))}
            </div>

            {!pdfMode && floatingContact}
        </div>
    );
}

// Debug function
export const debug = (...args) => {
    console.log(...args);
};
