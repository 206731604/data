import React, { useEffect, useRef, useState } from 'react'
import { HeartOutlined, SearchOutlined } from '@ant-design/icons'
import Banner from '../../components/Banner'
import ajax from '../../utils/request'
import { NavLink } from 'react-router-dom'
function Index() {
	const [picture, setPicture] = useState([])
	const [nav, setNav] = useState([])
	const [recom, setRecom] = useState([])
	const ref = useRef()
	const [modality, setModality] = useState({
		background: "transparent"
	})
	useEffect(() => {

		ajax.get("http://vueshop.glbuys.com/api/home/index/slide?token=1ec949a15fb709370f").then(res => {
			setPicture(res.data)
		})
		ajax.get("http://vueshop.glbuys.com/api/home/index/nav?token=1ec949a15fb709370f").then(res => {
			setNav(res.data)
		})
		ajax.get("http://vueshop.glbuys.com/api/home/index/recom?token=1ec949a15fb709370f").then(res => {
			setRecom(res.data)
		})
	}, [])
	const change = () => {
		if (ref.current.scrollTop >= 280) {
			setModality({
				background: 'linear-gradient(#eb1625,hsla(0,0%,100%,0))'
			})
		} else {
			setModality({
				background: 'transparent'
			})
		}
	}
	return (
		<div className='home'>
			<header style={modality}>
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
			<main ref={ref} onScroll={change}>
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
				<div className="recom-nav">
					<div className="line"></div>
					<div className="recom-wrap">
						<HeartOutlined />
						为你推荐
					</div>
					<div className="line"></div>
				</div>
				<div className="recom-box">
					{
						recom.length ? recom.map((v, i) => (
							<div key={i}>
								<div className="recom-img">
									<img src={v.image} alt="" />
								</div>
								<div className="recom-title">
									{v.title}
								</div>
								<div className="recom-price">
									￥{v.price}
								</div>
							</div>
						)) : ""
					}
				</div>
			</main>
		</div>
	)
}

export default Index
