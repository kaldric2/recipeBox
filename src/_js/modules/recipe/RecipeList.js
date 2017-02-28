import React from 'react'
import Recipe from './Recipe'

export default React.createClass({
    render() {
        var recipeRows = [];

        this.props.recipes.forEach((element, idx) => {
            recipeRows.push(<div key={idx}><Recipe key={idx} title={element.title} ingredients={element.ingredients} /></div>);
        });
        return (
            <div>
                {recipeRows}
            </div>
        )
    }
})
