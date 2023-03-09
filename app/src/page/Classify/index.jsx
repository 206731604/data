import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
const Item = lazy(() => import('../Item'))

function Classify() {
    return (
        <Switch>
            <Route path='/goods/classify/item' component={Item} />
            <Redirect to='/goods/classify/item' />
        </Switch>
    )
}

export default Classify
