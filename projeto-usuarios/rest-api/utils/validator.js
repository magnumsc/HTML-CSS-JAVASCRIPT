module.exports = {

    user: (app, req, res) => {
        req.assert('name', 'O nome é obrigatório.').notEmpty();
        req.assert('email', 'O email é inválido.').notEmpty().isEmail();
        req.assert('password', 'A senha é obrigatória.').notEmpty();
        let errors = req.validationErrors();

        if (errors) {
            app.utils.error.send(errors, req, res);
            return false;
        } else {
            return true;
        }
    }

};