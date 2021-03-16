import { createServer, Model } from 'miragejs'

export const makeServer = () => {
  return createServer({
    models: {
      transaction: Model,
    },

    seeds(server) {
      server.db.loadData({
        transactions: [
          {
            id: 1,
            title: 'Desenvolvimento de website',
            price: 3000,
            type: 'income',
            category: 'Dev',
            created_at: new Date(),
          },
          {
            id: 2,
            title: 'Compras da semana',
            price: 450,
            type: 'outcome',
            category: 'Mercado',
            created_at: new Date(),
          },
          {
            id: 3,
            title: 'Desenvolvimento de website',
            price: 4500,
            type: 'income',
            category: 'Dev',
            created_at: new Date(),
          },
          {
            id: 4,
            title: 'Desenvolvimento de website',
            price: 2000,
            type: 'income',
            category: 'Dev',
            created_at: new Date(),
          },
          {
            id: 5,
            title: 'Petshop',
            price: 16000,
            type: 'outcome',
            category: 'Pet',
            created_at: new Date(),
          },
          {
            id: 6,
            title: 'Calça para jovem de 16 anos',
            price: 319,
            type: 'outcome',
            category: 'Roupas',
            created_at: new Date(),
          },
          {
            id: 7,
            title: 'Bolso direito da calça',
            price: 5,
            type: 'income',
            category: 'Roupas',
            created_at: new Date(),
          },
          {
            id: 8,
            title: 'Desenvolvimento de website',
            price: 2200,
            type: 'income',
            category: 'Dev',
            created_at: new Date(),
          },
        ],
      })
    },

    routes() {
      this.namespace = 'api'

      this.get('/transactions', () => {
        return this.schema.all('transaction')
      })

      this.post('/transactions', (schema, request) => {
        const data = JSON.parse(request.requestBody)

        return schema.create('transaction', data)
      })
    },
  })
}
