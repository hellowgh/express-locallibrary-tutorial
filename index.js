const mongoose = require('mongoose');
const Car = require('./model/car');
const Story = require('./model/story');
const Author = require('./model/author');

mongoose.set("strictQuery", false);

const mongoDB = "mongodb://127.0.0.1:27017/cars";

(async function main() {
    try {
        await mongoose.connect(mongoDB);

        await action();
    } catch (e) {
        console.log(44, e)
    }
})();

async function action() {
    const query = Car.find({color: 'blue'});

    const res = await query.select('price color')
        .limit(5)
        .sort({price: -1})
        .exec();

    console.log(33, res);
}