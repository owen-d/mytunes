// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({
  initialize: function(){
    this.model.on('change', function(){
      this.render();
    }, this)
  },

  tagName: 'tr',

template: _.template('<td><i class="fa fa-plus"></i></td><td> <%= playCount %></td><td>(<%= artist %>)</td><td><%= title %></td><td><i class="fa fa-arrow-up"></i></td><td><i class="fa fa-arrow-down"></i></td><td><%= voteCount %></td>'),

  events: {
    'click .fa-plus': function() {
      this.model.enqueue();
    },

  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }

});
