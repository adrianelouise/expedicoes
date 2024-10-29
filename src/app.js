import express from 'express';
import connectDB from './config/db.js'
import explorersRouter from './routers/explorerRouter.js';
import speciesRouter from './routers/speciesRouter.js';
import expeditionsRouter from './routers/expeditionRouter.js';

connectDB();


const app = express();
app.use(express.json());

app.use('/explorer', explorersRouter);
app.use('/species', speciesRouter);
app.use('/expedition', expeditionsRouter);

app.listen(3000, () => console.log('Server running on port 3000'));


