import React, {useEffect} from 'react'

export default function DocumentTitle(props) {

    useEffect(() => {
        // behaviour to be run includes the side effect
        document.title = props.title; //side effect
    }, []); //array of dependencies, determines when the effect will run
    // [] run once on the first render
    // [props.title] run whenever props.title changes

    return (
        <div>
            <p>Updating Title</p>
        </div>
    )
}
