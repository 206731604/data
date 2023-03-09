import React from 'react'

function Card({ title, goods }) {
    return (
        <div className='card-box'>
            <div className="title">{title}</div>
            <div className="card">
                {
                    goods === null ? <div></div> : goods.map((v, i) => (<div key={i}><img src={v.image} alt="" /><p>{v.title}</p></div>))
                }
            </div>
        </div>
    )
}

export default Card
