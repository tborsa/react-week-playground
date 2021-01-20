import React, {useEffect, useState} from 'react'

export default function ShowMousePosition() {
    const [coords, setCoords] = useState({x: 0, y:0});
    
    useEffect(() => {
        const updateMousePosition = mousePosition => {
            console.log("update position");
            setCoords({x: mousePosition.clientX, y: mousePosition.clientY});
        }
        document.addEventListener('mousemove',updateMousePosition )
        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
        }
    }, []); //< run the effect once

    return (
        <div>
            <h2>Position</h2>
            <p>x: {coords.x} y: {coords.y}</p>
        </div>
    )
}
