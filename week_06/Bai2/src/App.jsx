import { useEffect } from 'react';
import { useRecoilState } from 'recoil';
import { themeAtom } from './state/atoms';
import ComA from "./components/ComA";
import ComB from "./components/ComB";

function App() {
  const [theme, setTheme] = useRecoilState(themeAtom);

  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
  };

  useEffect(() => {
    if (theme === 'dark') {
      document.body.style.backgroundColor = '#121212';
      document.body.style.color = 'white';
    } else {
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
    }
  }, [theme]);

  return (
    <div>
      <section>
        <h1>Counter Global</h1>
        <ComA />
        <ComB />
      </section>


      <section style={{ marginTop: '30px' }}>
        <h1>Mở rộng : Theme Toggle</h1>
        <p>Giao diện hiện tại: <strong>{theme.toUpperCase()}</strong></p>
        <button onClick={toggleTheme}>
          Đổi sang chế độ {theme === 'light' ? 'Tối' : 'Sáng'}
        </button>
      </section>
    </div>
  );
}

export default App;