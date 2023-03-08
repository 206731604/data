import React from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
import Index from '../Index'
import Cart from '../Cart'
import My from '../My'
function Home() {
	const nav = [
		{
			icon: "icon-home",
			path: "/index",
			title: "首页"
		},
		{
			icon: "icon-shopping",
			path: "/cart",
			title: "购物车"
		},
		{
			icon: "icon-wode",
			path: "/my",
			title: "我的"
		}
	]
	return (
		<div className='App'>
			<section>
				<Switch>
					<Route path='/index' component={Index} />
					<Route path='/cart' component={Cart} />
					<Route path='/my' component={My} />
					<Redirect to='/index' />
				</Switch>
			</section>
			<footer>
				{
					nav.map((v, i) => (<NavLink to={v.path} key={i}>
						<span className={`iconfont ${v.icon}`}></span>
						<p>{v.title}</p>
					</NavLink>))
				}
			</footer>
		</div>
	)
}

export default Home
