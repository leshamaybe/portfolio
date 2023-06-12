/** @type {import('tailwindcss').Config} */
module.exports = {
    mode: 'jit',
    purge: ['./src/components/**/*.{js,jsx,ts,tsx,vue}'],
    content: [
        './src/components/**/*.{js,ts,jsx,tsx}',
        './src/pages/**/*.{js,ts,jsx,tsx}',
        './src/animation/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        fontFamily: {
            basier: ['Basier Circle', 'sans-serif'],
            monument: ['"Monument Extended"', 'sans-serif'],
        },
        fontSize: {
            'marquee-dynamic': 'clamp(2.5rem, 7vw, 7.5rem)',
            '12+1': 'calc(12px + 1 * (100vw - 320px) / 928)',
            '12+3': 'calc(12px + 3 * (100vw - 320px) / 928)',
            '14+4': 'calc(14px + 4 * (100vw - 320px) / 928)',
            '18+7': 'calc(18px + 7 * (100vw - 320px) / 928)',
            '20+25': 'calc(20px + 25 * (100vw - 320px) / 928)',
            '23+72': 'calc(23px + 72 * (100vw - 320px) / 928)',
            '27+50': 'calc(27px + 50 * (100vw - 320px) / 928)',
        },

        extend: {
            spacing: {
                'fluid-1': 'calc(5px + 4 * (100vw - 320px) / 928)',
                '10+10': 'calc(10px + 10 * (100vw - 320px) / 928)',
                '30+30': 'calc(30px + 30 * (100vw - 320px) / 928)',
                '52+20': 'calc(52px + 20 * (100vw - 320px) / 928)',
                '70+15': 'calc(70px + 15 * (100vw - 320px) / 928)',
                '80+30': 'calc(80px + 30 * (100vw - 320px) / 928)',
            },
            maxWidth: {
                '120+50': 'calc(120px + 50 * (100vw - 320px) / 928)',
            },
            height: {
                '25+2': 'calc(25px + 2 * (100vw - 320px) / 928)',
                '380+115': 'calc(380px + 115 * (100vw - 320px) / 928)',
            },
            colors: {
                'primary-color': '#0505af',
                'second-color': '#fff',
                'third-color': '#f36429',
                'primary-black': 'rgb(20 20 43)',
                'dark-grey': 'rgb(188, 190, 208)',
                'light-grey': 'rgb(249 250 251)',
            },
            lineHeight: {
                '25+60': 'calc(25px + 60 * (100vw - 320px) / 928)',
                '30+15': 'calc(30px + 15 * (100vw - 320px) / 928)',
            },
            letterSpacing: {
                tight: 'calc(-1px - 5 * (100vw - 320px) / 928)',
            },
            backgroundImage: {
                'project-msg': "url('../../public/chat-group.png')",
                wave: `url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
                'hover-wave': `url("data:image/svg+xml;charset=utf8,%3Csvg id='squiggle-link' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' xmlns:ev='http://www.w3.org/2001/xml-events' viewBox='0 0 20 4'%3E%3Cstyle type='text/css'%3E.squiggle{animation:shift .6s linear infinite;}@keyframes shift {from {transform:translateX(0);}to {transform:translateX(-20px);}}%3C/style%3E%3Cpath fill='none' stroke='%23fff' stroke-width='2' class='squiggle' d='M0,3.5 c 5,0,5,-3,10,-3 s 5,3,10,3 c 5,0,5,-3,10,-3 s 5,3,10,3'/%3E%3C/svg%3E")`,
            },
        },
    },
    plugins: [],
};
