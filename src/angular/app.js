var emailbox = angular.module('emailbox', []);

emailbox.controller('EmailBoxController', function EmailBoxController($scope){
  $scope.emails = [
    {
      from: "テスター1 \u003Ctester15@test.example.com\u003E",
      to: "テスター2 \u003Ctester40@test.example.com\u003E",
      subject: "テスト Test test Subject subject",
      date: "15:10",
      content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi molestie, mi id finibus tristique, elit augue cursus quam, sed malesuada mauris neque eu ante. Phasellus molestie tempor accumsan. Nam aliquet sapien eget erat pulvinar, eu mollis augue iaculis. Duis sit amet tempor urna. Mauris condimentum vel ex nec rhoncus. Aenean venenatis, odio at convallis laoreet, augue magna tristique ex, id vestibulum est risus vel turpis. Fusce non feugiat ipsum. Mauris non erat nec ante laoreet pharetra finibus eget neque. Donec libero nisl, convallis eu tincidunt sed, scelerisque sed dolor. Pellentesque eget pharetra quam. Praesent nec auctor velit. Aliquam erat volutpat. Vestibulum fringilla lectus et ipsum porttitor, id maximus nibh congue. Vestibulum convallis turpis et hendrerit ultrices. In feugiat ultrices sollicitudin."
    },
    {
      from: "テスター1 \u003Ctester15@test.example.com\u003E",
      to: "テスター2 \u003Ctester40@test.example.com\u003E",
      subject: "テスト Test test Subject subject",
      date: "14:10",
      content: "Praesent non dui nisl. Vestibulum fringilla velit vel nisi porta, a consectetur purus auctor. Aliquam erat volutpat. Maecenas rhoncus pellentesque purus, nec luctus quam laoreet ut. Maecenas dapibus mollis nisl nec ullamcorper. In id ultricies nisl. Aliquam nec nibh sit amet tellus convallis vulputate eu elementum enim."
    },
    {
      from: "テスター1 \u003Ctester15@test.example.com\u003E",
      to: "テスター2 \u003Ctester40@test.example.com\u003E",
      subject: "テスト Test test Subject subject",
      date: "14:10",
      content: "Aliquam erat volutpat. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. In hac habitasse platea dictumst. Integer lobortis finibus metus, id dictum odio interdum vitae. Proin nec lorem non arcu cursus feugiat. Suspendisse vestibulum erat ac sapien placerat, sit amet feugiat urna iaculis. Vestibulum tempus bibendum pharetra. Nam bibendum ante quis mollis consectetur. Aliquam erat volutpat. Nulla aliquet finibus porta. Integer in libero id est dapibus bibendum. Proin non magna quis lorem vehicula placerat. Suspendisse feugiat mi vitae arcu tempor, nec lacinia diam consectetur. Nulla justo est, imperdiet in vestibulum vel, sodales quis orci. Pellentesque dictum scelerisque libero ut mattis. Cras eleifend est sem, elementum tincidunt orci convallis sit amet."
    },
    {
      from: "テスター1 \u003Ctester15@test.example.com\u003E",
      to: "テスター2 \u003Ctester40@test.example.com\u003E",
      subject: "テスト Test test Subject subject",
      date: "14:10",
      content: "Vivamus posuere turpis ac nibh semper, nec finibus leo pulvinar. Aenean quis lectus vehicula, consectetur orci vitae, molestie turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer dui sem, mollis et turpis in, venenatis elementum turpis. Fusce mollis justo vel quam feugiat, aliquet finibus metus gravida. In quis porttitor est. Nunc nec risus condimentum, posuere felis pretium, vulputate lacus. Praesent quis aliquam nunc. Maecenas fringilla bibendum diam in egestas. Cras porttitor aliquet ullamcorper."
    }
  ];
})
