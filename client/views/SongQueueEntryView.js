// SongQueueEntryView.js - Defines a backbone view class for the song queue entries.
var SongQueueEntryView = Backbone.View.extend({
  // your code here!
  initialize: function(){
    this.model.on('change', function(){
      this.render();
    }, this)
  },

  tagName: 'tr',

  template: _.template('<td><i class="fa fa-times"></i></td><td> <%= playCount %></td><td>(<%= artist %>)</td><td><%= title %></td><td><i class="fa fa-arrow-up"></i></td><td><i class="fa fa-arrow-down"></i></td><td><%= voteCount %></td>'),

  events: {
    'click .fa-times': function() {
      this.model.dequeue();
    }
  },

  render: function(){
    return this.$el.html(this.template(this.model.attributes));
  }
});
