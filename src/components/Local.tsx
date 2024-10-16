import { Button } from "@/components/ui/button";
import {
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

const Local = ({ inputName }: { inputName: string }) => {
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
    <div className="p-4">
      <CardHeader>
        <CardTitle>Save Input to Local Storage</CardTitle>
        <CardDescription>
          Enter a value and save it to local storage.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Input
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder="Enter something..."
          className="mb-4"
        />
        <Button onClick={handleSave}>Save</Button>
      </CardContent>
    </div>
  );
};

export default Local;
