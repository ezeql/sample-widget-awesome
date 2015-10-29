var React = require('react');
var Header = require('./Header.jsx');
var List = require('./List.jsx');

module.exports = React.createClass({
  'displayName': 'BlankPage.jsx',
  getInitialState:function(){
    var items = [
      {id: 1, "liked":false},
      {id: 2, "liked":false},
      {id: 3, "liked":false},
      {id: 4, "liked":false}
    ];

    return {items:items};

  },
  itemClickHandler: function(item){
    var newItems = this.state.items.concat();
    newItems[item.id-1].liked = !newItems[item.id-1].liked;
    this.setState({items:newItems});

  },
  render: function () {
    var title = 'buttons';
    return( 
      <div className='Page'>
        <Header title={title} />
        <List onItemClick={this.itemClickHandler}  items={this.state.items} />
      </div>
    );
  }
})
