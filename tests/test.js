const chakram = require('chakram'), expect = chakram.expect;
//chakram adında bir kütüpanemiz bulunuyor.
//Bunu dışarıdan node_modules üzerinden chakram projesini ayağa kaldırıyoruz.(importlama )
//describe== bir modülü,grubu temsil ediyor
//it==test case i temsil ediyor (testlerimizi yazdığımız alan )
// https://petstore.swagger.io/ sitesi kullanılarak  demo yapılmıştır.


describe('User Api Tests', () => {

    it('POST /v2/user UserCreate', () => {
        const payload = {
            "id": 5,
            "username": "deneme",
            "firstName": "hayvantest",
            "lastName": "testQA",
            "email": "test@hotmail.com",
            "password": "321",
            "phone": "485895955",
            "userStatus": 0
        }
        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user',
            body: payload,
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('Get /v2/user/ GetUserInfo', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/test')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('Get /v2/user/Logout', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/logout')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('Get /v2/user/Login', () => {
        cy.request('GET', 'https://petstore.swagger.io/v2/user/login?username=admin&password=admin')
        .then((response) => {
            expect(response.status).to.eq(200)
        })    
    })

    it('DELETE /v2/user/test UserDelete', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://petstore.swagger.io/v2/user/test'
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('PUT /v2/user/ UpdateUser', () => {
        const payload = {
            "id": 8,
            "username": "test",
            "firstName": "kedicik",
            "lastName": "deneme",
            "email": "testqa@hotmail.com",
            "password": "7777",
            "phone": "4411511485",
            "userStatus": 0
        }

        const headersPayload = {
            'Content-Type': 'application/json'
        }

        cy.request({
            method: 'PUT',
            url: 'https://petstore.swagger.io/v2/user/test',
            headers: headersPayload,
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })

    it('POST /v2/user/ CreateWithList', () => {
        const payload = [
            {
                "id": 7,
                "username": "QAtest",
                "firstName": "test",
                "lastName": "QA",
                "email": "testQA@gmail.com",
                "password": "7845",
                "phone": "262322262",
                "userStatus": 0
            },
            {
                "id": 8,
                "username": "QAtest2",
                "firstName": "deneme",
                "lastName": "QA",
                "email": "testQA@gmail.com",
                "password": "784592",
                "phone": "8522322262",
                "userStatus": 0
            },
        ]    

        const headersPayload = {
            'Content-Type': 'application/json',
            'accept': 'application/json'
        }

        cy.request({
            method: 'POST',
            url: 'https://petstore.swagger.io/v2/user/createWithList',
            headers: headersPayload,
            body: payload
        })
        .then((response) => {
            expect(response.status).to.eq(200)
        })
    })
})    
