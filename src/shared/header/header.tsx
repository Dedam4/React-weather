import React, { useEffect, useState } from "react";
import { GlobalSvgSelector } from "../../assets/img/icons/global/GlobalSvgSelector";
import Select from 'react-select';

import s from './header.module.scss';


interface Props {

}


export const Header = (props: Props) => {
    const [theme, setTheme] = useState('light');

    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Уфа' },
        { value: 'city-3', label: 'Новокузнецк' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: theme === 'dark' ? '#4f4f4f' : 'rgba(71, 147, 255, .2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,


        }),
        singleValue: (styles: any) => ({
            ...styles,
           color: theme === 'dark' ? '#fff' : '#000',


        })
    }
  
    function changeTheme()
    {
        setTheme(theme === 'light' ? 'dark' : 'light' );

      

    }

    useEffect(() => {
        const root = document.querySelector(':root') as HTMLElement;

        const components = ['body-background', 'components-background', 'card-background', 'card-shadow', 'text-color'];

        components.forEach((components) =>{
            root.style.setProperty(`--${components}-default`, `var(--${components}-${theme})`);


        });
       
    }, [theme])
    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme} onClick={changeTheme}>
                    <GlobalSvgSelector id='change-theme' />

                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>

        </header>
    )
}