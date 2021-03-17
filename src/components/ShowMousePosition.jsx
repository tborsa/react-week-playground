import React, {useState, useEffect} from 'react'

export default function ShowMousePosition() {
    const [mousePosition, setMousePosition] = useState({x: 0, y: 0});

    useEffect(() => {
        //once on first render/ or mount of component
        console.log('event listener is added');
        const setXY =  (position) => {
            console.log('Updating position');
            // happen many times
            setMousePosition({x: position.clientX, y: position.clientY}); //triggers a rerender
        };

        document.addEventListener("mousemove", setXY);
        
        return () => {
            //cleanup function used when you have persistent code
            // listeners, intervals, tcp/socket connection
            // run once when the component is unmounted
            console.log('clean up run');
            document.removeEventListener('mousemove', setXY);
        }
    }, []); //[] run once on first load


    return (
        <div>
            <h1 style={{color: `rgb(${mousePosition.x}, ${mousePosition.y}, 100)`}}>
                X: {mousePosition.x} Y: {mousePosition.y}
            </h1>        
        </div>
    )
}
