
$("#contacts-create").on('click', function(){
  $.ajax({
    url: '/contacts/',
    method: 'POST',
    data: {
      contact: {
        name: $("#contact-name").val(),
        email: $("#contactemail").val(),
        pet_name: ($("#contact-pet_name").val())
      }
    }
  }).done(function(data){
    console.log("Created Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#contact-update").on('click', function(){
  $.ajax({
    url: '/contacts/' + $("#contact-id").val(),
    method: 'PATCH',
    data: {
      contact: {
        name: $("#contact-name").val(),
        email: $("#contact-email").val(),
        pet_name: ($("#contact-pet_name").val())
      }
    }
  }).done(function(data){
    console.log("Updated Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#contact-destroy").on('click', function(){
  $.ajax({
    url: '/contacts/' + $("#contact").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Contact!");
  }).fail(function(data){
    console.error(data);
  });
});

//Person
$("#location-create").on('click', function(){
  $.ajax({
    url: '/locations/',
    method: 'POST',
    data: {
      pet: {
        number: Number($("#location-number").val()),
        street: $("#location-street").val(),
        city: $("#location-city").val()
      }
    }
  }).done(function(data){
    console.log("Created Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#location-update").on('click', function(){
  $.ajax({
    url: '/locations/' + $("#pet-id").val(),
    method: 'PATCH',
    data: {
      person: {
        name: $("#pet-name").val(),
        species: $("#pet-species").val(),
        color: $("#person-color").val()
      }
    }
  }).done(function(data){
    console.log("Updated Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#pet-destroy").on('click', function(){
  $.ajax({
    url: '/pets/' + $("#pet-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

//Roles
$("#pet-create").on('click', function(){
  $.ajax({
    url: '/locations',
    method: 'POST',
    data: {
      location: {
        number: Number$("#loction-name").val()),
        street: $("#pet-location-id").val(),
        person_id: $("#pet-contact-id").val()
      }
    }
  }).done(function(data){
    console.log("Created Pet!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#role-update").on('click', function(){
  $.ajax({
    url: '/roles/' + $("#role-id").val(),
    method: 'PATCH',
    data: {
      role: {
        name: $("#role-name").val(),
        movie_id: $("#role-movie-id").val(),
        person_id: $("#role-person-id").val()
      }
    }
  }).done(function(data){
    console.log("Updated Role!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#role-destroy").on('click', function(){
  $.ajax({
    url: '/roles/' + $("#role-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Role!");
  }).fail(function(data){
    console.error(data);
  });
});

//User
$("#user-create").on('click', function(){
  $.ajax({
    url: '/users',
    method: 'POST',
    data: {
      user: {
        email: $("#user-email").val(),
        username: $("#user-username").val(),
        token: $("#user-token").val(),
        password_digest: $("#user-password-digest").val()
      }
    }
  }).done(function(data){
    console.log("Created User!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#user-update").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'PATCH',
    data: {
      user: {
        email: $("#user-email").val(),
        username: $("#user-username").val(),
        token: $("#user-token").val(),
        password_digest: $("#user-password-digest").val()
      }
    }
  }).done(function(data){
    console.log("Updated User!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#user-destroy").on('click', function(){
  $.ajax({
    url: '/users/' + $("#user-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted User!");
  }).fail(function(data){
    console.error(data);
  });
});

//Reviews
$("#review-create").on('click', function(){
  $.ajax({
    url: '/reviews',
    method: 'POST',
    data: {
      review: {
        score: $("#review-score").val(),
        content: $("#review-content").val()
      }
    }
  }).done(function(data){
    console.log("Created Review!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#review-update").on('click', function(){
  $.ajax({
    url: '/reviews/' + $("#review-id").val(),
    method: 'PATCH',
    data: {
      review: {
        score: $("#review-score").val(),
        content: $("#review-content").val()
      }
    }
  }).done(function(data){
    console.log("Updated Review!");
  }).fail(function(data){
    console.error(data);
  });
});

$("#review-destroy").on('click', function(){
  $.ajax({
    url: '/reviews/' + $("#review-id").val(),
    method: 'DELETE'
  }).done(function(data){
    console.log("Deleted Review!");
  }).fail(function(data){
    console.error(data);
  });
});
