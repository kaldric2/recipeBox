import React from 'react';
import ModalEditorBox from './modal/ModalEditorBox'
import RecipeBox from './recipe/RecipeBox'

export default React.createClass({
    getInitialState: function() {
        var recipeStore = [];
        // localStorage.clear();
        if (localStorage.getItem("storedRecipes")) {
            recipeStore = JSON.parse(localStorage.getItem("storedRecipes"));
        } else {
            recipeStore = [
                {title: "Recipe 1",
                 ingredients: "onions, pickles, chocolate, bread".split(",")},
                {title: "Recipe 2",
                ingredients: "paprika, salami, salad, mustard".split(",")},
                {title: "Recipe 3",
                 ingredients: "sugar, lemon, coffee, Doritos".split(",")}
            ];
        }
        return {
            storedRecipes: recipeStore
        };
    },
    // componentDidMount() {
    //     console.log("RecipeBoxApp did mount");
    //     var test = [
    //         {title: "Recipe 5000",
    //         ingredients: "love, joy, awesomeness, ketchup".split(",")},
    //         {title: "Recipe one million",
    //         ingredients: "candy, rainbows".split(",")}
    //     ];
    //     if (typeof(Storage) !== "undefined") {
    //         localStorage.setItem("storedRecipes", JSON.stringify(test));
    //         console.log("Set localStorage");
    //     } else {
    //         console.log("No web storage support");
    //     }
    // },
    // componentWillUnmount() {
    //     console.log("RecipeBoxApp will unmount");
    // },
    render() {
        return (
            //TODO: add functionality to serve modal or recipe
            <RecipeBox storedRecipes={this.state.storedRecipes}/>
        )
    }
});
