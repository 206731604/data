import React, { lazy } from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
const Classify = lazy(() => import("../Classify"))
function Goods() {
    return (
        <div className='classify'>
            <Switch>
                <Route path='/goods/classify' component={Classify} />
                <Redirect to='/goods/classify' />
            </Switch>
        </div>
    )
}

export default Goods
