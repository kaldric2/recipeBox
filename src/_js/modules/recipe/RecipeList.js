import React from 'react'
import Recipe from './Recipe'
import RLEditButton from './RLEditButton'
import RLDeleteButton from './RLDeleteButton'

export default React.createClass({
    render() {
        var recipeRows = [];

        this.props.recipes.forEach((element, idx) => {
            recipeRows.push(<div key={idx}><Recipe key={idx} title={element.title} ingredients={element.ingredients} /><RLEditButton/><RLDeleteButton/></div>);
        });
        return (
            <div id="accordion">
                {recipeRows}
            </div>
        )
    }
})
