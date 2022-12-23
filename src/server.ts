import dotenv from 'dotenv';
import { expressApp } from './app';
import { TestController } from './api/test/controller';

dotenv.config();
const PORT = process.env.PORT;
const myApp = expressApp([new TestController()]); //express([new TestController()]);

myApp.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
