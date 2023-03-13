import React from 'react'

function Card({ title, goods, history, location }) {
    return (
        <div className='card-box'>
            <div className="title">{title}</div>
            <div className="card">
                {
                    goods === null ? <div></div> : goods.map((v, i) => (
                        <div key={i} onClick={() => history.push(`/goods/details/item?gid=${v.gid}`, { search: location.pathname })}>
                            <img src={v.image} alt="" />
                            <p>{v.title}</p>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Card
