# airthmatic-mcq-generator

# API 

POST host:port/subtraction

Body: {
    "numOfQ": 5,
    "minuendDigit": 3,
    "subtrahendDigit": 2,
    "borrowing": true
}

Response: [
    {
        "minuend": 802,
        "subtrahend": 76,
        "correctAnswer": 726,
        "options": [
            845,
            1047,
            726,
            267
        ]
    },
    {
        "minuend": 329,
        "subtrahend": 53,
        "correctAnswer": 276,
        "options": [
            245,
            276,
            366,
            627
        ]
    },
    {
        "minuend": 154,
        "subtrahend": 81,
        "correctAnswer": 73,
        "options": [
            37,
            94,
            95,
            73
        ]
    }
]