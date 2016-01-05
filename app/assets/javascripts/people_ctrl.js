/* global angular */

(function() {
  angular.module("app").controller("peopleCtrl", function($scope) {
    $scope.people = [
      {
        name: "Bob",
        bio: "Small batch salvia Marfa chillwave delectus, odio forage art party laborum street art minim fixie locavore hoodie mollit. Delectus flexitarian yr laborum, master cleanse Intelligentsia Shoreditch wayfarers 3 wolf moon eiusmod American Apparel. Lo-fi anim Banksy raw denim before they sold out fixie cardigan +1, ethnic Kickstarter. Sustainable velit tote bag, master cleanse lomo Wes Anderson exercitation cliche. Laborum cred keffiyeh skateboard, gluten-free duis esse nulla proident butcher +1 deserunt hoodie four loko. Anim Pitchfork ad trust fund, aliqua nostrud pop-up quinoa disrupt cupidatat sriracha Helvetica minim. Semiotics nesciunt tousled, synth Tumblr cornhole sriracha hella.",
        bioVisible: true
      },
      {
        name: "Alice",
        bio: "Tattooed letterpress gluten-free ugh, adipisicing scenester church-key gentrify tousled gastropub pour-over Shoreditch asymmetrical lomo High Life. Mumblecore nostrud Godard 3 wolf moon quinoa forage. Next level Bushwick Schlitz, dolore cliche salvia Brooklyn minim dreamcatcher you probably haven't heard of them before they sold out YOLO. Tattooed Tumblr delectus blog photo booth. Four loko flannel irony lomo, YOLO Odd Future Bushwick magna sunt PBR&B slow-carb. Biodiesel cornhole sunt flannel non fugiat. Raw denim nostrud officia Odd Future 8-bit, PBR nesciunt four loko viral.",
        bioVisible: true
      },
      {
        name: "Tibor",
        bio: "Incididunt photo booth ethical reprehenderit adipisicing. Echo Park readymade Bushwick distillery Tonx. +1 semiotics qui duis literally. 8-bit et freegan chia mixtape, keffiyeh ut in anim chillwave enim cupidatat. Ea tofu trust fund you probably haven't heard of them. Typewriter placeat raw denim, excepteur deep v normcore sustainable. High Life vero irony squid.",
        bioVisible: true
      }
    ];

    $scope.toggleBio = function(inputPerson) {
      inputPerson.bioVisible = !inputPerson.bioVisible;
    };

    $scope.addPerson = function(inputName, inputBio) {
      var person = {
        name: inputName,
        bio: inputBio
      };
      $scope.people.push(person);
    };

    $scope.deletePerson = function(inputIndex) {
      $scope.people.splice(inputIndex, 1);
    };

    window.$scope = $scope;
  });
})();