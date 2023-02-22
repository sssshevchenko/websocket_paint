import React from 'react';
import canvasState from '../store/canvasState';
import toolState from '../store/toolState';
import '../styles/toolbar.scss';

const SettingBar = () => {
    return (
        <div className='setting-bar'>
            <label htmlFor="line-width">Толщина линии</label>
            <input 
                onChange={e => toolState.setLineWidth(e.target.value, canvasState.socket, canvasState.sessionid)}
                style={{margin: '0 10px'}} 
                id='line-width' 
                type="number" 
                defaultValue={1} 
                min={1} 
                max={50} 
            />
            <label htmlFor="stroke-color">Цвет обводки</label>
            <input 
                style={{margin: '0 10px'}} 
                onChange={e => toolState.setStrokeStyle(e.target.value, canvasState.socket, canvasState.sessionid)} 
                id='stroke-color' 
                type="color" 
            />
        </div>
    );
    
};
export default SettingBar;