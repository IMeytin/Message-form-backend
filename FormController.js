const FormModel = require('./FormModel');

module.exports.formSubmitted = async (req, res) => {
    const { name, email, message} = req.body;

    FormModel.create({ name, email, message})
        .then(data => {
            console.log('Message recieved and added', data)
            res.send('recived')
        })
        .catch(err => {
            console.log("Error saving message", err);
            res.status(500).send({ message: "Error saving message" });
        })
}