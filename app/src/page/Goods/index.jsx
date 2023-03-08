import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import Classify from '../Classify'

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
