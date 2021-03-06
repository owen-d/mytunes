// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  defaults: {
    "playCount": 0,
    "voteCount": 0
  },

  play: function(){
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
    this.set('playCount', this.get('playCount')+1);
    // console.log(this.get('playCount'));
  },

  enqueue: function(){
    this.trigger('enqueue', this);
  },

  dequeue: function(){
    this.trigger('dequeue', this);
  },

  ended: function(){
    this.trigger('ended', this);
  },

  voteUp: function(){
    this.set('voteCount', this.get('voteCount')+1);
    this.trigger('voted', this);
  },

  voteDown: function(){
    this.set('voteCount', this.get('voteCount')-1);
    this.trigger('voted', this);
  }



});
