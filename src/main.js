import { wordCount, vowelCount, consCount, getTeaser} from './journal.js';

$(document).ready(function(){
  $('#entry').submit(function(event){
    event.preventDefault();

    function Entry(title, body) {
      this.title = title;
      this.body = body;
    }

    var entryArray = [];
    var title = $('#title').val();
    var body = $('#body').val();
    var newEntry = new Entry(title, body);
    entryArray.push(newEntry);
    entryArray.forEach(function(entry) {
      $('#entries').append("<h2>" + entry.title + "</h2>" + "<h4>" + entry.body + "</h4>");
    });


  });
});
