const jwt = require('../index');
const chai = require('chai');
const localStorage = require('mock-local-storage');
const mocktoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyLCJpc3MiOiJodHRwOi8vbG9jYWxob3N0OjgwODAvYXBpL3YxL3VzZXIvbG9naW4ifQ.HquajVadN8GrzqCyfb9-l_HRmvkKAWO7ShIPHwcMOjE";

describe('#token.get', function () {

    it('Return null if token is not in localstorage ', function () {
        chai.assert.notExists(jwt.get())
    });

    it('Set token in localstorage ', function () {
        jwt.set(mocktoken);
        chai.assert.notExists(jwt.get(), mocktoken)
    });
});

describe('#token.remove', function () {

    it('Remove token from localstorage ', function () {
        jwt.set(mocktoken);
        jwt.remove();
        chai.assert.notExists(jwt.get())
    });
});

describe('#token.isValid', function () {

    it('Validating token from localstorage ', function () {
        jwt.set(mocktoken);
        chai.assert.isTrue(jwt.isValid())
    });
});
