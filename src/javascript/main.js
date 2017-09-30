"use strict";

var json = [
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
];

function toArray(obj) {
  var array = [];
  // iterate backwards ensuring that length is an UInt32
  for (var i = obj.length >>> 0; i--;) {
    array[i] = obj[i];
  }
  return array;
}

(function() {
  var table = document.getElementsByTagName('table')[0].querySelector('tbody');
  var header = table.querySelector('tr');
  var msg = '';
  for (var i = 0; i < json.length; i++) {
    msg += '<tr class="emailbox_row email_row ' + i + '">';
    msg += '<td class="emailbox_cell">';
    msg += '<span class="email_from">' + json[i].from + '</span>';
    msg += '</td>';
    msg += '<td class="emailbox_cell">';
    msg += '<img class="emailbox_addressImg" src="src/images/addresses.png" />';
    msg += '<span class="email_to">' + json[i].to + '</span>';
    msg += '</td>';
    msg += '<td class="emailbox_cell">';
    msg += '<span class="email_subject">' + json[i].subject + '</span><span class="email_date">' + json[i].date + '</span>';
    msg += '</td>';
    msg += '<td class="emailbox_cell">';
    msg += '<span class="email_date date">' + json[i].date + '</span>';
    msg += '</td>';
    msg += '</tr>';
    msg += '<tr class="emailbox_row emailbox_row_content hidden">';
    msg += '<td class="email_content" colspan="4">' + json[i].content + '</td>';
    msg += '</tr>'
  }
  table.innerHTML += msg;
})();

(function(){
  var rows = document.querySelectorAll('.email_row');
  rows = toArray(rows);
  rows.forEach(function(row){
    row.addEventListener('click', function(e) {
      var content = row.nextSibling;
      content.classList.toggle('hidden');
    })
  })
})();

(function(){
  var count = document.querySelector('.mail_count');
  count.textContent = json.length;
})();

(function(){
  var date = document.querySelector('.header_date');
  var rows = document.querySelectorAll('.email_row');
  var table = document.getElementsByTagName('table')[0];
  var tbody = table.getElementsByTagName('tbody')[0];

  rows = toArray(rows);

  function append(rows) {
    rows.forEach(function(row){
      tbody.appendChild(row);
    })
    table.appendChild(tbody);
  }
  function sort(){
    rows = rows.sort(function(a,b){
      a = a.querySelector('.date').textContent;
      b = b.querySelector('.date').textContent;
      a = a.split(':');
      b = b.split(':');
      a = Number(a[0]) * 60 + Number(a[1]);
      b = Number(b[0]) * 60 + Number(b[1]);
      return a - b;
    })
    append(rows);
  }
  date.addEventListener('click', function(){
    if (date.classList.contains("ascending") || date.classList.contains("descending")) {
      console.log('contains one');
      date.classList.toggle('ascending');
      date.classList.toggle('descending');
      append(rows.reverse());
    } else {
      console.log('contains');
      date.classList.replace('unsorted', 'ascending');
      sort();
    }
  })
})();
