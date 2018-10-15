var data = [
    {
        "id": 1,
        "fullname": "Ryan Grey"
    },
    {
        "id": 2,
        "fullname": "Jacqueline Myers"
    },
    {
        "id": 3,
        "fullname": "Henry Bloggs"
    },
    {
        "id": 4,
        "fullname": "Michael McManns"
    },
    {
        "id": 5,
        "fullname": "Vanessa Riley"
    }
]

var ul = document.getElementById("list");

data.forEach(function(element) {
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(element.id + ". " + element.fullname));
  ul.appendChild(li);
});





var main = [
    {
        "user_id": 1,
        "quest_paths": [
            {
                "order": 0,
                "quest": {
                    "id": 1,
                    "name": "Curiosity - The Space Rover"
                },
                "mark": {
                    "submitted": true,
                    "completion": 100,
                    "mark": 100
                }
            },
            {
                "order": 1,
                "quest": {
                    "id": 2,
                    "name": "The 4 Hour Work Week",
                    "is_active": false
                },
                "mark": {
                    "submitted": true,
                    "completion": 55,
                    "mark": null
                }
            },
            {
                "order": 2,
                "quest": {
                    "id": 3,
                    "name": "Let's Learn about Economics"
                },
                "mark": {
                    "submitted": true,
                    "completion": 27,
                    "mark": 10
                }
            }
        ]
    },
    {
        "user_id": 2,
        "quest_paths": [
            {
                "order": 0,
                "quest": {
                    "id": 2,
                    "name": "The 4 Hour Work Week",
                    "is_active": false
                },
                "mark": {
                    "submitted": true,
                    "completion": 75,
                    "mark": null
                }
            },
            {
                "order": 1,
                "quest": {
                    "id": 3,
                    "name": "Let's Learn about Economics"
                },
                "mark": {
                    "submitted": false,
                    "completion": 0,
                    "mark": null
                }
            }
        ]
    },
    {
        "user_id": 3,
        "quest_paths": [
            {
                "order": 0,
                "quest": {
                    "id": 1,
                    "name": "Curiosity - The Space Rover"
                },
                "mark": {
                    "submitted": true,
                    "completion": 85,
                    "mark": 15
                }
            },
            {
                "order": 1,
                "quest": {
                    "id": 3,
                    "name": "Let's Learn about Economics"
                },
                "mark": {
                    "submitted": false,
                    "completion": 0,
                    "mark": null
                }
            }
        ]
    },
    {
        "user_id": 4,
        "quest_paths": [
            {
                "order": 0,
                "quest": {
                    "id": 1,
                    "name": "Curiosity - The Space Rover"
                },
                "mark": {
                    "submitted": true,
                    "completion": 67,
                    "mark": 80
                }
            },
            {
                "order": 1,
                "quest": {
                    "id": 3,
                    "name": "Let's Learn about Economics"
                },
                "mark": {
                    "submitted": false,
                    "completion": 0,
                    "mark": null
                }
            }
        ]
    },
    {
        "user_id": 5,
        "quest_paths": [
            {
                "order": 0,
                "quest": {
                    "id": 1,
                    "name": "Curiosity - The Space Rover"
                },
                "mark": {
                    "submitted": true,
                    "completion": 100,
                    "mark": 100
                }
            },
            {
                "order": 1,
                "quest": {
                    "id": 2,
                    "name": "The 4 Hour Work Week",
                    "is_active": false
                },
                "mark": {
                    "submitted": false,
                    "completion": 0,
                    "mark": null
                }
            },
            {
                "order": 2,
                "quest": {
                    "id": 3,
                    "name": "Let's Learn about Economics"
                },
                "mark": {
                    "submitted": true,
                    "completion": 40,
                    "mark": 65
                }
            }
        ]
    }
]


var answer = document.getElementById("quest");

main.forEach(function(element) {
  var body = document.createElement("body");
  body.appendChild(document.createTextNode(element.user_id + ". " + element.quest_paths));
  answer.appendChild(body);
});
