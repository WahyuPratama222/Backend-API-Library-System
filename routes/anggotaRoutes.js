import express from 'express';
import { getAllAnggota, getAnggotaById, patchAnggota, deleteAnggota, postAnggota, putAnggota } from '../controllers/anggotaController.js';

const router = express.Router();

router.post('/', postAnggota);         // POST /api/anggota
router.get('/', getAllAnggota);          // GET /api/anggota
router.get('/:id', getAnggotaById);      // GET /api/anggota/:id
router.put('/:id', putAnggota);       // PUT /api/anggota/:id
router.patch('/:id', patchAnggota);
router.delete('/:id', deleteAnggota);    // DELETE /api/anggota/:id

export default router;