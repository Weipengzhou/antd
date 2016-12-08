import './index.html';
import './index.css';
import dva from 'dva';

// 1. Initialize
const app = dva({
  initialState: {
     products: [
       { name: '表哥', id: 1 },
       { name: '猿仔', id: 2 },
       { name: '基哥', id:  3}
     ],
   },
 });
// 2. Plugins
//app.use({});

// 3. Model
app.model(require('./models/products'));

// 4. Router
app.router(require('./router'));



// 5. Start
app.start('#root');
