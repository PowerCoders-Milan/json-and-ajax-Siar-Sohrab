let object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!",
    author: "conceptman"
  };
  console.log(object),

  object = {
    id: 1,
    title: "this is a note",
    content: "This is the amazing content of the note!",
    author: "conceptman",
    movie: "hetman",
  };

  var el = JSON.stringify(object);
  var object2 = JSON.parse(el);
  console.log(object2.author);
  
