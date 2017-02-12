var contact_manager, // controller
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

function slideUpShow($el) {
    var outerHeight = $el.css({
      display: "block"
    }).outerHeight();
    
    $el.css({
      overflow: "hidden",
      marginTop: outerHeight,
      outerHeight: 0 
    }).animate({
      marginTop: 0,
      outerHeight: outerHeight
    }, 500);
}

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
      this.save();
    },
    update: function(contact) {
      this.collection.forEach(function(c) {
        if (c.id === contact.id) {
           Object.assign(c, contact);
        }
      });
      this.save();
    },
    delete: function(id) {
      this.collection = this.collection.filter(function(o){
        return o.id !== id;
      });
      this.save();
    },
    exist: function(contact) {
      return this.collection.some(function(c) {
        return c.id === contact.id;
      });
    },
    load: function() {
      contacts.collection = JSON.parse(localStorage.getItem("contacts"));
    },
    save: function() {
      localStorage.setItem("contacts", JSON.stringify(contacts.collection));
    },
    init: function () {
      this.load();
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
        var data = $(el).data("contact");
        if (data) {
          return data.id === contact.id;
        } else {
          return false;
        }
      });
      $contact.replaceWith($(this.template(contact)));
    },
    deleteContact: function($contact) {
      $contact.remove();
    },
    updateMessage: function(message) {
      var $message = $("#message");
      if (contacts.collection.length === 0) {
        $message.show().find("p").text("There is no contacts.");
      }
      else if ($("#contacts").find(":visible").length === 0) {
        $message.show().find("p").text("There is no contacts starting with " + message +  ".");
        $message.find(".button").hide();
      } else {
        $message.hide();
      }
    },
    filterContact:function(name) {
      $(".contact").each(function(idx, el ) {
        var visible = $(el).data("contact").fullname.toLowerCase().indexOf(name) !== -1;
        $(el).toggle(visible);
      });
    },
    editMode: function(contact) {
      var $form = $("form");
      if (!!contact) {
        $form.find("h2").text("Edit Contact");
        for (var prop in contact) {
          $form.find("input[name=" + prop + "]").val(contact[prop]);
        }
      } else {
         $form.find("input[name=" + prop + "]").val("");
      }
      $("#read-mode").hide();
      slideUpShow($("form"));
    },
    readMode: function() {
      $("form").hide();
      slideUpShow($("#read-mode"));
    },
    init: function() {
      contacts.collection.forEach(function(contact) {
        this.addContact(contact);
      }, this);
      this.readMode();
    }
  };

  contact_manager = {
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
      if (confirm("Are you sure to delete contact?")) {
        $contact = $(e.target.closest(".contact"));
        var contact = $contact.data("contact");
        if (contact) {
          contacts.delete(contact.id);
          view.deleteContact($contact);
          view.updateMessage();
        } else {
          console.log("Contact not found");
        }
      }
    },
    filter: function(e) {
      var keyword = $("#search").val().toLowerCase();
      if (e.which === 27) {
        keyword = "";
        $("#search").val("");
      }
      view.filterContact(keyword);
      view.updateMessage(keyword);
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
      $("#search").on("keyup", this.filter.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplate();
      contacts.init();
      if (contacts.collection.length === 0) {
        contacts.add(new Contact({fullname: "Tony", phone: 123, email: "abc@soi.com"}));
        contacts.add(new Contact({fullname: "kog ko", phone: 45648, email: "abc@er.cji.com"}));
        contacts.add(new Contact({fullname: "PP", phone: 3095783, email: "abc@soi.com"}));
        contacts.add(new Contact({fullname: "Hok", phone: 439067, email: "abc@soi.com"}));
        contacts.add(new Contact({fullname: "Mazz", phone: 587895465, email: "abc@soi.com"}));
        contacts.add(new Contact({fullname: "J Wong Jr ", phone: 55752465, email: "abc@soi.com"}));
      }
      view.init();
    }
  };
})();$(contact_manager.init.bind(contact_manager));
