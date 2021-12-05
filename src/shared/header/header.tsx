import React from "react";
import { GlobalSvgSelector } from "../../assets/img/icons/global/GlobalSvgSelector";
import Select from 'react-select';

import s from './header.module.scss';


interface Props {

}


export const Header = (props: Props) => {
    const options = [
        { value: 'city-1', label: 'Москва' },
        { value: 'city-2', label: 'Уфа' },
        { value: 'city-3', label: 'Новокузнецк' }
    ]

    const colourStyles = {
        control: (styles: any) => ({
            ...styles,
            backgroundColor: 0 ? '#4f4f4f' : 'rgba(71, 147, 255, .2)',
            width: '194px',
            height: '37px',
            border: 'none',
            borderRadius: '10px',
            zIndex: 100,


        }),
        singleValue: (styles: any) => ({
            ...styles,
           color: 0 ? '#fff' : '#000',


        })
    }

    return (
        <header className={s.header}>
            <div className={s.wrapper}>
                <div className={s.logo}><GlobalSvgSelector id='header-logo' /></div>
                <div className={s.title}>React weather</div>
            </div>
            <div className={s.wrapper}>
                <div className={s.change_theme}>
                    <GlobalSvgSelector id='change-theme' />

                </div>
                <Select defaultValue={options[0]} styles={colourStyles} options={options} />
            </div>

        </header>
    )
}