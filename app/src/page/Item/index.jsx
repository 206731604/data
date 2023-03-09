import React, { useEffect, useState } from 'react'
import ajax from '../../utils/request'
import { LeftOutlined } from '@ant-design/icons'
import qs from 'qs'
const Item = ({ history, location }) => {
    let [cid, setCid] = useState('492')
    let [menu, setMenu] = useState([])
    let [show, setShow] = useState([])
    useEffect(() => {
        let cid = ''
        if (location.search) {
            let str = location.search.substr(1)
            cid = str.split('=')[1]
        }
        ajax.get("http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f").then(res => {
            console.log(res)
            setMenu(res.data)
        })
        ajax.get(`http://vueshop.glbuys.com/api/home/category/show?cid=${cid}&token=1ec949a15fb709370f`).then(res => {
            console.log(res)
            setShow(res.data)
        })

    }, [])
    return (
        <div className='item'>
            <header>
                <div className="left"><LeftOutlined style={{ fontSize: 25 }} /></div>
                <div className="input-box">
                    <input type="text" placeholder='请输入宝贝名称' />
                </div>
                <div className="right"></div>
            </header>
            <main>
                <div className="left">
                    {
                        menu.length ? menu.map((v, i) => (<div key={i}>{v.title}</div>)) : ""
                    }
                </div>
                <div className="right">

                </div>
            </main>
        </div>
    )
}

export default Item
