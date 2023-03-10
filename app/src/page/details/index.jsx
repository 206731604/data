import { LeftOutlined, ShoppingCartOutlined } from '@ant-design/icons'
import React, { lazy, useEffect, useState } from 'react'
import { NavLink, Redirect, Route, Switch } from 'react-router-dom'
const Item = lazy(() => import('../../detail/item'))
function Details({ history }) {
    const nav = [
        {
            title: "商品",
            path: "/goods/details/item"
        },
        {
            title: "详情",
            path: "/goods/details/content"
        },
        {
            title: "评价",
            path: "/goods/details/review"
        }
    ]
    const [search, setSearch] = useState()
    useEffect(() => {
        if (history.location.search) {
            setSearch(history.location.search)
        }
    })
    return (
        <div className="details">
            <header>
                <div className="left"><LeftOutlined /></div>
                <div className="center">
                    {
                        nav.length ? nav.map((v, i) => (
                            <div key={i}>
                                <NavLink activeClassName='active' to={`${v.path}${search}`}>{v.title}</NavLink></div>
                        )) : ""
                    }
                </div>
                <div className="right"><ShoppingCartOutlined /></div>
            </header>
            <div className="sub-page">
                <Switch>
                    <Route path='/goods/details/item' component={Item} />
                    <Route path='/goods/details/content' />
                    <Route path='/goods/details/review' />
                    <Redirect to='/goods/details/item' />
                </Switch>
            </div>
        </div>
    )
}

export default Details
