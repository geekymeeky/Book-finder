import Banner from "./components/Banner";
import "./App.css";

function App() {
  return (
    <div>
      <Banner />
      <div
        className="bg-blue-700 h-screen"
        style={{
          backgroundImage: `url(https://lh3.googleusercontent.com/q81BJXmKV2Wr9UpGjMMsT7L1swqoJ-ozGm4lxatjZuKKfWL682ZZq-EYhgaoeiIXyr2l8hEWXOfTT2q7aM-20yHd5zN_bS6hkk1wO1sui_KQEbVu_ksdToYpcYvTDp9s_br3kN3B=w2400)`,
          backgroundSize: "cover",
          backgroundRepeat: "repeat-y",
          backgroundBlendMode: "overlay",
        }}
      />
    </div>
  );
}

export default App;
