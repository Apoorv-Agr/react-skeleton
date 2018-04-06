var React = require('react');
var createReactClass = require('create-react-class');
var ListItem = require('./ListItem.jsx');

var httpReq = require('../services/httpservice.js');

var List = createReactClass({
  getInitialState : function() {
    return{
      ingredients : []
    };
  },
  // Function for calling services Web requests
  componentWillMount : function() {
    httpReq.get('/ingredients').then(function(data) {
      console.log('response in List.jsx--->',data);
      this.setState({ingredients:data});
    }.bind(this));
  },
  render : function(){
      var listItems = this.state.ingredients.map(function(item) {
        return <ListItem key={item.id} ingredient={item.text} />;
      });
      return(
        <ul>{listItems}</ul>
      );
  }
});

module.exports = List;
