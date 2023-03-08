import React, { useEffect, useState } from 'react'
import { SearchOutlined } from '@ant-design/icons'
import Banner from '../../components/Banner'
import ajax from '../../utils/request'
import { NavLink } from 'react-router-dom'
function Index() {
    const [picture, setPicture] = useState([])
    const [nav, setNav] = useState([])
    useEffect(() => {
        ajax.get("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f").then(res => {
            setPicture(res.data)
        })
        ajax.get("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f").then(res => {
            setNav(res.data)
        })
    }, [])
    return (
        <div className='home'>
            <header>
                <div className="left"><NavLink to="/goods/classify/item"><span className='iconfont icon-list'></span>
                </NavLink></div>
                <div className="input-box">
                    <SearchOutlined style={{ color: '#fff' }} />
                    <input placeholder='请输入宝贝名称' />
                </div>
                <div className="right">
                    {
                        localStorage.token ? <span className='iconfont icon-list'></span> : '登录'
                    }
                </div>
            </header>
            <main>
                <Banner picture={picture} />
                <nav>
                    {
                        nav.length ? nav.map((v, i) => (<div key={i}>
                            <NavLink to={`/goods/classify/item?cid=${v.cid}`}>
                                <img src={v.image} alt="" />
                                <p>{v.title}</p>
                            </NavLink>
                        </div>)) : ""
                    }
                </nav>
            </main>
        </div>
    )
}

export default Index
