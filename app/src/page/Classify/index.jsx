import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Item from '../Item'

function Classify() {
    return (
        <Switch>
            <Route path='/goods/classify/item' component={Item} />
            <Redirect to='/goods/classify/item' />
        </Switch>
    )
}

export default Classify
