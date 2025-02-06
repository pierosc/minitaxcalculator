import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Paper,
  Select,
  TextField,
} from "@mui/material";

function App() {
  const [count, setCount] = useState(0);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      {/* <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div> */}
      <h1>Mini Tax Calculator</h1>
      <Paper elevation={24} padding={"12px"}>
        <div style={{ padding: "20px" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Age</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              {taxOptions.map((opt) => (
                <MenuItem value={opt.value}>{opt.name} </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            id="outlined-basic"
            label="Cantidad de hijos"
            variant="outlined"
          />
        </div>
      </Paper>
      <p className="read-the-docs">We do it better!</p>
    </>
  );
}

export default App;

const taxOptions = [
  { name: "Single", value: 14600 },
  { name: "MFJ", value: 29200 },
  { name: "HOH", value: 27000 },
];
