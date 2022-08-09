import React, { Component } from 'react'

import ComponentC from './ComponentC'

import { UserProvider } from './userContext'
import ExampleContext from './ExampleContext'
import Middleman from './Middleman'
class IndexContext extends Component {
    render() {
        const data = { name: "abc" };
        return (
            <ExampleContext.Provider value={data}>
                <Middleman />
            </ExampleContext.Provider>
        )
    }
}

export default IndexContext;