"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChefsController = void 0;
const chefs_service_1 = require("../services/chefs.service");
class ChefsController {
    static async getChefs(req, res) {
        try {
            const service = new chefs_service_1.ChefsService();
            const chefs = await service.getChefs();
            return res.send(chefs);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async getChef(req, res) {
        try {
            const service = new chefs_service_1.ChefsService();
            const param = req.body;
            const chef = await service.getChef(param);
            return res.send(chef);
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async createChef(req, res) {
        try {
            const params = req.body;
            const service = new chefs_service_1.ChefsService();
            const chef = await service.createChef(params);
            return res.status(200).send("Chef successfully created");
        }
        catch (error) {
            return res.send(error);
        }
    }
    static async updateChef(req, res) {
        try {
            const params = req.body;
            const service = new chefs_service_1.ChefsService();
            const chef = await service.updateChef(params);
            return res.send(chef);
        }
        catch (error) {
            return res.send(error);
        }
    }
}
exports.ChefsController = ChefsController;
