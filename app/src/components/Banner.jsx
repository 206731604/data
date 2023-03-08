import React, { useEffect, useState } from 'react'

function Banner({ picture }) {
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (picture.length) {
            const timer = setInterval(() => {
                if (index >= picture.length - 1) {
                    setIndex(0)
                } else {
                    setIndex(index + 1)
                }
            }, 1000)
            return () => clearInterval(timer)
        }
    }, [picture, index])
    return (
        <div className="slideshow">
            <div className="slide">
                {
                    picture.length ? picture.map((v, i) => (
                        <img src={v.image} alt="" className={index === i ? "active" : ""} key={i} />
                    )) : ""
                }
            </div>
            <div className="show">
                <ul>
                    {
                        picture.length ? picture.map((v, i) => <li key={i} className={index === i ? "active" : ""} onClick={() => setIndex(i)}></li>) : ""
                    }
                </ul>
            </div>
        </div>
    )
}

export default Banner
