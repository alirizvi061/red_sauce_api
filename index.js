const express = require("express");

const app = express();

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
      useFindAndModify: false
});

app.get('/', (req, res) => res.send('Hello World'));

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server is running on port ${port}`));