var operation, // controller
    contacts; // data model

//
// Helper functions
//
var generateId = function() {
  var last_id = 1;
  return function() {
    return last_id++;
  }
}();

function Contact(obj) {
  if (!(this instanceof Contact)) {
    return new this;
  }
  if (obj.id) {
    this.id = +obj.id;
  } else {
    this.id = generateId();
  }
  this.fullname = obj.fullname;
  this.phone    = obj.phone;
  this.email    = obj.email;
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
    init: function() {
      this.$operation = $("#operation");
      this.$contacts = $("#contacts");
      this.$message = $("#message");
      this.$footer = $(".footer");
    },
    addContact: function(contact) {
      $contact = $(this.template(contact))
      $contact .data("contact", contact);
      this.$contacts.append($contact);
    },
    updateContact: function(data) {
      $contact = this.$contacts.find(".contact").filter(function(idx, el) {
        var contact = $(el).data("contact");
        if (contact) {
          return contact.id === data.id;
        } else {
          return false;
        }
      });
      $contact.replaceWith($(this.template(contact)));
    },
    deleteContact: function($contact) {
      $contact.remove();
    },
    updateMessage: function() {
      if (this.$contacts.find(":visible").length === 0) {
        this.$message.show().find("p").text("There is no contacts.");
      }
    },
    editMode: function(contact) {
      $(".container").hide();
      var top = $(".edit-mode").show().css("height");
      this.$footer.show().css("top", top);
      if (!!contact) {
        var $form = $("form");
        $form.find("h2").text("Edit Contact");
        for (var prop in contact) {
          $form.find("input[name=" + prop + "]").val(contact[prop]);
        }
      }
    },
    readMode: function() {
      $(".container").hide();
      var top = $(".read-mode").show().css("height");
      this.$footer.show().css("top", top);
    }
  };

  operation = {
    add: function(e) {
      e.preventDefault();
      view.editMode();
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
      view.readMode();
    },
    cancel: function(e) {
      e.preventDefault();
      view.readMode();
    },
    edit: function(e) {
      e.preventDefault();
      $contact = $(e.target.closest(".contact"));
      var contact = $contact.data("contact");
      if (contact) {
        view.editMode(contact);
      } else {
        console.log("Contact not found");
      }
    },
    delete: function(e) {
      e.preventDefault();
      $contact = $(e.target.closest(".contact"));
      var contact = $contact.data("contact");
      if (contact) {
        contacts.delete(contact.id);
        view.deleteContact($contact);
        view.updateMessage();
      } else {
        console.log("Contact not found");
      }
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
      view.init();
      // fake contacts
      for (var i = 0; i < 5; i++) {
        var contact = new Contact({fullname: "kwen", phone: 123, email: "abc@soi.com"});
        contacts.add(contact);
        view.addContact(contact);
      }
      view.readMode();
    }
  };
})();$(operation.init.bind(operation));
