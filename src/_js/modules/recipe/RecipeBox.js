import React from 'react'
import RecipeHeader from './RecipeHeader'
import RecipeList from './RecipeList'

export default React.createClass({
    render() {
        return (
            <div>
                <RecipeHeader/>
                <RecipeList recipes={this.props.storedRecipes}/>
            </div>
        )
    }
})
