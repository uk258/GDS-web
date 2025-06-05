import PageBase from "./components/PageBase";
import './App.css';
function App() {
  return (
    <div className="App">
      {/* PageBase组件用于渲染整个页面的基础结构和样式，包含登录、注册和重置密码等功能。 */}
      <PageBase />
    </div>
  );
}

export default App;