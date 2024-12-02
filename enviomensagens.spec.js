const request = require('supertest');
const baseUrl = 'https://chatapi.jetsalesbrasil.com';
require('dotenv').config();

email = process.env.DB_USER;
password = process.env.DB_PASS;

beforeAll(async () => {
    const response = await request(baseUrl)
      .post('/auth/login/')
      .send({
        email: email,
        password: password,
      });
  
    if (response.status === 200 && response.body.token) {
      token = response.body.token; 
    } else {
      throw new Error('Falha ao obter o token.');
    }
});

describe ('Envio de mensagens de texto', () => {
    it('Deve retornar um token válido ao enviar mensagens de texto', async () => {
        const response = await request(baseUrl)
         .post("/messages/1894696/")
         .set('Authorization', `Bearer ${token}`)
         .send({
            "body": "Olá, Roseane :D",
            "fromMe": true
         })
         expect(response.status).toBe(200);
    })
})

describe ('Envio de mensagens de texto', () => {
  it('Deve retornar erro ao enviar mensagens de texto sem um token válido', async () => {
      const response = await request(baseUrl)
       .post("/messages/1894696/")
       .send({
          "body": "Olá, Roseane :D",
          "fromMe": true
       })
       expect(response.status).toBe(403);
  })
})

describe ('Envio de mensagens de audio', () => {
    it('Deve retornar um token válido ao enviar mensagens de audio', async () => {
        const response = await request(baseUrl)
         .post("/messages/1894696/")
         .set('Authorization', `Bearer ${token}`)
         .attach('medias', 'audio_teste.mp3')
         .field('fromMe', 'true')
         .field('note', 'false')
         .field('body', '')
         expect(response.status).toBe(200);
    })
})

describe ('Envio de imagens', () => {
  it('Deve retornar um token válido ao enviar imagens', async () => {
      const response = await request(baseUrl)
       .post("/messages/1894696/")
       .set('Authorization', `Bearer ${token}`)
       .attach('medias', 'img_teste.png')
       .field('fromMe', 'true')
       .field('body', 'Enviando um wallpaper bonito')
       expect(response.status).toBe(200);
  })
})




