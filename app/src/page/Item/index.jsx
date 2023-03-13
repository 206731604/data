import React, { useEffect, useState } from 'react'
import ajax from '../../utils/request'
import { LeftOutlined } from '@ant-design/icons'
// import qs from 'qs'
import Card from '../../components/Card'
const Item = ({ history, location }) => {
    let [cid, setCid] = useState('492')
    let [menu, setMenu] = useState([])
    let [show, setShow] = useState([])
    useEffect(() => {
        if (location.search) {
            let str = location.search.substr(1)
            let cid = str.split('=')[1]
            acquire(cid)
        } else {
            ajax.get(`http://vueshop.glbuys.com/api/home/category/show?cid=${cid}&token=1ec949a15fb709370f`).then(res => {
                setShow(res.data)
            })
        }
        ajax.get("http://vueshop.glbuys.com/api/home/category/menu?token=1ec949a15fb709370f").then(res => {
            setMenu(res.data)
        })
    }, [])
    const acquire = (cid) => {
        setCid(cid)
        history.push(`/goods/classify/item?cid=${cid}`)
        ajax.get(`http://vueshop.glbuys.com/api/home/category/show?cid=${cid}&token=1ec949a15fb709370f`).then(res => {
            setShow(res.data)
        })
    }
    const back = () => {
        history.push("/")
    }
    return (
        <div className='item'>
            <header>
                <div className="left" onClick={back}><LeftOutlined style={{ fontSize: 25 }} /></div>
                <div className="input-box">
                    <input type="text" placeholder='请输入宝贝名称' />
                </div>
                <div className="right"></div>
            </header>
            <main>
                <div className="left">
                    {
                        menu.length ? menu.map((v, i) => (<div key={i} className={cid === v.cid ? 'active' : ""} onClick={() => acquire(v.cid)}>{v.title}</div>)) : ""
                    }
                </div>
                <div className="right">
                    {
                        show === '没有数据' ? "没有数据" : show.map((v, i) => (<Card history={history} location={location} title={v.title} goods={v.goods} key={i} />))
                    }
                </div>
            </main>
        </div>
    )
}

export default Item
