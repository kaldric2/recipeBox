import React from 'react'
import RLEditButton from './RLEditButton'
import RLDeleteButton from './RLDeleteButton'

import Collapsible from 'react-collapsible'

export default React.createClass({
    render() {
        var ingredients = [];
        this.props.ingredients.forEach((element, idx)=>{
            ingredients.push(<li key={idx}>{element}</li>);
        })
        return (
            <Collapsible trigger={this.props.title}>
                <div>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
                <RLEditButton/><RLDeleteButton/>
            </Collapsible>
        )
    }
})
