var operation,
    contacts;

var generateId = function() {
  var last_id = 1;
  return function() {
    return last_id++;
  }
}();

function Contact(obj) {
  if (obj.id) {
    this.id = +obj.id;
  } else {
    this.id = generateId();
  }
  this.fullname = obj.fullname;
  this.phone = obj.phone;
  this.email = obj.email;
}

Contact.prototype = {
  same: function(contact) {
    return this.id === contact.id;
  },
};

(function(){
  contacts = {
    collection: [],
    add: function (contact) {
      this.collection.push(contact);
    },
    update: function(contact) {
      this.collection.forEach(function(c) {
        if (c.id === contact.id) {
           Object.assign(c, contact);
        }
      })
    },
    delete: function(id) {
      this.collection = this.collection.filter(function(o){
        return o.id !== id;
      });
    },
    exist: function(contact) {
      return this.collection.some(function(c) {
        return c.id === contact.id;
      });
    },
    init: function () {
      console.log("contacts init");
    }
  };

  view = {
    addContact: function(contact) {
      $contact = $(this.template(contact))
      $contact .data("contact", contact);
      $("#contacts").append($contact);
    },
    updateContact: function(contact) {
      $contact = $("#contacts").find(".contact").filter(function(idx, el) {
        return $(el).data().contact.id === contact.id;
      });
      $contact.replaceWith($(this.template(contact)));
    },
    deleteContact: function($contact) {
      $contact.remove();
    },
    updateMessage: function() {
      if ($("#contacts").find(":visible").length === 0) {
        $("#message").show().find("p").text("There is no contacts.");
      }
    },
    editing: function(contact) {
      var $form = $("form");


      if (!!contact) {
        $form.find("h2").text("Edit Contact");
        for (var prop in contact) {
          $form.find("input[name=" + prop + "]").val(contact[prop]);
        }
      }
      $(".container").show();
      // $(".container").show().animate({
      //   top: 0,
      //   display: "block"
      // }, 500);
      $("#operation").hide();
      $("#contacts").hide();
      $("#message").hide();
    },
  };

  operation = {
    add: function(e) {
      e.preventDefault();
      $("form").show();
    },
    submit: function(e) {
      e.preventDefault();

      var obj = {};
      $("form").serializeArray().forEach(function(field) {
        obj[field.name] = field.value;
      });
      var contact = new Contact(obj);
      if (contacts.exist(contact)) {
        contacts.update(contact);
        view.updateContact(contact);
      } else {
        contacts.add(contact);
        view.addContact(contact);
      }
      $("#contacts").show();
      $("form").slideDown();

    },
    cancel: function(e) {
      e.preventDefault();
    },
    edit: function(e) {
      e.preventDefault();
      $contact = $(e.target.closest(".contact"));
      var contact = $contact.data("contact");
      view.editing(contact);
    },
    delete: function(e) {
      e.preventDefault();
      $contact = $(e.target.closest(".contact"));
      var id = $contact.data().contact.id;
      contacts.delete(id);
      view.deleteContact($contact);
      view.updateMessage();
    },
    cacheTemplate: function() {
      view.template = Handlebars.compile($("#contact").html());
    },
    bindEvents: function() {
      $(".add").on("click", this.add.bind(this));
      $("form").on("submit", this.submit.bind(this));
      $("form").on("reset", this.cancel.bind(this));
      $("#contacts").on("click", "a.edit", this.edit.bind(this));
      $("#contacts").on("click", "a.delete", this.delete.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplate();
       var contact = new Contact({fullname: "kwen", phone: 123, email: "abc@soi.com"});
       contacts.add(contact);
       view.addContact(contact);
    }
  };
})();$(operation.init.bind(operation));
