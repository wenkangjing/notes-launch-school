var contact_manager, 
    contacts,
    view; 

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

//
// Constructor
//
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
  if (Array.isArray(obj.tags)) {
    this.tags = obj.tags;
  } else if (typeof obj.tags === "string" && obj.tags !== "") {
    this.tags = obj.tags.split(",").map(function(tag) {
      return tag.trim();
    });
  } else {
    // no tags
  }
}

Contact.prototype = {
  same: function(ct) {
    return this.id === ct.id;
  }
};

(function(){
  contacts = {
    collection: [],
    add: function (contact) {
      this.collection.push(contact);
      this.save();
    },
    update: function(contact) {
      this.collection.forEach(function(ct) {
        if (ct.id === contact.id) {
           Object.assign(ct, contact);
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
    contains: function(contact) {
      return this.collection.some(function(ct) {
        return ct.same(contact);
      });
    },
    load: function() {
      var stored = JSON.parse(localStorage.getItem("contacts"));
      if (!!stored) {
        stored.forEach(function(o){
          contacts.collection.push(new Contact(o));
        });
      }
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
      var $new_contact = $(this.template(contact));
          $contact = $("#contacts").find(".contact").filter(function(idx, el) {
        var data = $(el).data("contact");
        if (data) {
          return data.id === contact.id;
        } else {
          return false;
        }
      });
      
      $new_contact.data("contact", contact);
      $contact.replaceWith($new_contact);
    },
    deleteContact: function($contact) {
      $contact.remove();
      this.updateMessage();
    },
    updateMessage: function() {
      var $message = $("#message"),
          keyword = $("#search").val();
      if (contacts.collection.length === 0) {
        $message.show().find("p").text("There is no contacts.");
         $message.find(".button").show();
      }
      else if ($("#contacts").find(":visible").length === 0) {
        $message.show().find("p").text("There is no contacts starting with " + keyword +  ".");
        $message.find(".button").hide();
      } else {
        $message.hide();
      }
    },
    filterContact: function(keyword) {
      $(".contact").each(function(idx, el) {
        var contact = $(el).data("contact");
        var visible = !!contact && contact.fullname.toLowerCase().indexOf(keyword) !== -1;
        $(el).toggle(visible);
      });
      this.updateMessage();
    },
    tagContact: function(tag) {
      $(".contact").each(function(idx, el) {
        var contact = $(el).data("contact");
        var visible = !!contact && !!contact.tags && contact.tags.indexOf(tag) !== -1;
        $(el).toggle(visible);
      });
      this.updateMessage();
    },
    editMode: function(contact) {
      var $form = $("form");
      if (!!contact) {
        $form.find("h2").text("Edit Contact");
        for (var prop in contact) {
          $form.find("input[name=" + prop + "]").val(contact[prop]);
        }
      } else {
        $form.find("h2").text("Create Contact");
        $form.find("input:has(name)").val("");
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
    onAdd: function(e) {
      e.preventDefault();
      view.editMode();
    },
    onSubmit: function(e) {
      e.preventDefault();
      var obj = {};
      $("form").serializeArray().forEach(function(field) {
        obj[field.name] = field.value.trim();
      });
      var contact = new Contact(obj);
      if (contacts.contains(contact)) {
        contacts.update(contact);
        view.updateContact(contact);
      } else {
        contacts.add(contact);
        view.addContact(contact);
      }
      view.readMode();
    },
    onCancel: function(e) {
      e.preventDefault();
      view.readMode();
    },
    onEdit: function(e) {
      e.preventDefault();
      $contact = $(e.target.closest(".contact"));
      var contact = $contact.data("contact");
      if (contact) {
        view.editMode(contact);
      } else {
        console.log("Contact not found");
      }
    },
    onDelete: function(e) {
      e.preventDefault();
      if (confirm("Are you sure to delete contact?")) {
        $contact = $(e.target.closest(".contact"));
        var contact = $contact.data("contact");
        if (contact) {
          contacts.delete(contact.id);
          view.deleteContact($contact);
        } else {
          console.log("Contact not found", contact);
        }
      }
    },
    onFilterByKeyword: function(e) {
      var $search = $("#search"),
          keyword = $search.val().toLowerCase();

      // ESC
      if (e.which === 27) {
        $search.val("");
        keyword = "";
      }
      view.filterContact(keyword);
    },
    onFilterByTag: function(e) {
      e.preventDefault();
      view.tagContact($(e.target).text());
    },
    cacheTemplate: function() {
      view.template = Handlebars.compile($("#contact").html());
    },
    bindEvents: function() {
      $(".add").on("click", this.onAdd.bind(this));
      $("form").on("submit", this.onSubmit.bind(this));
      $("form").on("reset", this.onCancel.bind(this));
      $("#contacts").on("click", "a.edit", this.onEdit.bind(this));
      $("#contacts").on("click", "a.delete", this.onDelete.bind(this));
      $("#contacts").on("click", "span.tag", this.onFilterByTag.bind(this));
      $("#search").on("keyup", this.onFilterByKeyword.bind(this));
      $(document).on("keyup", this.onFilterByKeyword.bind(this));
    },
    init: function() {
      this.bindEvents();
      this.cacheTemplate();
      contacts.init();
      if (contacts.collection.length === 0) {
        contacts.add(new Contact({fullname: "Tony", phone: 123, email: "abc@soi.com", tags: ["marketing", "manager"]}));
        contacts.add(new Contact({fullname: "kog ko", phone: 45648, email: "abc@er.cji.com", tags: ["sales", "marketing"]}));
        contacts.add(new Contact({fullname: "PP", phone: 3095783, email: "abc@soi.com", tags: ["R&D", "Developer"]}));
        contacts.add(new Contact({fullname: "Hok", phone: 439067, email: "abc@soi.com", tags: ["Finance", "Exec"]}));
        contacts.add(new Contact({fullname: "Mazz", phone: 587895465, email: "abc@soi.com", tags: ["HR", "Exec"]}));
        contacts.add(new Contact({fullname: "J Wong Jr ", phone: 55752465, email: "abc@soi.com"}));
      }
      view.init();
    }
  };
})();$(contact_manager.init.bind(contact_manager));
