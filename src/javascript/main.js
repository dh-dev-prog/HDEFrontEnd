"use strict";

(function(){
  var emailbox_body = {
    emails : [
      {
        "from": "テスター1 &lt;tester15@test.example.com&gt;",
        "to": "テスター2 &lt;tester40@test.example.com&gt;",
        "subject": "テスト Test test Subject subject",
        "date": "15:10",
        "content": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, mi id finibus tristique, elit augue cursus quam, sed malesuada mauris neque eu ante. Phasellus molestie tempor accumsan. Nam aliquet sapien eget erat pulvinar, eu mollis augue iaculis. Duis sit amet tempor urna. Mauris condimentum vel ex nec rhoncus. Aenean venenatis, odio at convallis laoreet, augue magna tristique ex, id vestibulum est risus vel turpis. Fusce non feugiat ipsum. Mauris non erat nec ante laoreet pharetra finibus eget neque. Donec libero nisl, convallis eu tincidunt sed, scelerisque sed dolor. Pellentesque eget pharetra quam. Praesent nec auctor velit. Aliquam erat volutpat. Vestibulum fringilla lectus et ipsum porttitor, id maximus nibh congue. Vestibulum convallis turpis et hendrerit ultrices. In feugiat ultrices sollicitudin."
      },
      {
        "from": "テスター1 &lt;tester15@test.example.com&gt;",
        "to": "テスター2 &lt;tester40@test.example.com&gt;",
        "subject": "テスト Test test Subject subject",
        "date": "14:10",
        "content": "Praesent non dui nisl. Vestibulum fringilla velit vel nisi porta, a consectetur purus auctor. Aliquam erat volutpat. Maecenas rhoncus pellentesque purus, nec luctus quam laoreet ut. Maecenas dapibus mollis nisl nec ullamcorper. In id ultricies nisl. Aliquam nec nibh sit amet tellus convallis vulputate eu elementum enim."
      },
      {
        "from": "テスター1 &lt;tester15@test.example.com&gt;",
        "to": "テスター2 &lt;tester40@test.example.com&gt;",
        "subject": "テスト Test test Subject subject",
        "date": "16:10",
        "content": "Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Integer lobortis finibus metus, id dictum odio interdum vitae. Proin nec lorem non arcu cursus feugiat. Suspendisse vestibulum erat ac sapien placerat, sit amet feugiat urna iaculis. Vestibulum tempus bibendum pharetra. Nam bibendum ante quis mollis consectetur. Aliquam erat volutpat. Nulla aliquet finibus porta. Integer in libero id est dapibus bibendum. Proin non magna quis lorem vehicula placerat. Suspendisse feugiat mi vitae arcu tempor, nec lacinia diam consectetur. Nulla justo est, imperdiet in vestibulum vel, sodales quis orci. Pellentesque dictum scelerisque libero ut mattis. Cras eleifend est sem, elementum tincidunt orci convallis sit amet."
      },
      {
        "from": "テスター1 &lt;tester15@test.example.com&gt;",
        "to": "テスター2 &lt;tester40@test.example.com&gt;",
        "subject": "テスト Test test Subject subject",
        "date": "12:10",
        "content": "Vivamus posuere turpis ac nibh semper, nec finibus leo pulvinar. Aenean quis lectus vehicula, consectetur orci vitae, molestie turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer dui sem, mollis et turpis in, venenatis elementum turpis. Fusce mollis justo vel quam feugiat, aliquet finibus metus gravida. In quis porttitor est. Nunc nec risus condimentum, posuere felis pretium, vulputate lacus. Praesent quis aliquam nunc. Maecenas fringilla bibendum diam in egestas. Cras porttitor aliquet ullamcorper."
      },
      {
        "from": "テスター1 &lt;tester15@test.example.com&gt;",
        "to": "テスター2 &lt;tester40@test.example.com&gt;",
        "subject": "テスト Test test Subject subject",
        "date": "12:10",
        "content": "Vivamus posuere turpis ac nibh semper, nec finibus leo pulvinar. Aenean quis lectus vehicula, consectetur orci vitae, molestie turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer dui sem, mollis et turpis in, venenatis elementum turpis. Fusce mollis justo vel quam feugiat, aliquet finibus metus gravida. In quis porttitor est. Nunc nec risus condimentum, posuere felis pretium, vulputate lacus. Praesent quis aliquam nunc. Maecenas fringilla bibendum diam in egestas. Cras porttitor aliquet ullamcorper."
      }
    ],
    init: function() {
      this.cacheDom();
      this.bindEvents();
      this.render(this.emails);
    },
    cacheDom: function(){
      this.count = document.querySelector('.mail_count');
      this.date = document.querySelector('.header_date');
      this.table = document.getElementsByTagName('table')[0];
      this.tbody = this.table.querySelector('tbody');
      //this.rows will be available after render() has been called,
      //Or render() needs to be called after cacheDom() to get access to some cache variables.
      this.rows = this.toArray(document.querySelectorAll('.email_row'));
    },
    bindEvents: function(row){
      // Sort the array of emails or reverse it
      this.date.addEventListener('click', this.sortByDate.bind(this));
    },
    render: function(emails) {
      var msg = '';
      if (!emails.length) {
        msg += '<img class="logo" src="src/images/logo.png" />';
      } else {
        for (var i = 0; i < emails.length; i++) {
          msg += '<tr class="emailbox_row email_row">';
          msg += '<td class="emailbox_cell">';
          msg += '<span class="email_from">' + emails[i].from + '</span>';
          msg += '</td>';
          msg += '<td class="emailbox_cell">';
          msg += '<img class="emailbox_addressImg" src="src/images/addresses.png" />';
          msg += '<span class="email_to">' + emails[i].to + '</span>';
          msg += '</td>';
          msg += '<td class="emailbox_cell">';
          msg += '<span class="email_subject">' + emails[i].subject + '</span><span class="email_date"> ' + emails[i].date + '</span>';
          msg += '</td>';
          msg += '<td class="emailbox_cell">';
          msg += '<span class="email_date date">' + emails[i].date + '</span>';
          msg += '</td>';
          msg += '</tr>';
          msg += '<tr class="emailbox_row emailbox_row_content hidden">';
          msg += '<td class="email_content" colspan="4">' + emails[i].content + '</td>';
          msg += '</tr>'
        }
      }
      // Generate the set of rows inside tbody of the table
      this.tbody.innerHTML = msg;
      // Update count of number of results
      this.count.textContent = emails.length;
      // Everytime render() is called with a set of rows(init, sorted, reverse):
      // - Call cacheDom() to make 'this.rows' available,
      this.cacheDom();
      // - And call showContentRow() on each row.
      this.showContentRow();
    },
    showContentRow: function() {
      // Go through each row
      this.rows.forEach(function(row){
        // On click on row
        row.addEventListener('click', function() {
          var content = row.nextSibling;
          // Show the adjacent row which hold the email.content
          content.classList.toggle('hidden');
        })
      })
    },
    sortByDate: function(){
      if (this.date.classList.contains("ascending") || this.date.classList.contains("descending")) {
        this.date.classList.toggle('ascending');
        this.date.classList.toggle('descending');
        this.sorted = this.emails.reverse();
      } else {
        this.date.classList.replace('unsorted', 'ascending');
        this.sortEmails();
      }
      // Call render() with the new sorted array of emails and generate a new set of rows
      this.render(this.sorted)
    },
    sortEmails: function() {
      this.sorted = this.emails.sort(function(a,b){
        a = a.date;
        b = b.date;
        a = a.split(':');
        b = b.split(':');
        a = Number(a[0]) * 60 + Number(a[1]);
        b = Number(b[0]) * 60 + Number(b[1]);
        return a - b;
      })
    },
    toArray: function(obj) {
      return Array.prototype.slice.call(obj);
    }
  };
  emailbox_body.init();
})();
