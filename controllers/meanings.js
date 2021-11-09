import express, { query } from 'express';

let meanings = [
    {
        "firstName": "a",
        "gender": "male",
        "meaning": "Ambition"
    },
    {
        "firstName": "a",
        "gender": "female",
        "meaning": "Adorable"
    },
    {
        "firstName": "b",
        "gender": "male",
        "meaning": "Breathtaking"
    },
    {
        "firstName": "b",
        "gender": "female",
        "meaning": "Believe"
    },
    {
        "firstName": "c",
        "gender": "male",
        "meaning": "Calm"
    },
    {
        "firstName": "c",
        "gender": "female",
        "meaning": "Confident"
    },
    {
        "firstName": "d",
        "gender": "male",
        "meaning": "Direction"
    },
    {
        "firstName": "d",
        "gender": "female",
        "meaning": "Discovery"
    },
    {
        "firstName": "e",
        "gender": "male",
        "meaning": "Education"
    },
    {
        "firstName": "e",
        "gender": "female",
        "meaning": "Extraordinary"
    },
    {
        "firstName": "f",
        "gender": "male",
        "meaning": "Funny"
    },
    {
        "firstName": "f",
        "gender": "female",
        "meaning": "Focus"
    },
    {
        "firstName": "g",
        "gender": "male",
        "meaning": "Giving"
    },
    {
        "firstName": "g",
        "gender": "female",
        "meaning": "Gift"
    },
    {
        "firstName": "h",
        "gender": "male",
        "meaning": "Honor"
    },
    {
        "firstName": "h",
        "gender": "female",
        "meaning": "Heart"
    },
    {
        "firstName": "i",
        "gender": "male",
        "meaning": "Independent"
    },
    {
        "firstName": "i",
        "gender": "female",
        "meaning": "Inspiration"
    },
    {
        "firstName": "j",
        "gender": "male",
        "meaning": "Justice"
    },
    {
        "firstName": "j",
        "gender": "female",
        "meaning": "Joy"
    },
    {
        "firstName": "k",
        "gender": "male",
        "meaning": "King"
    },
    {
        "firstName": "k",
        "gender": "female",
        "meaning": "Knowledgeable"
    },
    {
        "firstName": "l",
        "gender": "male",
        "meaning": "Life"
    },
    {
        "firstName": "l",
        "gender": "female",
        "meaning": "Lucky"
    },
    {
        "firstName": "m",
        "gender": "male",
        "meaning": "Motivation"
    },
    {
        "firstName": "m",
        "gender": "female",
        "meaning": "Mindfulness"
    },
    {
        "firstName": "n",
        "gender": "male",
        "meaning": "New"
    },
    {
        "firstName": "n",
        "gender": "female",
        "meaning": "Natural"
    },
    {
        "firstName": "o",
        "gender": "male",
        "meaning": "One"
    },
    {
        "firstName": "o",
        "gender": "female",
        "meaning": "Optimistic"
    },
    {
        "firstName": "p",
        "gender": "male",
        "meaning": "Positive"
    },
    {
        "firstName": "p",
        "gender": "female",
        "meaning": "Proud"
    },
    {
        "firstName": "q",
        "gender": "male",
        "meaning": "Quality"
    },
    {
        "firstName": "q",
        "gender": "female",
        "meaning": "Queen"
    },
    {
        "firstName": "r",
        "gender": "male",
        "meaning": "Ready"
    },
    {
        "firstName": "r",
        "gender": "female",
        "meaning": "Rainbow"
    },
    {
        "firstName": "s",
        "gender": "male",
        "meaning": "Smart"
    },
    {
        "firstName": "s",
        "gender": "female",
        "meaning": "Silver"
    },
    {
        "firstName": "t",
        "gender": "male",
        "meaning": "Top"
    },
    {
        "firstName": "t",
        "gender": "female",
        "meaning": "True"
    },
    {
        "firstName": "u",
        "gender": "male",
        "meaning": "Ultimate"
    },
    {
        "firstName": "u",
        "gender": "female",
        "meaning": "Unique"
    },
    {
        "firstName": "v",
        "gender": "male",
        "meaning": "Value"
    },
    {
        "firstName": "v",
        "gender": "female",
        "meaning": "Victory"
    },
    {
        "firstName": "w",
        "gender": "male",
        "meaning": "Wealthy"
    },
    {
        "firstName": "w",
        "gender": "female",
        "meaning": "Wise"
    },
    {
        "firstName": "x",
        "gender": "male",
        "meaning": "Exellent"
    },
    {
        "firstName": "x",
        "gender": "female",
        "meaning": "Exactly"
    },
    {
        "firstName": "y",
        "gender": "male",
        "meaning": "Yes"
    },
    {
        "firstName": "y",
        "gender": "female",
        "meaning": "Yummy"
    },
    {
        "firstName": "z",
        "gender": "male",
        "meaning": "Zealous"
    },
    {
        "firstName": "z",
        "gender": "female",
        "meaning": "Zestful"
    }
];

export const getAllMeanings = (req, res) => {
    res.send(meanings);
}

export const addMeaning = (req, res) => {
    const mn = req.query;
    const newM = {
        "firstName": mn.firstName.toLowerCase().charAt(0),
        "gender": mn.gender,
        "meaning": mn.meaning
    }
    meanings.push(newM);
    res.send(`Meaning ${mn.meaning} added to the database!`);
}

export const searchMeaning = (req, res) => {
    const mn = req.query;
    const firstLetter = mn.firstName.toLowerCase().charAt(0);
    const searchGender = mn.gender;
    const result = meanings.find((m) => m.firstName === firstLetter && m.gender === searchGender);
    res.send(`Your first name means ${result.meaning}`);
}

export const deleteMeaning = (req, res) => {
    const mn = req.query;
    const firstLetter = mn.firstName.toLowerCase().charAt(0);
    const searchGender = mn.gender;
    meanings = meanings.filter((m) => m.firstName != firstLetter || m.gender != searchGender);
    res.send(`Meaning deleted from the database!`);
}

export const updateMeaning = (req, res) => {
    const mn = req.query;
    const firstLetter = mn.firstName.toLowerCase().charAt(0);
    const searchGender = mn.gender;
    const newMeaning = mn.meaning;
    const target = meanings.find((m) => m.firstName === firstLetter && m.gender === searchGender);
    if(newMeaning) {
        target.meaning = newMeaning;
        res.send('Meaning has been updated!');
    }else{
        res.send('Fail to update');
    }
}