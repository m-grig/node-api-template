import dotenv from 'dotenv';
import { expressApp } from './app';
import { TestController } from './api/example/controller';

dotenv.config();
const PORT = process.env.PORT;
const myApp = expressApp([new TestController()]);

myApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
