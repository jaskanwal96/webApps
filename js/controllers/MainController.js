app.controller('MainController', ['$scope', function($scope){
  $scope.title = 'The Book of Trees';
  $scope.promo = 'Bookers Award';
  $scope.products = [
    {
      name: 'The Book of Trees' ,
      price: 19,
      pubdate: new Date('2014','03','08'),
      likes: 0,
      dislikes: 0,
      cover: 'http://www.bookoftrees.info/bt/images/cover_640.jpg'
    },
    {
      name: 'Program or be Programmed' ,
      price: 8,
      pubdate: new Date('2013','08','01'),
      likes: 0,
      dislikes: 0,
      cover: 'http://www.socialmemorycomplex.net/images/porbp-199x300.jpg'

    },
    {
      name: 'Sherlock Holmes' ,
      price: 9.5,
      pubdate: new Date('1892','10','14'),
      likes: 0,
      dislikes: 0,
      cover: 'http://www.aboutgreatbooks.com/wp-content/uploads/2015/09/the-complete-sherlock-holmes-sherlock-holmes-books-679x1024.jpg'

    },
    {
      name: 'Deception Point' ,
      price: 1.5,
      pubdate: new Date('2001','08','01'),
      likes: 0,
      dislikes: 0,
      cover: 'http://images.gr-assets.com/books/1386924347l/976.jpg'

    }
  ];
  $scope.plusOne = function(index) {
    $scope.products[index].likes += 1;
  };
  $scope.minusOne = function(index) {
    $scope.products[index].dislikes += 1;
  };
}]);