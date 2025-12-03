import express from 'express';
import { createAnggota, getAllAnggota, getAnggotaById, updateAnggota, deleteAnggota } from '../controllers/anggotaController.js';

const router = express.Router();

router.post('/', createAnggota);         // POST /api/anggota
router.get('/', getAllAnggota);          // GET /api/anggota
router.get('/:id', getAnggotaById);      // GET /api/anggota/:id
router.put('/:id', updateAnggota);       // PUT /api/anggota/:id
router.delete('/:id', deleteAnggota);    // DELETE /api/anggota/:id

export default router;