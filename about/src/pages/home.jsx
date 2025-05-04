import { useEffect, useState } from "react";
// import { usePDF } from 'react-to-pdf';
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
import { AnimatePresence, motion } from "framer-motion";
import { Icon } from "@iconify/react/dist/iconify.js";

export const themeIconify = {
    light: 'ph:sun-bold',
    dark: 'ph:moon-bold',
    system: 'ph:desktop-bold',
    cupcake: 'mdi:cupcake',
    bumblebee: 'lucide-lab:bee',
    emerald: 'fa6-solid:gem',
    corporate: 'mdi:office-building',
    synthwave: 'mdi:sine-wave',
    retro: 'fa-solid:camera-retro',
    cyberpunk: 'mdi:robot',
    valentine: 'mdi:heart',
    halloween: 'mdi:halloween',
    garden: 'mdi:flower',
    forest: 'mdi:pine-tree',
    aqua: 'mdi:water',
    lofi: 'mdi:fantasy',
    pastel: 'mdi:palette-swatch',
    fantasy: 'mdi:wizard-hat',
    wireframe: 'mdi:pencil-ruler',
    black: 'mdi:circle',
    luxury: 'mdi:crown',
    cmyk: 'mdi:printer',
    autumn: 'mdi:leaf-maple',
    business: 'mdi:briefcase',
    acid: 'mdi:flask',
    lemonade: 'icon-park-outline:lemon',
    night: 'mdi:weather-night',
    coffee: 'mdi:coffee',
    winter: 'mdi:snowflake',
    dracula: 'game-icons:vampire-dracula',
    // caramellatte: 'mdi:coffee-to-go',
  };

/**
 * A refined "About Me" / About page for showcasing skills, education, and work experience.
 * 
 * Updated content focuses on clarity and precision, describing a background in hardware engineering,
 * extensive software expertise, and strong passion for developing innovative solutions.
 */

