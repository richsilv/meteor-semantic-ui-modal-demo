if (Meteor.isClient) {

  Template.buttons.events({
    'click [data-action="confirm-modal"]': function() {
      // increment the counter when button is clicked
      SemanticModal.confirmModal({
        header: "Example Modal",
        message: "This is an example of a general confirm modal. " +  
                  "You don't need to supply a template for this type of modal, just the contents. " + 
                  "Click a button, please.",
        callback: function() {
          console.log("You clicked okay!");
        }
      }, function() {
        console.log("The modal has just been shown");
      });
    },
    'click [data-action="general-modal"]': function() {
      SemanticModal.generalModal('generalModal', {foo: 'bar'});
    }
  });

  Template.generalModal.events({
    'click button': function () {
      alert("You clicked the button!  This wouldn't have fired without the modal being wrapped in a second template!");
    }
  });

}

if (Meteor.isServer) {
  Meteor.startup(function() {
    // code to run on server at startup
  });
}