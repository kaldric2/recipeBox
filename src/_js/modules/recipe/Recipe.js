import React from 'react'

export default React.createClass({
    render() {
        var ingredients = [];
        this.props.ingredients.forEach((element, idx)=>{
            ingredients.push(<li key={idx}>{element}</li>);
        })
        return (
            <div>
                <h3>{this.props.title}</h3>
                <div>
                    <ul>
                        {ingredients}
                    </ul>
                </div>
            </div>
        )
    }
})