export default function Home({showPdf=true, ...props }) {
    const [reactSpin] = useState(true);
    const [pdfMode, setPdfMode] = useState(false);
    const [isRolling, setIsRolling] = useState(false);
    const [showDice, setShowDice] = useState(false); 
    const [themeName, setThemeName] = useState(null);
    const [skillMode, setSkillMode] = useState(false);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

    useEffect(() => {
        // update is mobile state on resize
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const changeRandomTheme = async () => {
        setIsRolling(true);
        await new Promise(resolve => setTimeout(resolve, 800));
        const preferThemeMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
        const currentTheme = document.documentElement.getAttribute('data-theme') || preferThemeMode;
        // const themes = [
        //     'light',
        //     'dark',
        //     'cupcake',
        //     'corporate',
        //     'synthwave',
        //     'retro',
        //     'cyberpunk',
        //     'valentine',
        //     'halloween',
        //     'garden',
        //     'forest',
        //     'aqua',
        //     'lofi',
        //     'pastel',
        //     'fantasy',
        //     'wireframe',
        //     'black',
        //     'luxury',
        //     'dracula',
        //     'cmyk',
        //     'autumn',
        //     'business',
        //     'acid',
        //     'lemonade',
        //     'night',
        //     'coffee',
        //     'winter',
        //     // 'caramellatte',
        //     'silk'
        // ];

        const themesByMode = {
            light: ['light', 'cupcake', 'wireframe', 'corporate', 'retro','cmyk','autumn', 'cyberpunk','acid', 'lemonade','winter',  'valentine', 'garden', 'forest', 'aqua', 'lofi', 'pastel', 'fantasy'],
            dark: ['dark', 'halloween', 'black','synthwave', 'luxury', 'dracula',  'business', 'night', 'coffee' ],
        }

        const currentThemeMode = themesByMode.light.includes(currentTheme) ? 'light' : 'dark';
        const nextThemeMode = currentThemeMode === 'light' ? 'dark' : 'light';
        if (!themeName && nextThemeMode === 'dark') {
        setThemeName('dracula');
        document.documentElement.setAttribute('data-theme', 'dracula');
        setIsRolling(false);
        return;
        }
        else if (!themeName && nextThemeMode === 'light') {
            setThemeName('autumn');
            document.documentElement.setAttribute('data-theme', 'autumn');
            setIsRolling(false);
            return;
        }

        const randomTheme = themesByMode[nextThemeMode][Math.floor(Math.random() * themesByMode[nextThemeMode].length)];
        if (themeName === randomTheme) {
            changeRandomTheme();
            return;
        }
        setThemeName(randomTheme);
        document.documentElement.setAttribute('data-theme', randomTheme);
        setIsRolling(false);
    }


    // PDF creation references
    // const { toPDF, targetRef } = usePDF({
    //     filename: 'AdiYehuda-CVS.pdf',
    //     page: { margin: 8 }
    // });

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
        'Open AI': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 25"><path fill="currentColor" d="M20.557 10.634a5.07 5.07 0 0 0-.42-4.099c-1.087-1.901-3.284-2.864-5.432-2.42c-.939-1.061-2.321-1.654-3.754-1.654a5.07 5.07 0 0 0-4.814 3.481a5 5 0 0 0-3.334 2.42a5.07 5.07 0 0 0 .618 5.901a5.06 5.06 0 0 0 .444 4.1a5.025 5.025 0 0 0 5.432 2.419a5.07 5.07 0 0 0 3.753 1.679a5.07 5.07 0 0 0 4.815-3.481a5 5 0 0 0 3.333-2.42a5.07 5.07 0 0 0-.642-5.926M13.05 21.152a3.66 3.66 0 0 1-2.395-.864c.025-.025.099-.05.124-.074l3.975-2.296a.65.65 0 0 0 .321-.568v-5.605l1.679.963c.025 0 .025.024.025.05v4.641a3.716 3.716 0 0 1-3.729 3.753M5 17.72c-.444-.765-.592-1.654-.444-2.518c.025.024.075.05.124.074l3.975 2.296a.6.6 0 0 0 .642 0l4.864-2.815v1.95c0 .026 0 .05-.024.05l-4.025 2.321c-1.778 1.037-4.074.42-5.111-1.358M3.965 9.03a3.88 3.88 0 0 1 1.95-1.654v4.74c0 .223.124.445.321.568l4.865 2.815l-1.68.963c-.024 0-.049.025-.049 0L5.347 14.14a3.714 3.714 0 0 1-1.383-5.111m13.827 3.21l-4.864-2.815l1.679-.963c.024 0 .05-.025.05 0l4.024 2.32a3.727 3.727 0 0 1 1.358 5.112a3.72 3.72 0 0 1-1.95 1.63v-4.716a.61.61 0 0 0-.297-.568m1.654-2.519a.5.5 0 0 0-.123-.074L15.347 7.35a.6.6 0 0 0-.642 0L9.84 10.165V8.214c0-.025 0-.05.025-.05l4.025-2.32A3.73 3.73 0 0 1 19 7.226c.445.741.593 1.63.445 2.494M8.927 13.177l-1.68-.963c-.024 0-.024-.025-.024-.05v-4.64a3.75 3.75 0 0 1 3.753-3.753a3.66 3.66 0 0 1 2.395.864a.5.5 0 0 1-.123.074L9.273 7.004a.65.65 0 0 0-.321.568v5.605zm.913-1.975l2.173-1.26l2.173 1.26v2.493l-2.173 1.26l-2.173-1.26z"/></svg>,
        'Shadcn': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M22.219 11.784L11.784 22.219a1.045 1.045 0 0 0 1.476 1.476L23.695 13.26a1.045 1.045 0 0 0-1.476-1.476M20.132.305L.305 20.132a1.045 1.045 0 0 0 1.476 1.476L21.608 1.781A1.045 1.045 0 0 0 20.132.305"/></svg>,
        'daisyUI': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 0C7.828.001 4.396 3.433 4.395 7.605c.001 4.172 3.433 7.604 7.605 7.605c4.172-.001 7.604-3.433 7.605-7.605C19.604 3.433 16.172.001 12 0m0 .286c4.016 0 7.32 3.304 7.32 7.32c-.001 4.015-3.305 7.318-7.32 7.318S4.681 11.62 4.68 7.605c0-4.016 3.304-7.32 7.32-7.32zm0 4.04a3.294 3.294 0 0 0-3.279 3.279v.001A3.296 3.296 0 0 0 12 10.884a3.294 3.294 0 0 0 3.279-3.279A3.294 3.294 0 0 0 12 4.326M8.34 16.681h-.008a3.67 3.67 0 0 0-3.652 3.652v.015A3.67 3.67 0 0 0 8.332 24h7.336a3.67 3.67 0 0 0 3.652-3.652v-.016a3.67 3.67 0 0 0-3.652-3.652h-.008Z"/></svg>,
        'Ant': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M17.451 6.68c.51-.506.51-1.33 0-1.837L15.578 2.97l.003.002l-2.554-2.55a1.463 1.463 0 0 0-2.05.013L.427 10.98a1.443 1.443 0 0 0 0 2.047l10.549 10.54a1.45 1.45 0 0 0 2.05 0l4.423-4.42a1.297 1.297 0 0 0 0-1.838a1.305 1.305 0 0 0-1.84 0l-3.35 3.354a.346.346 0 0 1-.495 0l-8.427-8.419a.346.346 0 0 1 0-.495l8.424-8.42l.035-.029a.34.34 0 0 1 .46.03l3.354 3.35a1.3 1.3 0 0 0 1.841 0m-8.244 5.376a2.848 2.846 0 1 0 5.696 0a2.848 2.846 0 1 0-5.696 0m14.367-1.034L20.28 7.743a1.303 1.303 0 0 0-1.841.003a1.297 1.297 0 0 0 0 1.838l2.224 2.222c.14.139.14.356 0 .495l-2.192 2.19a1.297 1.297 0 0 0 0 1.837a1.305 1.305 0 0 0 1.84 0l3.264-3.26a1.445 1.445 0 0 0-.002-2.047"/></svg>,
        'MUI': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M20.229 15.793a.7.7 0 0 0 .244-.243a.7.7 0 0 0 .09-.333l.012-3.858a.7.7 0 0 1 .09-.333a.7.7 0 0 1 .245-.243L23 9.58a.7.7 0 0 1 .333-.088a.7.7 0 0 1 .333.09a.7.7 0 0 1 .244.243a.7.7 0 0 1 .089.333v7.014a.67.67 0 0 1-.335.578l-7.893 4.534a.67.67 0 0 1-.662 0l-6.194-3.542a.67.67 0 0 1-.246-.244a.67.67 0 0 1-.09-.335v-3.537q.001-.007.008-.004q.01.003.008-.005v-.004q0-.004.004-.007l5.102-2.93c.004-.003.002-.01-.003-.01l-.004-.002l-.001-.004l.01-3.467a.67.67 0 0 0-.333-.58a.67.67 0 0 0-.667 0L8.912 9.799a.67.67 0 0 1-.665 0l-3.804-2.19a.667.667 0 0 0-.999.577v6.267a.67.67 0 0 1-.332.577a.7.7 0 0 1-.332.09a.7.7 0 0 1-.333-.088L.336 13.825a.67.67 0 0 1-.246-.244a.67.67 0 0 1-.09-.336L.019 2.292a.667.667 0 0 1 .998-.577l7.23 4.153a.67.67 0 0 0 .665 0l7.228-4.153a.7.7 0 0 1 .333-.088a.7.7 0 0 1 .333.09a.7.7 0 0 1 .244.244a.7.7 0 0 1 .088.333V13.25c0 .117-.03.232-.089.334a.67.67 0 0 1-.245.244l-3.785 2.18a.67.67 0 0 0-.245.245a.67.67 0 0 0-.089.334a.67.67 0 0 0 .09.334a.67.67 0 0 0 .247.244l2.088 1.189a.7.7 0 0 0 .33.087a.7.7 0 0 0 .332-.089zm.438-9.828a.67.67 0 0 0 .09.335a.67.67 0 0 0 .248.244a.67.67 0 0 0 .67-.008l2.001-1.2a.7.7 0 0 0 .237-.243a.7.7 0 0 0 .087-.329V2.32a.67.67 0 0 0-.091-.335a.67.67 0 0 0-.584-.33a.67.67 0 0 0-.334.094l-2 1.2a.7.7 0 0 0-.238.243a.7.7 0 0 0-.086.329z"/></svg>,
        'Radix': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M11.52 24a7.68 7.68 0 0 1-7.68-7.68a7.68 7.68 0 0 1 7.68-7.68zm0-24v7.68H3.84V0zm4.8 7.68a3.84 3.84 0 1 1 0-7.68a3.84 3.84 0 0 1 0 7.68"/></svg>,
        'Next.js': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 15V9l7.745 10.65A9 9 0 1 1 19 17.657M15 12V9"/></svg>,
        'Tailwind': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.31.74 1.91 1.35c.98 1 2.09 2.15 4.59 2.15c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C15.61 7.15 14.5 6 12 6m-5 6c-2.67 0-4.33 1.33-5 4c1-1.33 2.17-1.83 3.5-1.5c.76.19 1.3.74 1.91 1.35C8.39 16.85 9.5 18 12 18c2.67 0 4.33-1.33 5-4c-1 1.33-2.17 1.83-3.5 1.5c-.76-.19-1.3-.74-1.91-1.35C10.61 13.15 9.5 12 7 12"/></svg>,
        'Firebase': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M19.455 8.369c-.538-.748-1.778-2.285-3.681-4.569a447 447 0 0 0-1.884-2.245l-.488-.576l-.207-.245l-.113-.133l-.022-.032l-.01-.005L12.57 0l-.609.488a13.34 13.34 0 0 0-3.681 4.64a11.4 11.4 0 0 0-1.043 3.176a12 12 0 0 0-.121.738a11 11 0 0 0-.632-.033l-.059-.003a7.5 7.5 0 0 0-2.28.274l-.317.089l-.163.286a9.6 9.6 0 0 0-1.252 4.416a9.53 9.53 0 0 0 1.583 5.625a9.57 9.57 0 0 0 4.42 3.611l.236.095l.071.025l.003-.001a9.6 9.6 0 0 0 2.941.568q.171.006.342.006a9.5 9.5 0 0 0 3.69-.742l.008.004l.313-.145a9.63 9.63 0 0 0 3.927-3.335a9.6 9.6 0 0 0 1.641-5.042c.075-2.161-.643-4.304-2.133-6.371m-7.083 6.695c.328 1.244.264 2.44-.191 3.558c-1.135-1.12-1.967-2.352-2.475-3.665c-.543-1.404-.87-2.74-.974-3.975c.48.157.922.366 1.315.622c1.132.737 1.914 1.902 2.325 3.461zm.207 6.022c.482.368.99.712 1.513 1.028a7.9 7.9 0 0 1-2.369.273a8 8 0 0 1-.373-.022a9 9 0 0 0 1.228-1.279zm1.347-6.431c-.516-1.957-1.527-3.437-3.002-4.398a7.4 7.4 0 0 0-2.194-.95a9 9 0 0 1 .089-.713a11.6 11.6 0 0 1 .91-2.765l.004-.008c.177-.358.376-.719.61-1.105l.092-.152l-.003-.001a11.7 11.7 0 0 1 1.942-2.311l.288.341c.672.796 1.304 1.548 1.878 2.237c1.291 1.549 2.966 3.583 3.612 4.48c1.277 1.771 1.893 3.579 1.83 5.375a7.97 7.97 0 0 1-3.995 6.641a15.5 15.5 0 0 1-2.539-1.599c.79-1.575.952-3.28.479-5.072zm-2.575 5.397a7.9 7.9 0 0 1-2.09 1.856a6 6 0 0 1-.243-.093l-.065-.026a7.97 7.97 0 0 1-3.635-3.01a7.94 7.94 0 0 1-1.298-4.653a7.9 7.9 0 0 1 .882-3.379q.476-.105.96-.131l.084-.002q.245-.005.478 0q.341.017.677.07c.073 1.513.445 3.145 1.105 4.852c.637 1.644 1.694 3.162 3.144 4.515z"/></svg>,
        'Supabase': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M3.084 15.25c-1.664 0-2.6-1.912-1.58-3.226L10.21.806C10.794.054 12 .466 12 1.42v7.33h8.916c1.663 0 2.6 1.912 1.58 3.226L13.79 23.194c-.584.752-1.79.34-1.79-.613V15.25z"/></svg>,
        'Postgres': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                        <path fill="currentColor" d="M16.805 1a10 10 0 0 0-2.603.37l-.06.018a10.6 10.6 0 0 0-1.615-.151c-1.113-.019-2.07.243-2.84.68c-.76-.256-2.336-.697-3.997-.609c-1.157.061-2.419.402-3.354 1.36c-.933.958-1.426 2.44-1.322 4.457c.028.557.191 1.464.463 2.64c.27 1.175.652 2.55 1.127 3.805s.996 2.384 1.81 3.15c.406.384.965.707 1.624.68c.463-.018.882-.215 1.243-.506c.176.225.364.323.535.414c.215.114.425.192.642.244a4.6 4.6 0 0 0 1.84.091c.267-.043.548-.127.828-.247c.01.302.022.598.035.898c.038.95.063 1.827.357 2.596c.047.126.176.773.687 1.344c.51.572 1.51.928 2.648.692c.803-.167 1.825-.468 2.503-1.404c.67-.926.973-2.254 1.033-4.409c.015-.116.033-.215.052-.308l.16.014h.018c.857.038 1.787-.08 2.564-.43c.688-.31 1.208-.622 1.587-1.177c.095-.137.199-.303.227-.59c.028-.285-.14-.733-.421-.939c-.563-.414-.916-.257-1.295-.18q-.56.12-1.136.133c1.093-1.784 1.876-3.68 2.323-5.358c.264-.99.413-1.903.425-2.701s-.055-1.505-.548-2.117c-1.541-1.91-3.708-2.438-5.384-2.456q-.078-.002-.156-.001zm-.044.587c1.585-.015 3.611.417 5.065 2.22c.327.405.424.997.413 1.727c-.012.729-.151 1.601-.405 2.557c-.493 1.852-1.425 4.01-2.738 5.948a.7.7 0 0 0 .15.079c.274.11.898.204 2.145-.044c.313-.065.543-.108.781.068a.48.48 0 0 1 .173.39a.64.64 0 0 1-.123.308c-.24.351-.716.684-1.326.958c-.539.244-1.313.371-1.999.379c-.344.003-.661-.023-.93-.104l-.018-.006c-.104.971-.343 2.89-.498 3.765c-.125.706-.343 1.267-.76 1.687c-.416.42-1.004.673-1.796.838c-.981.204-1.696-.016-2.157-.393c-.46-.375-.671-.874-.798-1.18c-.087-.21-.132-.483-.176-.848a18 18 0 0 1-.097-1.315a46 46 0 0 1-.028-2.312c-.41.363-.92.605-1.467.696c-.65.107-1.232.002-1.579-.082a2.2 2.2 0 0 1-.49-.185c-.162-.083-.315-.177-.417-.363a.5.5 0 0 1-.054-.35a.56.56 0 0 1 .206-.303c.188-.148.435-.23.808-.306c.68-.135.917-.228 1.061-.339c.123-.095.262-.287.508-.57l-.003-.037a2.9 2.9 0 0 1-1.257-.328c-.141.144-.865.887-1.748 1.917c-.371.431-.781.678-1.214.696s-.824-.194-1.156-.506c-.665-.626-1.195-1.703-1.657-2.92c-.46-1.218-.836-2.574-1.102-3.729c-.268-1.155-.426-2.086-.448-2.535c-.1-1.909.36-3.195 1.15-4.006S4.652 1.94 5.708 1.882c1.894-.106 3.693.535 4.057.673c.701-.462 1.604-.75 2.733-.732a7.2 7.2 0 0 1 1.588.2l.019-.008q.344-.117.698-.196a9.4 9.4 0 0 1 1.957-.23zm.143.614h-.137a8.5 8.5 0 0 0-1.61.176a7.05 7.05 0 0 1 2.692 2.062a7.7 7.7 0 0 1 1.07 1.76c.104.242.174.447.213.605c.02.08.034.147.038.217a.4.4 0 0 1-.011.132l-.006.012c.029.803-.176 1.347-.201 2.113c-.019.556.127 1.209.163 1.92c.034.67-.049 1.405-.497 2.127q.056.066.108.132c1.185-1.81 2.04-3.814 2.495-5.521c.243-.92.373-1.753.384-2.413c.01-.66-.117-1.139-.279-1.338c-1.268-1.573-2.983-1.974-4.422-1.985m-4.525.235c-1.117.002-1.919.33-2.526.82c-.627.507-1.047 1.2-1.323 1.911a7.9 7.9 0 0 0-.485 2.213l.013-.007c.337-.184.78-.367 1.254-.473c.475-.106.986-.139 1.449.035s.846.584.985 1.206c.665 2.986-.207 4.096-.529 4.933a9 9 0 0 0-.312.929q.06-.017.121-.024a1.06 1.06 0 0 1 .51.1c.324.13.546.402.666.714q.047.124.067.26q.02.057.019.117a49 49 0 0 0 .012 3.426c.022.494.054.928.095 1.271c.04.342.098.602.135.69c.12.294.297.678.617.939s.777.434 1.614.26c.726-.151 1.174-.36 1.474-.663c.298-.301.477-.72.591-1.363c.171-.963.515-3.754.556-4.28c-.018-.395.042-.7.172-.932c.135-.238.343-.384.522-.463c.09-.04.174-.066.243-.085a6 6 0 0 0-.23-.298a4 4 0 0 1-.629-1.007a8 8 0 0 0-.243-.443c-.125-.22-.284-.495-.45-.804c-.333-.619-.695-1.369-.883-2.1c-.187-.729-.215-1.484.265-2.017c.426-.473 1.172-.669 2.293-.559c-.033-.096-.053-.176-.109-.304a7 7 0 0 0-.983-1.617c-.95-1.178-2.487-2.346-4.863-2.384h-.108zm-6.276.047q-.18 0-.36.01c-.954.053-1.856.322-2.501.986c-.647.663-1.072 1.751-.98 3.553c.019.34.172 1.296.434 2.43c.262 1.136.634 2.471 1.08 3.65c.446 1.18.988 2.207 1.502 2.693c.259.243.484.341.688.333c.205-.01.451-.124.753-.475a40 40 0 0 1 1.71-1.877a3.2 3.2 0 0 1-.932-1.307a3.1 3.1 0 0 1-.17-1.58c.097-.678.11-1.312.099-1.812c-.012-.488-.048-.812-.048-1.015v-.028a8.8 8.8 0 0 1 .559-3.095c.264-.682.658-1.375 1.249-1.936c-.58-.185-1.61-.467-2.725-.52a7 7 0 0 0-.36-.01zm11.714 4.842c-.641.008-1.001.169-1.19.379c-.268.298-.293.82-.127 1.464s.507 1.365.829 1.963c.16.3.316.57.442.788c.127.22.22.376.276.51q.08.181.168.331c.248-.509.293-1.008.267-1.529c-.033-.644-.187-1.303-.164-1.97c.025-.78.184-1.289.198-1.892a6 6 0 0 0-.699-.044m-7.78.105a2.7 2.7 0 0 0-.582.068a4.5 4.5 0 0 0-1.09.412q-.173.09-.33.209l-.02.018c.006.134.033.459.045.936c.01.523-.002 1.19-.106 1.91c-.226 1.568.946 2.866 2.324 2.868c.08-.322.213-.648.345-.992c.384-1.003 1.139-1.734.503-4.589c-.104-.467-.31-.656-.594-.763a1.4 1.4 0 0 0-.495-.077m7.48.187h.048q.094.003.17.02a.4.4 0 0 1 .13.051a.15.15 0 0 1 .071.1v.008a.2.2 0 0 1-.034.124a.6.6 0 0 1-.104.137a.65.65 0 0 1-.364.195a.57.57 0 0 1-.388-.095a.6.6 0 0 1-.123-.108a.24.24 0 0 1-.06-.116a.15.15 0 0 1 .04-.118a.4.4 0 0 1 .111-.082a1.3 1.3 0 0 1 .504-.118zm-7.388.154q.075 0 .157.012c.144.02.273.057.371.112q.072.037.126.097q.028.033.042.073t.009.083a.27.27 0 0 1-.071.141a.6.6 0 0 1-.135.12a.62.62 0 0 1-.424.103a.7.7 0 0 1-.396-.209a.7.7 0 0 1-.112-.15a.25.25 0 0 1-.039-.162c.014-.1.099-.15.18-.18a.8.8 0 0 1 .29-.036zm8.56 6.732h-.003c-.139.05-.253.07-.35.11a.42.42 0 0 0-.225.197c-.06.105-.11.292-.095.61a.5.5 0 0 0 .14.064c.161.048.432.08.735.075c.602-.007 1.344-.143 1.738-.321c.323-.146.623-.336.891-.564c-1.317.264-2.06.194-2.517.011a1.3 1.3 0 0 1-.314-.183m-7.588.086h-.02c-.05.004-.123.02-.263.172c-.33.358-.444.582-.716.792c-.27.21-.623.321-1.327.461c-.223.044-.35.093-.436.132c.028.022.025.028.066.049c.103.055.236.103.342.13c.303.073.8.159 1.319.073s1.058-.327 1.518-.953c.08-.108.088-.268.023-.44c-.067-.17-.211-.318-.313-.36a.6.6 0 0 0-.193-.054z"/>
                    </svg>,
        'Anthropic': <svg xmlns="http://www.w3.org/2000/svg" className="mx-auto" width="1.5em" height="1.5em" viewBox="0 0 24 24"><path fill="currentColor" d="M16.765 5h-3.308l5.923 15h3.23zM7.226 5L1.38 20h3.308l1.307-3.154h6.154l1.23 3.077h3.309L10.688 5zm-.308 9.077l2-5.308l2.077 5.308z"/></svg>,

    };

    /**
     * Creates a styled list component to display various data in bullet points.
     */
    const list = ({ key, dictList = {}, style = {}, arrow = true } = {}) => (
        <ul key={key ? key : Math.random() * 1000} style={style} className={`card max-w-full`}>
            {Object.keys(dictList).map((item, index) => (
                <li
                    key={index + item + key}
                    id={`${arrow ? 'arrow' : ''}`}
                    className='list list-none'
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

    // const preloadIcons = async () => {
    //     await new Promise(resolve => setTimeout(resolve, 500));
    //     setPdfMode(true);
    //     };

    // function downloadPdf() {
    //     setSkillMode(false);
    //     preloadIcons(true);
    // }

    // Determine the skill sets to display (expanded vs. condensed)
    let skillSet;
    if (skillMode || pdfMode) {
        skillSet = (
            <motion.div
            
            initial={{ opacity: pdfMode ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration:  0.8 , ease: 'circInOut'}}
             key={1}>
                <fieldset
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge badge-lg">Front</legend>}
                    {['JS', 'HTML', 'CSS','Tailwind', 'faReact','Radix','Shadcn','daisyUI','MUI','Ant'].map((item, indx) => (
                        skillsDict[item] && (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className='skill-box text-primary-focus'
                            >
                                 {skillsDict[item]?.type ? skillsDict[item]  :
                                <FontAwesomeIcon
                                    id={item}
                                    className={`fontAwsome  ${
                                        !pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''
                                    }`}
                                    size="lg"
                                    icon={skillsDict[item]}
                                />}
                                <span className="skillName">
                                    {item.startsWith('fa') ? item.slice(2) : item}
                                </span>
                            </div>
                        )
                    ))}
                </fieldset>

                <fieldset
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge badge-lg">Back</legend>}
                    {['Postgres', 'faServer','Next.js', 'faNodeJs',  'faPython','faCode'].map(
                        (item, indx) => (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className="skill-box text-secondary-focus"
                            >
                               {skillsDict[item]?.type ? skillsDict[item]  :
                                <FontAwesomeIcon
                                    id={item}
                                    className="fontAwsome"
                                    size="lg"
                                    icon={skillsDict[item]}
                                />}
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
                    className="skillzFieldSet"
                >
                    {!pdfMode && <legend className="legend badge  badge-lg">Cloud & API</legend>}
                    {['Firebase','Supabase', 'Open AI','Anthropic','faGithub', 'Auth', 'Payment', 'Google'].map(
                        (item, indx) =>
                           
                                <div
                                    key={indx + item}
                                    title={item.startsWith('fa') ? item.slice(2) : item}
                                    className="skill-box text-accent-focus"
                                >
                                      {skillsDict[item]?.type ? skillsDict[item]  :
                                <FontAwesomeIcon
                                    id={item}
                                    className="fontAwsome"
                                    size="lg"
                                    icon={skillsDict[item]}
                                />}
                                    <span className="skillName text-accent-focus">
                                        {item.startsWith('fa') ? item.slice(2) : item}
                                    </span>
                                </div>
                           
                    )}
                </fieldset>
            </motion.div>
        );
    } else {
        skillSet = (
            <motion.div 
            initial={{ opacity: pdfMode ? 1 : 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: pdfMode ? 0 : 0.8 , ease: 'circInOut'}}
            key={2} className="overflow-hidden card* w-full flex justify-center relative"> {/* Carousel container */}
                <div className="flex justify-between w-full whitespace-nowrap animate-scroll"> {/* Adjust duration */}
                {['HTML','CSS', 'JS','Postgres', 'faServer','Next.js', 'faReact','Tailwind', 'Shadcn','Google','faPython','Firebase','Supabase', 'Open AI', 'Anthropic', 'faNodeJs', 'daisyUI','Radix', 'Ant', 'MUI','faBootstrap', 'Auth','faGithub','Payment']
                .map(
                    (item, indx) =>
                        skillsDict[item] && (
                            <div
                                key={indx + item}
                                title={item.startsWith('fa') ? item.slice(2) : item}
                                className={`skill-box ${pdfMode ? '' : ''}`}
                            >
                               { skillsDict[item]?.type ? skillsDict[item] : 
                              <FontAwesomeIcon
                                    id={item}
                                    className={`fontAwsome  ${
                                        !pdfMode && reactSpin && item === 'faReact' ? 'rotate react' : ''
                                    }`}
                                    size="lg"
                                    icon={skillsDict[item]}
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
                    B.Sc. Electrical Engineering &nbsp;|
                    <i className="subTitle"> Tel Aviv University, 2014-2019 </i>
                </p>
            ),
            body: (
                <section className="max-w-[95%]">
                    Majors in computers, control systems, and electromagnetics:
                    <ul className="majorsList list-none border-l-2 border-accent/40 pl-4">
                        <li className="my-2">
                            <i className="majors">Computers & Programming –</i> In-depth
                            Python, Computer organization, Algorithms, Data structures, C++, OS, encryption and network protocols.
                        </li>
                        <div className="w-full h-2"/>
                        <li className="my-2">
                            <i className="majors">Electromagnetic Radiation –</i> Waves propagation,Radiation and Transmissions.
                        </li>
                        <div className="w-full h-2"/>
                        <li className="my-2">
                            <i className="majors">Controlled Systems –</i> Feedback loops,
                            logic blocks, and control theory fundamentals.
                        </li>
                    </ul>
                </section>
            )
        },
        second: {
            head: (
                <p className="font-medium !text-base-content">
                    AI engineering for developers &nbsp;|
                    <i className="subTitle"> Coursera, 2024 </i>
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
                        <code>AI Agents</code>,{` `}
                        <code>MCPs</code>.{` `}
                    </i>
                    <br/>
                    On top of that I participated in a microsoft Webinar on AI engineering, where I learned about the latest trends and best practices in the field, including co-pilot mastering.
                    In addition, built and deployed multiple projects using various AI tools and platforms, Agents and top AI models.
                </p>
            )
        },
        third: {
            head: (
                <p className="font-medium !text-base-content">
                    Advanced React & Next.js Development &nbsp;|
                    <i className="subTitle"> Udemy, 2023-2024 </i>
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
                    Strong API and cloud frameworks, server-side rendering, and scalable solutions. {` `}
                    {/* <br /> */}
                    Also covered advanced topics and best practices in web development, including professional UI/UX design, performance optimization, and security measures.
                    <i className="detailH">
                        <code>Tailwind</code>,
                        <code>Radix UI</code>,
                        <code>ShadCN</code>,
                        <code>daisyUI</code>,
                        <code>Ant design</code>,
                        <code>MUI</code>,
                        <code>Bootstrap</code>
                    </i>
                </p>
            )
        },
        fourth: {
            head: (
                <p className="font-medium !text-base-content">
                    UI/UX and Web design &nbsp;|
                    <i className="subTitle"> Udemy course 2023 </i>
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
        fifth: {
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
        sixth: {
            head: (
                <p className="font-medium !text-base-content">
                    Python Developer: Zero to Mastery &nbsp;|
                    <i className="subTitle"> Udemy, Andrei Neagoie</i>
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
            Full-Stack Developer &nbsp;|
            <i className="subTitle"> Self-Employed, 2023–2025 </i>
        </p>
    ),
    body: (
        <p className="">
            Designing and developing modern web applications and SaaS platforms with a strong focus on scalability, clean user experience, and cloud-native architecture. Balancing both front-end interfaces and backend infrastructure including authentication, integrations, and data pipelines. Leveraging automation, AI APIs, and cloud platforms to speed up development and optimize workflows. Proficient in 
            <i className="detailH"><code>React</code></i>, 
            <i className="detailH"><code>Next.js</code></i>, 
            <i className="detailH"><code>Firebase</code></i>, 
            <i className="detailH"><code>Supabase</code></i>, 
            <i className="detailH"><code>AWS</code></i>, 
            <i className="detailH"><code>Python</code></i>, and 
            <i className="detailH"><code>AI integrations</code></i>.
        </p>
    )
},
second: {
    head: (
        <p className="font-medium !text-base-content">
            Senior Hardware & Product Engineer &nbsp;|
            <i className="subTitle"> SolarEdge R&D, 2019–2023 </i>
        </p>
    ),
    body: (
        <p className="">
            Led multidisciplinary development of advanced analog/digital hardware systems for renewable energy products. Responsible for full product cycle - from early design and prototyping to validation and mass production. Collaborated with firmware, QA, and manufacturing teams to ensure system-level reliability. Built automated test frameworks and real-time data tools using 
            <i className="detailH"><code>Python</code></i> and 
            <i className="detailH"><code>C#</code></i> to streamline validation processes. Experience with DSPs, wireless communication, power electronics, and system-level debugging. Known for hands-on problem solving and cross-domain coordination.
        </p>
    )
}
,
        third: {
            head: (
                <p className="font-medium !text-base-content">
                    Teaching Assistant &nbsp;|
                    <i className="subTitle"> Tel Aviv University, 2019-2020 </i>
                </p>
            ),
            body: (
                <p className="">
                    Frontal lectures for TAU engineering students in mathematics
                    and physics. lessons and marathons to clarify complex topics, driving higher exam
                    success rates. Focusing on teaching out of the box problem solving skills and creative thinking.
                </p>
            )
        },
        fourth: {
            head: (
                <p className="font-medium !text-base-content">
                    Math & Physics Tutor &nbsp;| 
                    <i className="subTitle"> 2016-2019 </i>
                </p>
            ),
            body: (
                <p className="">
                    Frontal lectures for high school students in math and physics.
                    Including Marathon sessions for Bagrut.
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
                    {/* <a
                        href="#"
                        className="card"
                        title="Math Mentor">
                        <img
                            src={mathMentor}
                            id={pdfMode ? 'pdfImg' : ''}
                            className="mathMentorLogo p-2"
                            alt="Math Mentor Logo"
                        />
                    </a> */}
                </span>
            )}
            {list({ key: 'ExperienceList', style: { marginTop: '0px' }, dictList: experienceDict })}
        </div>
    );

    // About Me content
    let aboutMe = (
        <div key="About me" className="aboutMe">

         

            <div className={`${pdfMode ? '': 'card'} !block p-2 pt-0`}>
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
                        <div className="w-24 mask !contents ">
                            <img
                                src={selfie}
                                alt="Portrait of Adi Yehuda"
                                title="Portrait of Adi Yehuda"
                            />
                        </div>
                    </div>
                )}
                <p className="text-base mb-3">
                    I'm a Passionate developer with strong technical background and a knack for creating
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


    let contactMe = (
        <div key="Contact me" className={`${pdfMode ? '': 'card'} !block p-2 pt-0`}>
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
                
                className="btn btn-circle btn-primary backdrop-blur-lg btn-outline shakeHover"
                title={themeName || 'Roll the Dice'}
                onClick={changeRandomTheme}
                onMouseEnter={() => setShowDice(true)}
                onMouseLeave={() => setShowDice(false)}
            >
            { (isRolling || showDice || !themeName) ? <FontAwesomeIcon
                    icon={faDice}
                    size="lg"
                    style={{animationDuration: '0.5s'}}
                    className={`${isRolling ? 'animate-spin' : ''}`}
                /> :
                <Icon icon={themeIconify[themeName]} className="text-xl" />
                }
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
                className="btn btn-circle btn-success* border-success text-success backdrop-blur-lg btn-outline shakeHover"
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
        'Contact Me': [contactMe]
    };

    // Automatic PDF generation once pdfMode is set
    // if (pdfMode) {
    //     setTimeout(() => {
    //         toPDF();
    //         setTimeout(() => {
    //             setPdfMode(false);
    //         }, 10);
    //     }, 100);
    // }


    return (
        <div
            // ref={targetRef}
            className={`main z-10  py-8 ${pdfMode ? 'pdfContainer pdfCard' : ''}`}
            // data-theme="light"
        >
            <div className="flex justify-center gap-4 max-sm:gap-0 mb-8" style={{ alignItems: 'center' }}>
                <h1 className="text-4xl font-bold">
                    Adi Yehuda 
                </h1>
                {!pdfMode && showPdf && (
                    <a
                        href='https://adiyd.github.io/About/assets/Adi Yehuda-CVS.pdf'
                        download
                        id="downloadPdf"
                        target="_blank"
                        rel="noopener noreferrer"
                        title="Download PDF"
                        // onClick={() => downloadPdf()}
                        className="btn btn-circle btn-outline btn-primary btn-sm ml-4"
                    >
                        <FontAwesomeIcon icon={faFilePdf} />
                    </a>
                )}
            </div>

            {!pdfMode && 
            <div onClick={changeRandomTheme} id='roll-the-dice-theme' className="items-center hover:shadow-lg cursor-pointer hover:shadow-accent max-sm:hover:shadow-none after:shadow-none text-base-content justify-center p-4 w-fit min-w-48 mx-auto mb-8 backdrop-blur-3xl border-[1px] badge badge-outline badge-lg hover:border-secondary/40 border-primary/40">
                <div className="grid-cols-[1fr_1fr_3fr] gap-4 grid w-full text-base font-bold items-center">
                    <div className="flex flex-col gap-1 relative -right-2 justify-center">
                        <div className="h-1 w-1 rounded-full bg-primary"/>
                        <div className="h-1 w-1 rounded-full bg-secondary"/>
                        <div className="h-1 w-1 rounded-full bg-accent"/>
                    </div>
                    <div className="text-lg">
                    {(!themeName || isRolling) ? <FontAwesomeIcon
                            icon={faDice}
                            
                            style={{animationDuration: '0.5s'}}
                            className={` ${isRolling ? 'animate-spin' : ''}`}
                        /> : 
                        <Icon icon={themeIconify[themeName]} className="" />
                        }
                    </div>
                    <div className="flex">
                    {themeName || 'Roll the Dice'}
                    </div>
                    
                </div>
            </div>}

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
