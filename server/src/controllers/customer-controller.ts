import { Request, Response} from 'express';
import pool from '../database';

class CustomerController {

    public async getCustomer(req: Request, res: Response):Promise<any> {
        const { id } = req.params;
        const customers = await pool.query("SELECT * FROM cliente WHERE id = ?", [id]);
        if(customers.length > 0) {
            return res.json(customers[0]);
        }
        res.status(404).json({message: "An error has occurred."});
    }

    public async updateCustomer(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await pool.query("UPDATE cliente SET ? WHERE id = ?", [req.body, id]);
        res.json({message: "The user has been updated"});
    }

    public async deleteCustomer(req: Request, res: Response):Promise<void> {
        const { id } = req.params;
        await pool.query("DELETE FROM cliente WHERE id = ?", [id]);
        res.json({message: "The user has been deleted succesfully"});
    }
}

const customerController = new CustomerController();
export default customerController;