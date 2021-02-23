import React from 'react'
import Setting from './config/Setting.json'
import './Meau.css'

export default class Meau extends React.Component{
    render(){
        const Top = Setting.Meau.Top.map(item => {
            return (<a href={item.Path}>
                <div className="MenuItem">
                    <div>{item.Display}</div>
                </div>
            </a>)
        })
        const City = Setting.Meau.City.map(item => {
            return (<a href={item.Path}>
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