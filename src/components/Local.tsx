import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useEffect, useState } from "react";

const Local = ({ inputName, label }: { inputName: string; label?: string }) => {
  console.log("🚀 ~ Local ~ inputName:", inputName);
  const [inputValue, setInputValue] = useState<string>("");

  useEffect(() => {
    const savedValue = localStorage.getItem(inputName);
    if (savedValue) {
      setInputValue(savedValue);
    }
  }, []);

  const handleSave = () => {
    localStorage.setItem(inputName, inputValue);
  };

  return (
    <div>
      <Label htmlFor="picture">{label || inputName}</Label>
      <Input
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <Button onClick={handleSave}>Guardar</Button>
    </div>
  );
};

export default Local;
