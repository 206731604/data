import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
const Item = lazy(() => import('../../detail/item'))
function Details() {
    return (
        <Switch>
            <Route path='/goods/details/item' component={Item} />
            <Redirect to='/goods/details/item' />
        </Switch>
    )
}

export default Details
