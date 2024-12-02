const request = require('supertest');
const baseUrl = 'https://chatapi.jetsalesbrasil.com';
require('dotenv').config();

email = process.env.DB_USER;
password = process.env.DB_PASS;

describe('Teste de Login', () => {
  it('Deve retornar um token válido ao realizar login', async () => {
    const response = await request(baseUrl)
      .post('/auth/login/')
      .send({
        email: email,
        password: password,
      });

    expect(response.status).toBe(200);
    expect(response.body).toHaveProperty('token');
  });

  it('Deve retornar erro ao usar credenciais inválidas', async () => {
    const response = await request(baseUrl)
      .post('/auth/login/')
      .send({
        email: 'usuario_invalido@gmail.com',
        password: 'senha_errada',
      });

    expect(response.status).toBe(401);
  });
});
