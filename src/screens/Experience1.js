import './styles/Experience.css'

import { useState, useEffect } from 'react'

const Experience = () => {
    const [poudlard, setPoudlard] = useState(false)
    const [starLove, setStarLove] = useState(false)
    const [vDNews, setVDNews] = useState(false)

    const poudlardHover = () => {
        setPoudlard(!poudlard);
    }

    const starLoveHover = () => {
        setStarLove(!starLove)
    }

    const vDNewsHover = () => {
        setVDNews(!vDNews)
    }
    
    return (
        <div className="experience">
            <h1>Experience </h1>
            <div className="experienceFirstLine">
                <div className="experienceImg poudlard" onMouseEnter={poudlardHover} onMouseLeave={poudlardHover} >
                    {poudlard ? 
                    <div className="poudlardHover">
                        <h2>Projet Poudlard</h2>
                        <p>Website responsive</p>
                        <p>Website responsive</p>
                    </div> : ""}
                </div>
                <div className="experienceImg starLove" onMouseEnter={starLoveHover} onMouseLeave={starLoveHover}>
                    {starLove ? 
                    <div className="starLoveHover">
                        <h2>Hackathon StarLove</h2>
                    </div> : ""}
                </div>
                <div className="experienceImg vDNews" onMouseEnter={vDNewsHover} onMouseLeave={vDNewsHover}>
                    {vDNews ? 
                    <div className="vDNewsHover">
                        <h2>Projet Veilleurs de News</h2>
                    </div> : ""}
                </div>
            </div>
        </div>
    )
}

export default Experience

