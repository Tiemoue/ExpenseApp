const mongoose = require('mongoose');

const conn = mongoose.connect(process.env.ATLAS_URI)
.then