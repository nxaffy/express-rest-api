import { findAll } from '../../models/customer'

export const getCustomers = (req, res) => {
  findAll(function (error, customers) {
    if (error) {
      log.error(error, 'error finding customers')
      res.status(500).send(error)
      return
    }
    res.json(customers)
  })
}
