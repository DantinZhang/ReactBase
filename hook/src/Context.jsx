import React, { memo, useContext } from 'react'
import { myContext, themeContext } from './MyContext'
const Context = memo(() => {
    
    let my = useContext(myContext);
    let theme = useContext(themeContext);
    console.log(my, theme);//{name: 'zzy', age: 18} {color: 'red', fontSize: '30px'}
    
    return (
        <div>
            <h1>Context</h1>
            <h2>{my.name}-{my.age}</h2>
            <h2 style={{ color: theme.color, fontSize: theme.fontSize }}>Theme</h2>
        </div>
    )
})

export default Context