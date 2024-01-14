const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const storySchema = new Schema({
    author: {
        type: Schema.Types.ObjectId,
        ref: 'Author'
    },
    title: String,
})

const Story = mongoose.model('story', storySchema);

module.exports = Story;