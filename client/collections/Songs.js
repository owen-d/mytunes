// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  sortEm: function(){
    this.sort();
  }

  // initialize: function(){
  //     this.on('voted', function(){console.log('hii')}, this);
  // }

});