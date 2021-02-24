import React from 'react'
import Setting from './config/Setting.json'
import './Meau.css'

// 頁面切換選單
export default class Meau extends React.Component{
    render(){
        const Top = Setting.Meau.Top.map(item => {
            return (<a key={item.Key} href={item.Path}>
                <div className="MenuItem">
                    <div>{item.Display}</div>
                </div>
            </a>)
        })
        const City = Setting.Meau.City.map(item => {
            return (<a key={item.Key} href={item.Path}>
                <div className="MenuItem">
                    <div>{item.Display}</div>
                </div>
            </a>)
        })

        return (
            <div className="Meau">
                <div className="MenuBlock">
                    {Top}
                </div>
                <div className="MenuBlock">
                    {City}
                </div>
            </div>
        )
    }
}